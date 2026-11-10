import { useRef } from 'react'
import { editorialReveal } from '@/animations/editorialReveal'
import { Media } from '@/components/ui/Media'
import { ChevronIcon } from '@/components/ui/icons'
import { editorial, type EditorialCard } from '@/data/editorial'
import { servicePath } from '@/data/services'
import { useGSAP } from '@/lib/gsap'
import { handleLinkClick } from '@/lib/router'

/**
 * Services showcase after the hero: 3 service cards → centred statement →
 * 2 service cards, centred at the same size. Each card is a client photo with a
 * centred title and chevron (Motorcarlease reference) linking to the
 * service's page (/services/:id). Content: data/editorial.ts.
 * Animation hooks: [data-editorial-card], [data-editorial-statement].
 */
export function Editorial() {
  const scope = useRef<HTMLElement>(null)
  const { upper, statement, lower, closing } = editorial

  useGSAP(() => editorialReveal(), { scope })

  return (
    <section ref={scope} id="editorial" aria-labelledby="editorial-title" className="pt-(--section-y)">
      <div className="container-site">
        <Collage rows={[upper]} />

        <div data-editorial-statement className="statement">
          <h2 id="editorial-title" className="statement__headline">
            {statement.headline.map((sentence) => (
              <span key={sentence} className="statement__line">
                {sentence}
              </span>
            ))}
          </h2>
          <p className="statement__body">{withEmphasis(statement.body)}</p>
        </div>

        <Collage rows={[lower, closing]} />
      </div>
    </section>
  )
}

/** Renders *word* segments as <em>; everything else stays plain text. */
function withEmphasis(text: string) {
  return text.split(/\*(.+?)\*/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))
}

/** Rows of cards, each card a third of the row wide (half on phones); a
 *  short row centres its cards at that same size instead of stretching them. */
function Collage({ rows }: { rows: EditorialCard[][] }) {
  return (
    <div className="collage">
      <div className="collage__rows">
        {rows.map((row) => (
          <div key={row[0].id} className="collage__row">
            {row.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Photo + centred title with a small chevron; the whole card is one link */
function Card({ card }: { card: EditorialCard }) {
  return (
    <figure data-editorial-card className="collage__card service-tile">
      <div className="service-tile__media">
        <Media media={card.media} />
      </div>
      <a href={servicePath(card.id)} onClick={handleLinkClick} className="service-tile__link">
        <span className="service-tile__title">
          {card.title}
          <ChevronIcon className="service-tile__chevron" />
        </span>
      </a>
    </figure>
  )
}
