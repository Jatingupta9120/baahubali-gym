# Baahubali Gym

Premium black-and-gold warrior-themed gym website demo.

**Live demo:** https://baahubali-gym.vercel.app

Built with Next.js 15, React 19, TypeScript and Tailwind CSS 4. Demo photography from Unsplash (see `public/images/CREDITS.md`).

---

# Baahubali Gym (बाहुबली GYM) - website

Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + Lucide icons. Black & gold, warrior-inspired.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages
`/` Home · `/about` · `/training` · `/facilities` · `/membership` (join, free trial, plan options) · `/gallery` · `/contact` (+ sitemap, robots, ExerciseGym JSON-LD)

## Where to edit
| What | File |
|---|---|
| Phone, WhatsApp, address, hours, email, logo file, tagline, map, form endpoint, domain | `src/config/site.ts` |
| Navigation, programmes, facilities, gallery items | `src/config/content.ts` |
| Photos (slot -> file) | `src/lib/images.ts` + `public/images/` |

## Needed from the client
- **Logo**: a clean logo file (PNG/SVG, ideally transparent). Put it in `public/brand/` and set `site.logo.src`. Until then a plain gold "बाहुबली GYM" wordmark is used - no emblem has been invented.
- **Full tagline**: Instagram showed "TRAIN LIKE A WARRIOR • FIGHT LIKE A K…" (cut off). Set `site.tagline` once confirmed.
- **Phone / WhatsApp, address, hours, email**: not provided. Currently placeholders (`+91 00000 00000`), so call/WhatsApp links go nowhere. Instagram thumbnails hint at a Hastinapur/Meerut location, but that is unverified and NOT used.
- **Real photos/reels**: Instagram (@baahubaligym) is mostly login-walled, so genuine posts could not be pulled. The homepage grid and gallery use free Unsplash demo photos (`public/images/CREDITS.md`). Send exported photos from the gym and replace files in `public/images`.
- **Facilities, programmes, plans & pricing**: lists are generic (strength, bodybuilding, personal training, group workouts) and plan cards are labelled placeholders. No prices, years, achievements or certifications are claimed.

## Enquiry forms
Join / free-trial / contact forms have validation, honeypot + minimum-fill-time spam protection and loading/success/error states. No backend is connected: until `NEXT_PUBLIC_FORM_ENDPOINT` is set (Formspree or own API, JSON POST) the form hands the enquiry to WhatsApp and says so. Nothing is stored.

## Re-fetching demo photos
`python -I scripts/fetch-photos.py` (needs Pillow + curl).

## Note
A stray `tsconfig.json`/`package.json` exists in the parent user folder, so `next.config.mjs` sets the `@` alias and tracing root explicitly.
