import bc6560Jpg from '@/assets/images/projects/bugatti-chiron-6-560.jpg'
import bc6560Webp from '@/assets/images/projects/bugatti-chiron-6-560.webp'
import bc6960Jpg from '@/assets/images/projects/bugatti-chiron-6-960.jpg'
import bc6960Webp from '@/assets/images/projects/bugatti-chiron-6-960.webp'
import fe5560Jpg from '@/assets/images/projects/ferrari-5-560.jpg'
import fe5560Webp from '@/assets/images/projects/ferrari-5-560.webp'
import fe5960Jpg from '@/assets/images/projects/ferrari-5-960.jpg'
import fe5960Webp from '@/assets/images/projects/ferrari-5-960.webp'
import pw4560Jpg from '@/assets/images/projects/porsche-911-white-4-560.jpg'
import pw4560Webp from '@/assets/images/projects/porsche-911-white-4-560.webp'
import pw4960Jpg from '@/assets/images/projects/porsche-911-white-4-960.jpg'
import pw4960Webp from '@/assets/images/projects/porsche-911-white-4-960.webp'
import pw5560Jpg from '@/assets/images/projects/porsche-911-white-5-560.jpg'
import pw5560Webp from '@/assets/images/projects/porsche-911-white-5-560.webp'
import pw5960Jpg from '@/assets/images/projects/porsche-911-white-5-960.jpg'
import pw5960Webp from '@/assets/images/projects/porsche-911-white-5-960.webp'
import type { Photo } from './projects'

/**
 * Atelier: the interior work, in its own section after Testimonials
 * (creative director, 2026-11-16). These are the interior photographs that
 * used to sit inside the Recent Work galleries (same files in
 * assets/images/projects, moved here rather than copied). The Cullinan is
 * left out on purpose. 3:5 crops at 560 and 960 wide, WebP + JPEG.
 *
 * `detail` describes only what the photo shows (colours, not materials):
 * confirm trims with the client before naming leathers or suedes.
 */

export type AtelierPiece = {
  id: string
  /** Make and model, as in Recent Work */
  car: string
  detail: string
  photo: Photo
}

const set = (pairs: [string, number][]) => pairs.map(([url, w]) => ({ url, w }))

export const atelier: AtelierPiece[] = [
  {
    id: 'bugatti-chiron-cockpit',
    car: 'Bugatti Chiron',
    detail: 'Orange and black cockpit',
    photo: {
      alt: 'The Chiron cabin in orange and black, the steering wheel framed by the door',
      webp: set([[bc6560Webp, 560], [bc6960Webp, 960]]),
      jpg: set([[bc6560Jpg, 560], [bc6960Jpg, 960]]),
    },
  },
  {
    id: 'porsche-911-cockpit',
    car: 'Porsche 911 Turbo S',
    detail: 'Pale blue cockpit',
    photo: {
      alt: 'The 911 cockpit in pale blue, a Porsche crest on the wall beyond',
      webp: set([[pw4560Webp, 560], [pw4960Webp, 960]]),
      jpg: set([[pw4560Jpg, 560], [pw4960Jpg, 960]]),
    },
  },
  {
    id: 'porsche-911-seats',
    car: 'Porsche 911 Turbo S',
    detail: 'Pale blue seats, quilted white centres',
    photo: {
      alt: 'The 911 seats in pale blue with quilted white centres',
      webp: set([[pw5560Webp, 560], [pw5960Webp, 960]]),
      jpg: set([[pw5560Jpg, 560], [pw5960Jpg, 960]]),
    },
  },
  {
    id: 'ferrari-f8-cockpit',
    car: 'Ferrari F8 Spider',
    detail: 'Turquoise cockpit',
    photo: {
      alt: 'The Ferrari cockpit in turquoise, carbon steering wheel with the yellow shield',
      webp: set([[fe5560Webp, 560], [fe5960Webp, 960]]),
      jpg: set([[fe5560Jpg, 560], [fe5960Jpg, 960]]),
    },
  },
]
