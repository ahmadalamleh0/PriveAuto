# Privé Auto — placeholder and replacement register

This project was duplicated on 2026-11-09 from the Mansor Customs site. The
design is unchanged. Everything below is a placeholder or carried-over content
that must be replaced or confirmed by Privé Auto before launch. Nothing about
Privé Auto's business has been invented.

## Done

- Logo: PRIVÉ redrawn as SVG from the client's logo (`components/brand/Wordmark.tsx`): intro, header, footer, Instagram avatar, icons and share image.
- Instagram: @priveauto (profile, message, Reels links; API default account).
- Reviews: five genuine Google reviews (star ratings still to supply).
- Brand strip: Mansory, Limited Spec Automotive, Strasse Forged (client-supplied logos).
- Visit Us preview: the client's Miami satellite overview.

## Placeholders to fill (visible on the site)

| What | Where | Current placeholder |
|---|---|---|
| Address | `site.location` in `src/data/site.ts` | "Address to be confirmed" (lat/lng 0, 0) |
| Production URL | `vite.config.ts` (or env `SITE_URL`) | `https://prive-auto.example` |
| Contact, booking | `site.contact`, `site.hero.cta` | Unset (Coming Soon dialog), as before |

## Mansor Customs imagery still in use (replace)

- **Hero photo** `src/assets/images/hero/shopfront-twilight.jpg`: shows the MANSOR CUSTOMS sign.
- **Hero films** `src/assets/videos/hero-r8*.mp4` (and unused `hero.mp4`, `hero-mobile.mp4`, `hero-poster.jpg`): Mansor's footage.
- **Instagram Reels** `src/assets/reels/*`: Mansor's Reels; the camo-Lamborghini one shows the MANSOR sign, and the BMW one has "Bergen County" burned into the video.
- **Recent Work** `src/assets/images/projects/*` (`src/data/projects.ts`): Mansor's builds. The BMW XM, M3 and McLaren shots were taken outside the shop under its sign; the pink G-Class interior shows a Mansor air freshener.
- **Tuning gallery** `src/assets/images/tuning/*` and the SF90 media: Mansor's workshop footage.
- **Service cards** `src/assets/images/services/*`: supplied by Mansor.
- **Beyond Factory** `src/assets/images/philosophy/*`: the burgundy Lamborghini render supplied for Mansor.

## Carried-over copy to confirm

The service list (hero, footer, cards, Build Brief options), the hero headline,
"The Whole Build." statement (now naming Privé Auto), Beyond Factory, the
"Tuned." copy and the FAQ were all written for Mansor Customs. They are
generic, but Privé Auto should confirm that each service and statement applies.

## Kept on purpose

- "Powered by Diablo" studio credit in the footer.
- Third-party brand logo files in `src/assets/logos/` (no longer shown).
- Internal history notes in `DESIGN.md` and in code comments, which describe
  the Mansor build's decisions.
