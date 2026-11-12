import bespokeInteriors from '@/assets/images/services/interior-rolls-royce.jpg'
import bodyKits from '@/assets/images/services/body-kits-cullinan.jpg'
import protectionFinish from '@/assets/images/services/protection-porsche-ppf.jpg'
import starlight from '@/assets/images/services/starlight.jpg'
import steeringWheels from '@/assets/images/services/steering-wheels.jpg'
import tuning from '@/assets/images/services/tuning.jpg'
import wheelsSuspension from '@/assets/images/services/porsche-wheel.jpg'
import wraps from '@/assets/images/services/wraps-mclaren.jpg'
import type { MediaAsset } from './media'

/**
 * Services showcase directly after the hero, Privé Auto's five services
 * (creative director, 2026-11-10):
 *   3 service cards → statement → 2 service cards (centred, same size)
 * Cards render in array order, left to right.
 *
 * Ids are the service page slugs (/services/:id): keep them stable when a
 * title changes. A card without `media` shows a neutral placeholder until its
 * photo arrives. Use `position` to set the crop focal point (CSS
 * object-position).
 */

export type EditorialCard = { id: string; title: string; media?: MediaAsset }

export const editorial = {
  upper: [
    {
      id: 'wraps',
      title: 'Vehicle Wraps',
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
      id: 'wheels-suspension',
      title: 'Wheels & Tires',
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
      id: 'body-kits',
      title: 'Body Kits',
      media: {
        type: 'image',
        src: bodyKits,
        alt: 'Matte black Rolls-Royce Cullinan with teal pinstripes and a forged black wheel, front quarter against tropical palms',
        width: 720,
        height: 960,
        position: '50% 50%', // client photo (2026-11-10): the wheel arch centred, title on the gravel
      },
    },
  ] satisfies [EditorialCard, EditorialCard, EditorialCard],

  // Copy carried over from the Mansor Customs build: confirm with Privé Auto.
  // Headline: one sentence per line.
  // Body: wrap a word in *asterisks* to italicise it.
  statement: {
    headline: ['The Whole Build.'],
    body: 'Privé Auto is a full service boutique designed to provide the best experience available for your automotive needs.',
  },

  lower: [
    {
      id: 'bespoke-interiors',
      title: 'Custom Interiors',
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
      id: 'protection-finish',
      title: 'Paint Protection Film',
      media: {
        type: 'image',
        src: protectionFinish,
        alt: 'Privé Auto technicians fitting paint protection film to a satin black Porsche 911 GT3 RS in the studio',
        width: 750,
        height: 938,
        position: '50% 50%', // client photo (2026-11-10): the team at work on the front wing, title on the floor
      },
    },
  ] satisfies [EditorialCard, EditorialCard],

  // Services without a card since the five-card layout (2026-11-10). Their
  // pages stay live: the footer still links Tuning and Ambient Lighting here,
  // and the enquiry form still offers them. Remove an entry here only once
  // nothing links to its page.
  unlisted: [
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
  ] satisfies EditorialCard[],
}
