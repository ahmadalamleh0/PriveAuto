import amgRedHeadrest560Jpg from '@/assets/images/atelier/amg-red-headrest-560.jpg'
import amgRedHeadrest560Webp from '@/assets/images/atelier/amg-red-headrest-560.webp'
import amgRedHeadrest960Jpg from '@/assets/images/atelier/amg-red-headrest-960.jpg'
import amgRedHeadrest960Webp from '@/assets/images/atelier/amg-red-headrest-960.webp'
import amgRedWheel560Jpg from '@/assets/images/atelier/amg-red-wheel-560.jpg'
import amgRedWheel560Webp from '@/assets/images/atelier/amg-red-wheel-560.webp'
import amgRedWheel960Jpg from '@/assets/images/atelier/amg-red-wheel-960.jpg'
import amgRedWheel960Webp from '@/assets/images/atelier/amg-red-wheel-960.webp'
import bmwBlue560Jpg from '@/assets/images/atelier/bmw-blue-560.jpg'
import bmwBlue560Webp from '@/assets/images/atelier/bmw-blue-560.webp'
import bmwBlue960Jpg from '@/assets/images/atelier/bmw-blue-960.jpg'
import bmwBlue960Webp from '@/assets/images/atelier/bmw-blue-960.webp'
import gRedDash560Jpg from '@/assets/images/atelier/g-wagon-red-dash-560.jpg'
import gRedDash560Webp from '@/assets/images/atelier/g-wagon-red-dash-560.webp'
import gRedDash960Jpg from '@/assets/images/atelier/g-wagon-red-dash-960.jpg'
import gRedDash960Webp from '@/assets/images/atelier/g-wagon-red-dash-960.webp'
import gRedSeats560Jpg from '@/assets/images/atelier/g-wagon-red-seats-560.jpg'
import gRedSeats560Webp from '@/assets/images/atelier/g-wagon-red-seats-560.webp'
import gRedSeats960Jpg from '@/assets/images/atelier/g-wagon-red-seats-960.jpg'
import gRedSeats960Webp from '@/assets/images/atelier/g-wagon-red-seats-960.webp'
import mercedesPink560Jpg from '@/assets/images/atelier/mercedes-pink-560.jpg'
import mercedesPink560Webp from '@/assets/images/atelier/mercedes-pink-560.webp'
import mercedesPink960Jpg from '@/assets/images/atelier/mercedes-pink-960.jpg'
import mercedesPink960Webp from '@/assets/images/atelier/mercedes-pink-960.webp'
import rrTurquoise560Jpg from '@/assets/images/atelier/rolls-royce-turquoise-560.jpg'
import rrTurquoise560Webp from '@/assets/images/atelier/rolls-royce-turquoise-560.webp'
import rrTurquoise960Jpg from '@/assets/images/atelier/rolls-royce-turquoise-960.jpg'
import rrTurquoise960Webp from '@/assets/images/atelier/rolls-royce-turquoise-960.webp'
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
 * Atelier: the interior work (creative director, 2026-11-16). Four cards,
 * each crossfading through its own photos; every photo carries the
 * colour name shown over it.
 *
 * Photos: the interiors moved out of Recent Work (same files in
 * assets/images/projects, not copied) plus the client's interior set of
 * 2026-11-16 (assets/images/atelier). 3:5 crops at 560 and 960 wide,
 * WebP + JPEG. The Cullinan is left out on purpose.
 *
 * `colour` names only what the photo shows (colours, not materials):
 * confirm trims with the client before naming leathers or suedes. `car`
 * is not shown (client, 2026-11-16); it stays for reference.
 */

export type AtelierSlide = {
  /** The cabin's colours, set over the bottom of the photo */
  colour: string
  car: string
  photo: Photo
}

export type AtelierPiece = { id: string; slides: AtelierSlide[] }

const set = (pairs: [string, number][]) => pairs.map(([url, w]) => ({ url, w }))
const photo = (alt: string, w560: [string, string], w960: [string, string]): Photo => ({
  alt,
  webp: set([[w560[1], 560], [w960[1], 960]]),
  jpg: set([[w560[0], 560], [w960[0], 960]]),
})

export const atelier: AtelierPiece[] = [
  {
    id: 'warm',
    slides: [
      {
        colour: 'Orange & Black',
        car: 'Bugatti Chiron',
        photo: photo('The Chiron cabin in orange and black, the steering wheel framed by the door', [bc6560Jpg, bc6560Webp], [bc6960Jpg, bc6960Webp]),
      },
      {
        colour: 'Red',
        car: 'Mercedes-AMG G-Class',
        photo: photo('A G-Class cabin in red, from the steering wheel across the dashboard', [gRedDash560Jpg, gRedDash560Webp], [gRedDash960Jpg, gRedDash960Webp]),
      },
    ],
  },
  {
    id: 'blues',
    slides: [
      {
        colour: 'Pale Blue',
        car: 'Porsche 911 Turbo S',
        photo: photo('The 911 cockpit in pale blue, a Porsche crest on the wall beyond', [pw4560Jpg, pw4560Webp], [pw4960Jpg, pw4960Webp]),
      },
      {
        colour: 'Blue',
        car: 'BMW',
        photo: photo('A BMW cabin in vivid blue, from the steering wheel to the headliner', [bmwBlue560Jpg, bmwBlue560Webp], [bmwBlue960Jpg, bmwBlue960Webp]),
      },
      {
        colour: 'Red',
        car: 'Mercedes-AMG',
        photo: photo('An AMG steering wheel in red with carbon trim, the dashboard in red behind it', [amgRedWheel560Jpg, amgRedWheel560Webp], [amgRedWheel960Jpg, amgRedWheel960Webp]),
      },
    ],
  },
  {
    id: 'pale',
    slides: [
      {
        colour: 'Pale Blue & White',
        car: 'Porsche 911 Turbo S',
        photo: photo('The 911 seats in pale blue with quilted white centres', [pw5560Jpg, pw5560Webp], [pw5960Jpg, pw5960Webp]),
      },
      {
        colour: 'Pink',
        car: 'Mercedes-Benz',
        photo: photo('A Mercedes cabin in pink, from the steering wheel across the dashboard', [mercedesPink560Jpg, mercedesPink560Webp], [mercedesPink960Jpg, mercedesPink960Webp]),
      },
      {
        colour: 'Red',
        car: 'Mercedes-AMG',
        photo: photo('A red seat back embroidered with the AMG crest and an AMG badge', [amgRedHeadrest560Jpg, amgRedHeadrest560Webp], [amgRedHeadrest960Jpg, amgRedHeadrest960Webp]),
      },
    ],
  },
  {
    id: 'turquoise',
    slides: [
      {
        colour: 'Turquoise',
        car: 'Ferrari F8 Spider',
        photo: photo('The Ferrari cockpit in turquoise, carbon steering wheel with the yellow shield', [fe5560Jpg, fe5560Webp], [fe5960Jpg, fe5960Webp]),
      },
      {
        colour: 'Turquoise',
        car: 'Rolls-Royce',
        photo: photo('A Rolls-Royce rear seat in turquoise under a starlight headliner', [rrTurquoise560Jpg, rrTurquoise560Webp], [rrTurquoise960Jpg, rrTurquoise960Webp]),
      },
      {
        colour: 'Red',
        car: 'Mercedes-AMG G-Class',
        photo: photo('G-Class front seats in red with quilted panels', [gRedSeats560Jpg, gRedSeats560Webp], [gRedSeats960Jpg, gRedSeats960Webp]),
      },
    ],
  },
]
