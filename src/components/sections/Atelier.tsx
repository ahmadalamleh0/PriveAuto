import { useRef } from 'react'
import { atelierReveal } from '@/animations/atelierReveal'
import { atelier, type AtelierPiece } from '@/data/atelier'
import { useGSAP } from '@/lib/gsap'

const SIZES = '(min-width: 1024px) 19rem, 46vw'
const srcset = (list: { url: string; w: number }[]) => list.map((s) => `${s.url} ${s.w}w`).join(', ')

/**
 * "Atelier": the interior work, after Testimonials. Not another strip
 * (Recent Work and Testimonials both scroll sideways): a still editorial
 * spread of tall 3:5 photographs, every second one set lower, so the
 * cabins read like pages of a printed spread. Four across on lg, two by
 * two below (the right column lower). Square corners; each cabin's colour
 * is set over the foot of its photo.
 * Content: data/atelier.ts. Animation hooks: [data-atelier-title],
 * [data-atelier-piece].
 */
export function Atelier() {
  const scope = useRef<HTMLElement>(null)

  useGSAP(() => atelierReveal(), { scope })

  return (
    <section ref={scope} id="atelier" aria-labelledby="atelier-title" className="atelier">
      <div className="container-site">
        <h2 id="atelier-title" data-atelier-title className="brand-headline atelier__title">
          Atelier
        </h2>

        <ul className="atelier__spread">
          {atelier.map((piece) => (
            <li key={piece.id} data-atelier-piece className="atelier__item">
              <Piece piece={piece} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Piece({ piece }: { piece: AtelierPiece }) {
  const { photo } = piece
  return (
    <figure className="atelier__piece">
      <picture className="atelier__media">
        <source type="image/webp" srcSet={srcset(photo.webp)} sizes={SIZES} />
        <img
          src={photo.jpg[photo.jpg.length - 1].url}
          srcSet={srcset(photo.jpg)}
          sizes={SIZES}
          alt={photo.alt}
          width={600}
          height={1000}
          loading="lazy"
          decoding="async"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
      </picture>
      {/* The colour name over the photo's foot, no car names (client, 2026-11-16) */}
      <figcaption className="atelier__caption">{piece.colour}</figcaption>
    </figure>
  )
}
