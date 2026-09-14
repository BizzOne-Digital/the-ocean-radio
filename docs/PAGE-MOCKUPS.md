# The Ocean Radio — Page mockups (reference)

Interactive wireframes: in Cursor, open `canvases/ocean-radio-page-mockups.canvas.tsx` beside the chat (Canvas panel). Switch **Home / Services / Contact** and **Desktop / Mobile** to preview each page layout.

Live URLs when running `npm run dev`: `http://localhost:3000/`, `/services`, `/contact`.

---

## Shared chrome (every page)

```
┌─────────────────────────────────────────────────────────────┐
│ TICKER: RELAXING FAVORITES • THE OCEAN RADIO (scroll hide) │
├─────────────────────────────────────────────────────────────┤
│ [LOGO]    ( Home | Services | Contact )    [FB] [LISTEN LIVE]│
└─────────────────────────────────────────────────────────────┘
```

Mobile: hamburger → full-height ocean menu with logo, links, Listen Live, Facebook.

---

## Home (`/`)

| # | Section | Content |
|---|---------|---------|
| 1 | Hero | Split headline, broadcast card, Listen / Explore |
| 2 | Listen Live | Full `LiveRadioPlayer` |
| 3 | Station intro | Format, focus, reach chips |
| 4 | About | Story + tags |
| 5 | Why Listen | 4 experience cards |
| 6 | Services preview | Advertising teaser |
| 7 | Soundscape | Cinematic visual band |
| 8 | Global audience | Philippines & North America |
| 9 | CTA | Listen + Contact |
| 10 | Footer | Nav, contact, social |

---

## Services (`/services`)

| # | Section | Content |
|---|---------|---------|
| 1 | Page hero | Radio + advertising headline |
| 2 | Online radio advertising | 4 benefits, contact for pricing |
| 3 | How it works | Connect → Plan → Launch |
| 4 | Audience | Reach + ideal partners |
| 5 | CTA | Contact + listen |
| 6 | Footer | Shared |

---

## Contact (`/contact`)

| # | Section | Content |
|---|---------|---------|
| 1 | Page hero | Let's Connect |
| 2 | Direct lines | Email, phone, Facebook, website cards |
| 3 | Listen banner | Equalizer + Listen Live |
| 4 | Form | Name, email, subject, message → `/api/contact` |
| 5 | CTA | Player + services |
| 6 | Footer | Shared |

---

## Brand colors (implementation)

| Token | Hex |
|-------|-----|
| Deep Ocean | `#063B4A` |
| Dark Ocean | `#042C38` |
| Ocean Blue | `#087EA4` |
| Bright Water | `#18B7D9` |
| Aqua | `#62D9E8` |
| Foam | `#F4FBFC` |
