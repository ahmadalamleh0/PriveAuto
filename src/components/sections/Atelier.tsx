import { useEffect, useRef, useState } from 'react'
import { atelierReveal } from '@/animations/atelierReveal'
import { atelier, type AtelierPiece } from '@/data/atelier'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useGSAP } from '@/lib/gsap'

const SIZES = '(min-width: 1024px) 19rem, 46vw'
const srcset = (list: { url: string; w: number }[]) => list.map((s) => `${s.url} ${s.w}w`).join(', ')

/** How long each photo holds, and how far each card's cycle is offset from the last */
const HOLD_MS = 2000 // client, 2026-11-16: every 2 seconds (was 5000, then 3000)
const OFFSET_MS = 500

/**
 * "Atelier": the interior work. Not another strip (Recent Work and
 * Testimonials both scroll sideways): a still editorial spread of tall 3:5
 * cards, every second one set lower, so the cabins read like pages of a
 * printed spread. Four across on lg, two by two below (the right column
 * lower). Square corners.
 * Each card crossfades through its photos (client, 2026-11-16), the
 * colour name over the foot changing with them. The cards are offset so
 * they never change together. A card holds still while off screen, while
 * hovered or focused, and with reduced motion (first photo only).
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
          {atelier.map((piece, i) => (
            <li key={piece.id} data-atelier-piece className="atelier__item">
              <Piece piece={piece} offset={i * OFFSET_MS} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Piece({ piece, offset }: { piece: AtelierPiece; offset: number }) {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const [held, setHeld] = useState(false)
  const reduced = usePrefersReducedMotion()
  const count = piece.slides.length
  const running = count > 1 && inView && !held && !reduced

  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!running) return
    let interval: number | undefined
    const advance = () => {
      if (!document.hidden) setActive((n) => (n + 1) % count)
    }
    // The first change waits for this card's offset, then every HOLD_MS
    const start = window.setTimeout(() => {
      advance()
      interval = window.setInterval(advance, HOLD_MS)
    }, HOLD_MS + offset)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [running, count, offset])

  const shown = reduced ? 0 : active

  return (
    <figure
      ref={root}
      className="atelier__piece"
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      {piece.slides.map((slide, i) => (
        <picture key={slide.photo.jpg[0].url} className="atelier__media" data-active={i === shown || undefined} aria-hidden={i !== shown || undefined}>
          <source type="image/webp" srcSet={srcset(slide.photo.webp)} sizes={SIZES} />
          <img
            src={slide.photo.jpg[slide.photo.jpg.length - 1].url}
            srcSet={srcset(slide.photo.jpg)}
            sizes={SIZES}
            alt={slide.photo.alt}
            width={600}
            height={1000}
            loading="lazy"
            decoding="async"
            style={slide.photo.position ? { objectPosition: slide.photo.position } : undefined}
          />
        </picture>
      ))}
      {/* The colour name over the photo's foot, no car names (client, 2026-11-16) */}
      <figcaption className="atelier__caption">
        <span className="atelier__colours">
          {piece.slides.map((slide, i) => (
            <span key={i} className="atelier__colour" data-active={i === shown || undefined} aria-hidden={i !== shown || undefined}>
              {slide.colour}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  )
}
