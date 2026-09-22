/**
 * ONE-TIME (on your machine): copy Spotify track IDs from a playlist into relaxing-favorites.json
 * Requires SPOTIFY_CLIENT_ID + SPOTIFY_CLIENT_SECRET in .env.local (not used at runtime on the site).
 *
 * Usage:
 *   SPOTIFY_PLAYLIST_ID=xxxxxxxx node scripts/import-spotify-playlist-to-json.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(dir, "../src/data/relaxing-favorites.json");
const envPath = join(dir, "../.env.local");

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

loadEnvFile(envPath);

const clientId = process.env.SPOTIFY_CLIENT_ID?.trim();
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET?.trim();
const playlistId =
  process.env.SPOTIFY_PLAYLIST_ID?.trim() ||
  process.env.NEXT_PUBLIC_SPOTIFY_RELAXING_PLAYLIST_ID?.trim();

if (!clientId || !clientSecret || !playlistId) {
  console.error(
    "Set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_PLAYLIST_ID (or NEXT_PUBLIC_SPOTIFY_RELAXING_PLAYLIST_ID)",
  );
  process.exit(1);
}

async function getToken() {
  const body = new URLSearchParams({ grant_type: "client_credentials" });
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body,
  });
  if (!res.ok) throw new Error("Spotify token failed");
  return (await res.json()).access_token;
}

function norm(s) {
  return s.trim().replace(/\s+/g, " ").toUpperCase();
}

const token = await getToken();
const tracks = [];
let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`;

while (url) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error("Playlist fetch failed");
  const data = await res.json();
  for (const item of data.items ?? []) {
    const t = item.track;
    if (!t?.id) continue;
    tracks.push({
      spotifyId: t.id,
      title: t.name,
      artist: t.artists.map((a) => a.name).join(", "),
    });
  }
  url = data.next;
}

const data = JSON.parse(readFileSync(jsonPath, "utf8"));
const byKey = new Map(tracks.map((t) => [`${norm(t.artist)}|${norm(t.title)}`, t.spotifyId]));

let matched = 0;
for (const row of data.tracks) {
  const key = `${norm(row.artist)}|${norm(row.title)}`;
  const id = byKey.get(key);
  if (id) {
    row.spotifyId = id;
    matched++;
  }
}

writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log(`Playlist tracks: ${tracks.length}, matched to JSON: ${matched}/${data.tracks.length}`);
