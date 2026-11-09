import limitedSpec from '@/assets/logos/limited-spec.png'
import mansory from '@/assets/logos/mansory.png'
import strasseForged from '@/assets/logos/strasse-forged.png'

/**
 * Brand banner below the hero: brands genuinely associated with the business.
 * Only `status: 'confirmed'` brands are shown.
 *
 * Privé Auto's brands, supplied by the client (2026-11-09): Mansory, Limited
 * Spec Automotive and Strasse Forged. Logos are the client's files, cut onto
 * transparency for the dark strip (originals in ~/Downloads). Logo files
 * from the Mansor build's strip remain unused in assets/logos/.
 *
 *   confirmed: supplied or confirmed by the client
 *   pending:   publicly mentioned; awaiting client
 *              approval. Never shown, and never captioned as a partner.
 *
 * `logo`: an OFFICIAL logo file from the brand (SVG preferred), rendered
 * monochrome. Until one is supplied, the brand's name is set in plain
 * tracked type: a name, not an imitation logo. `prepared: true` means the
 * file is already a light monochrome variant and must not be filtered.
 */

export type Brand = {
  name: string
  status: 'confirmed' | 'pending'
  /** How the business is associated with the brand, and where that's documented */
  relation: string
  source?: string
  /** `tall`: a two-line lockup, set a little taller so its small line stays legible */
  /** `color`: keep the logo's own colours at full strength (not dimmed to the strip's grey) */
  /** `stacked`: an emblem-over-name lockup (~2:1), set taller again */
  /** `wide`: a very wide lockup (~10:1), allowed more width so it isn't shrunk to a sliver */
  logo?: { src: string; prepared?: boolean; tall?: boolean; stacked?: boolean; color?: boolean; wide?: boolean }
}

export const brands: Brand[] = [
  {
    name: 'Mansory',
    status: 'confirmed',
    relation: 'Supplied by the client as a brand Privé Auto works with (2026-11-09)',
    // White on transparency, cut from MANSORY_Logo.svg.webp. Already light: no filter.
    logo: { src: mansory, prepared: true, wide: true },
  },
  {
    name: 'Limited Spec Automotive',
    status: 'confirmed',
    relation: 'Supplied by the client as a brand Privé Auto works with (2026-11-09)',
    // Cut off its black square; its red, white and grey are kept
    logo: { src: limitedSpec, prepared: true, tall: true, color: true },
  },
  {
    name: 'Strasse Forged',
    status: 'confirmed',
    relation: 'Supplied by the client as a brand Privé Auto works with (2026-11-09)',
    // The SF shield, cut off its white background; its silver is kept
    logo: { src: strasseForged, prepared: true, stacked: true, color: true },
  },
]

export const shownBrands = brands.filter((b) => b.status === 'confirmed')
