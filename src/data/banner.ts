
/**
 * Brand banner below the hero: brands genuinely associated with the business.
 * Only `status: 'confirmed'` brands are shown.
 *
 * PLACEHOLDERS: the Mansor Customs build's partner brands were removed (they
 * were that shop's associations). Add Privé Auto's confirmed brands; their
 * official logos can go back in via `logo`. Logo files from the old strip
 * remain in assets/logos/.
 *
 *   confirmed: independently confirmed by the creative director (2026-10-11)
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
  logo?: { src: string; prepared?: boolean; tall?: boolean; stacked?: boolean; color?: boolean }
}

export const brands: Brand[] = [
  { name: 'Partner 01', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
  { name: 'Partner 02', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
  { name: 'Partner 03', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
  { name: 'Partner 04', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
  { name: 'Partner 05', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
  { name: 'Partner 06', status: 'confirmed', relation: 'PLACEHOLDER: replace with a confirmed brand' },
]

export const shownBrands = brands.filter((b) => b.status === 'confirmed')
