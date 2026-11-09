/**
 * Client reviews for "Words From Our Clients".
 *
 * PLACEHOLDERS: no Privé Auto reviews have been supplied yet. Each card shows
 * a "Demo" tag. Replace with genuine reviews (set `demo: false` and the
 * real `source`) before launch; never invent them.
 *
 * `demo: true` renders a "Demo" tag instead of the source badge, for any
 * placeholder content in future.
 */

export type Review = {
  id: string
  name: string
  /** 1–5 */
  rating: number
  text: string
  /** Where it was published */
  source: 'google' | 'other'
  demo: boolean
}

export const reviews: Review[] = [
  {
    id: 'placeholder-1',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-2',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-3',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-4',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-5',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-6',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-7',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
  {
    id: 'placeholder-8',
    name: 'Client name',
    rating: 5,
    text: 'Placeholder review. Replace with a genuine Privé Auto client review before launch.',
    source: 'other',
    demo: true,
  },
]
