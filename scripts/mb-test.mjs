const q = `artist:Journey AND recording:"Don't Stop Believin'"`;
const url = `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(q)}&fmt=json&limit=1&inc=url-rels`;
const res = await fetch(url, {
  headers: { "User-Agent": "TheOceanRadio/1.0 (contact: sbyoung2000@gmail.com)" },
});
const j = await res.json();
const id = j.recordings?.[0]?.id;
const d = await fetch(`https://musicbrainz.org/ws/2/recording/${id}?inc=url-rels&fmt=json`, {
  headers: { "User-Agent": "TheOceanRadio/1.0 (contact: sbyoung2000@gmail.com)" },
}).then((r) => r.json());
console.log(d.relations?.filter((r) => r.url?.resource?.includes("spotify")).map((r) => r.url.resource));
