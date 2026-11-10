import bespokeInteriors from '@/assets/images/services/interior-rolls-royce.jpg'
import bodyKits from '@/assets/images/services/body-kits.jpg'
import protectionFinish from '@/assets/images/services/protection-porsche-ppf.jpg'
import starlight from '@/assets/images/services/starlight.jpg'
import steeringWheels from '@/assets/images/services/steering-wheels.jpg'
import tuning from '@/assets/images/services/tuning.jpg'
import wheelsSuspension from '@/assets/images/services/porsche-wheel.jpg'
import wraps from '@/assets/images/services/wraps-mclaren.jpg'
import type { MediaAsset } from './media'

/**
 * Services showcase directly after the hero:
 *   4 service cards → statement → 4 service cards
 * Slot order within each group: top-left, top-right, bottom-left, bottom-right.
 *
 * Photos are the client's own, supplied one by one (2026-10-09). A card
 * without `media` shows a neutral placeholder until its photo arrives.
 * Use `position` to set the crop focal point (CSS object-position).
 */

export type EditorialCard = { id: string; title: string; media?: MediaAsset }

export type EditorialGroup = [EditorialCard, EditorialCard, EditorialCard, EditorialCard]

export const editorial = {
  upper: [
    {
      id: 'wraps',
      title: 'Wraps',
      media: {
        type: 'image',
        src: wraps,
        alt: 'Satin black McLaren 720S with its dihedral doors open in a white studio',
        width: 750,
        height: 999,
        position: '50% 50%', // client photo (2026-11-10): doors up, title on the dark floor
      },
    },
    {
      id: 'bespoke-interiors',
      title: 'Bespoke Interiors',
      media: {
        type: 'image',
        src: bespokeInteriors,
        alt: 'Rolls-Royce rear cabin trimmed in turquoise leather under a starlight headliner, seen through the open rear door',
        width: 750,
        height: 938,
        position: '50% 50%', // client photo (2026-11-10): starlight headliner above, rear bench below
      },
    },
    {
      id: 'starlight',
      title: 'Starlight',
      media: {
        type: 'image',
        src: starlight,
        alt: 'Luxury car interior with a starlight headliner and ambient lighting',
        width: 640,
        height: 853,
        position: '50% 30%',
      },
    },
    {
      id: 'tuning',
      title: 'Tuning',
      media: {
        type: 'image',
        src: tuning,
        alt: 'Matte grey Porsche from behind: large rear wing, glowing light bar and an exhaust flame',
        width: 1000,
        height: 1502,
        position: '50% 40%', // wing, light bar and flame all in the square crop
      },
    },
  ] satisfies EditorialGroup,

  // Copy carried over from the Mansor Customs build: confirm with Privé Auto.
  // Headline: one sentence per line.
  // Body: wrap a word in *asterisks* to italicise it.
  statement: {
    headline: ['The Whole Build.'],
    body: 'Built upon our passion for everything *Automotive*, Privé Auto is a full service boutique designed to provide the best experience available for your automotive needs.',
  },

  lower: [
    {
      id: 'protection-finish',
      title: 'Protection & Finish',
      media: {
        type: 'image',
        src: protectionFinish,
        alt: 'Privé Auto technicians fitting paint protection film to a satin black Porsche 911 GT3 RS in the studio',
        width: 750,
        height: 938,
        position: '50% 50%', // client photo (2026-11-10): the team at work on the front wing, title on the floor
      },
    },
    {
      id: 'body-kits',
      title: 'Body Kits',
      media: {
        type: 'image',
        src: bodyKits,
        alt: 'Yellow widebody Jeep Grand Cherokee Trackhawk with a carbon bonnet and black wheels at a gas station at night',
        width: 1152,
        height: 1360,
        position: '50% 50%', // zoomed out (canopy trimmed, forecourt extended): title sits below the splitter
      },
    },
    {
      id: 'wheels-suspension',
      title: 'Wheels & Suspension',
      media: {
        type: 'image',
        src: wheelsSuspension,
        alt: 'White Porsche 911 Turbo Cabriolet on a rooftop with a city skyline behind, rear quarter on a polished lattice-spoke forged wheel',
        width: 1000,
        height: 1250,
        position: '50% 62%', // client photo (2026-11-10): the rear wheel centred, title on the shadowed tarmac
      },
    },
    {
      id: 'interior-technology',
      title: 'Interior Technology',
      media: {
        type: 'image',
        src: steeringWheels,
        alt: 'Carbon-fibre BMW M steering wheel with Alcantara grips, LED shift lights and red paddles',
        width: 1000,
        height: 1250,
        position: '50% 45%',
      },
    },
  ] satisfies EditorialGroup,
}
