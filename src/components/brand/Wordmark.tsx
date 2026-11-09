import { site } from '@/data/site'

type WordmarkProps = {
  className?: string
}

/**
 * The PRIVÉ logo, redrawn as vector outlines from the client's logo
 * (2026-11-09). It is custom lettering, not a font: wide geometric caps, an R
 * without a stem, and an É of three bars with no spine under a short flat
 * accent. Units: cap height = 100, so the paths read as proportions.
 *
 * One path per letter, so the intro can reveal them one by one:
 *   [data-wm-letter]  each letter, in reading order
 * Sized by font-size (see .wordmark in index.css).
 */
const LETTERS: string[][] = [
  // P: stem and a closed bowl (the bowl's counter is cut with evenodd)
  ['M0 0H89A18 18 0 0 1 107 18V42A18 18 0 0 1 89 60H18V100H0Z M18 16V44H85A4 4 0 0 0 89 40V20A4 4 0 0 0 85 16Z'],
  // R: no stem, the bowl's bars run back to the left edge, diagonal leg
  ['M152 0H227A18 18 0 0 1 245 18V42A18 18 0 0 1 227 60H152V44H223A4 4 0 0 0 227 40V20A4 4 0 0 0 223 16H152Z', 'M190 50H211L248 100H227Z'],
  // I
  ['M287 0H305V100H287Z'],
  // V: flat-bottomed point
  ['M333 0H352L395.4 81.9L438 0H457L405 100H386Z'],
  // É: three bars (the middle one shorter), no spine, flat slanted accent
  ['M490 0H572V16H490Z M490 40H546V56H490Z M490 84H572V100H490Z', 'M512 -3H526L538 -25H524Z'],
]

export function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <svg role="img" aria-label={site.name} viewBox="0 -32 576 132" fill="currentColor" className={`wordmark ${className}`}>
      {LETTERS.map((shapes, i) => (
        <g key={i} data-wm-letter>
          {shapes.map((d) => (
            <path key={d} d={d} fillRule="evenodd" />
          ))}
        </g>
      ))}
    </svg>
  )
}
