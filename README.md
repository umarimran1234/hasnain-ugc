# Hasnain UGC — portfolio

Next.js 15 (App Router) + Motion portfolio site for Hasnain UGC.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Edit content
All copy, prices, packages, FAQ and contact details live in `lib/data.ts`.
Replace the `[PLACEHOLDER]` values (prices, brand names, WhatsApp, Instagram, email).
Swap portfolio images in `public/images/` (9:16, ~540×960 or larger).

## Deploy on Vercel
Import this repo in Vercel → Framework preset: Next.js → Deploy. No env vars needed.
Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain for social previews.
