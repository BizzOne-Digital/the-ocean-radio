/**
 * Resolve Spotify track IDs via MusicBrainz (no Spotify API). ~1 req/s rate limit.
 * Usage: node scripts/resolve-spotify-ids-musicbrainz.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(dir, "../src/data/relaxing-favorites.json");

const UA = "TheOceanRadio/1.0 (contact: sbyoung2000@gmail.com)";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function spotifyIdFromUrl(url) {
  if (!url) return null;
  const m = String(url).match(/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/);
  return m?.[1] ?? null;
}

async function mbFetch(path) {
  const res = await fetch(`https://musicbrainz.org/ws/2${path}`, {
    headers: { "User-Agent": UA, Accept: "application/json" },
  });
  if (res.status === 503) {
    await sleep(3000);
    return mbFetch(path);
  }
  if (!res.ok) return null;
  return res.json();
}

async function findSpotifyId(artist, title) {
  const q = `recording:"${title.replace(/"/g, "")}" AND artist:"${artist.replace(/"/g, "")}"`;
  const search = await mbFetch(
    `/recording?query=${encodeURIComponent(q)}&fmt=json&limit=8&inc=url-rels`,
  );
  const recordings = search?.recordings ?? [];
  for (const rec of recordings) {
    for (const rel of rec.relations ?? []) {
      const id = spotifyIdFromUrl(rel.url?.resource);
      if (id) return id;
    }
  }
  return null;
}

const data = JSON.parse(readFileSync(jsonPath, "utf8"));
let resolved = 0;

for (let i = 0; i < data.tracks.length; i++) {
  const t = data.tracks[i];
  if (t.spotifyId) continue;
  process.stdout.write(`[${i + 1}/${data.tracks.length}] ${t.artist} - ${t.title} ... `);
  try {
    const id = await findSpotifyId(t.artist, t.title);
    if (id) {
      t.spotifyId = id;
      resolved++;
      console.log(id);
    } else {
      console.log("not found");
    }
  } catch (e) {
    console.log("error", e.message);
  }
  await sleep(1100);
  if (i % 10 === 9) {
    writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  }
}

writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log(`Done. Resolved ${resolved} new Spotify IDs.`);
