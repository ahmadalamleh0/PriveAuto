/**
 * Client reviews for the Testimonials strip.
 *
 * Supplied by the client (2026-11-09) as Privé Auto's Google reviews
 * (reviewer profiles show Google Maps "Local Guide" labels). Text is
 * verbatim, typos included; only pasted line breaks were joined. Names are
 * shortened to first name + initial, as before. Star ratings were not
 * supplied, so `rating` is null and no stars show: add each review's real
 * rating (1–5) to display them. Not checked against the live listing.
 *
 * `demo: true` renders a "Demo" tag instead of the source badge, for any
 * placeholder content in future.
 */

export type Review = {
  id: string
  name: string
  /** 1–5, or null when the rating hasn't been supplied (no stars shown) */
  rating: number | null
  text: string
  /** Where it was published */
  source: 'google' | 'other'
  demo: boolean
}

export const reviews: Review[] = [
  {
    id: 'francisco',
    name: 'Francisco',
    rating: null,
    text: 'Privé Auto wrapped my car and exceeded my expectations. They walked me through different material options, kept me updated throughout the installation, and made sure everything was perfect before delivery. The car looks brand new',
    source: 'google',
    demo: false,
  },
  {
    id: 'brandon-m',
    name: 'Brandon M.',
    rating: null,
    text: 'Had my car wrapped at Privé Auto and the quality speaks for itself. Clean lines, perfect finish, and excelent customer service. Highly recommended.',
    source: 'google',
    demo: false,
  },
  {
    id: 'jay-j',
    name: 'Jay J.',
    rating: null,
    text: 'I took my brand new G63 for PPF tint and front sheld Protction and reaults was so amazin. Extremely satisfied no question asked.',
    source: 'google',
    demo: false,
  },
  {
    id: 'mark-v',
    name: 'Mark V.',
    rating: null,
    text: 'Great place to get my cars wrap especially with ppf Love the work and the customer service Preciate u guys I will recommend as much ppl as I can Thank u',
    source: 'google',
    demo: false,
  },
  {
    id: 'shaker-h',
    name: 'Shaker H.',
    rating: null,
    text: 'Very professional and great ppf skills. They’ve worked on all my cars and anytime i get a new car i take it to them.',
    source: 'google',
    demo: false,
  },
]
