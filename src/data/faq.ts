/**
 * Frequently asked questions. Copy supplied by the client (2026-11-16),
 * verbatim (their British spellings kept); the wrap/PPF/ceramic question
 * was sent twice and appears once.
 * No prices, turnaround times, warranties or policies; don't add any here
 * without the client's written confirmation.
 */
export type Faq = { id: string; q: string; a: string }

export const faq: Faq[] = [
  {
    id: 'wrap-ppf-ceramic',
    q: 'What is the difference between a wrap, PPF and ceramic coating?',
    a: 'Each serves a different purpose. Wraps transform your vehicle’s appearance, PPF helps protect the original paint from stone chips and road wear, while ceramic coating enhances gloss and makes maintenance easier. Certain coloured PPF options combine both finish and protection.',
  },
  {
    id: 'interior',
    q: 'What interior customisation options are available?',
    a: 'Interior work can range from bespoke upholstery and steering wheel finishes to ambient lighting, starlight headliners and screen upgrades. Every detail is considered around the vehicle and the intended design.',
  },
  {
    id: 'vision',
    q: 'Can a vehicle be customised to a specific vision?',
    a: 'Every project can be approached individually. From subtle refinements to more extensive transformations, the direction is shaped around your preferences, the vehicle and the desired result.',
  },
  {
    id: 'brands',
    q: 'Do you work with specific brands and aftermarket components?',
    a: 'We work with carefully selected manufacturers and specialist suppliers to source components that complement each vehicle and meet the requirements of each build.',
  },
]
