import { useEffect, useRef, useState } from 'react'
import { introTimeline, introTimelineReduced } from '@/animations/intro'
import { useScrollLock } from '@/hooks/useScrollLock'
import { gsap, mq, useGSAP } from '@/lib/gsap'

const FONT_WAIT_MS = 1200

/** The intro lockup, one entry per stacked line */
const INTRO_LINES = ['PRIVÉ', 'AUTO']

/**
 * PRIVÉ's R in the logo's form (creative director, 2026-11-10): no stem, the
 * bowl's bars run back to the left edge, a diagonal leg. Drawn at Michroma's
 * metrics so it sets like the typed letters: cap height 0.75em (= 100 units),
 * advance 1.019em, ink from 0.094em to 0.938em, bars 11.5 and verticals 12.6
 * units thick, as Michroma's own strokes.
 */
function LogoR() {
  return (
    <svg viewBox="-12.5 0 135.9 100" fill="currentColor" className="intro-wm__glyph">
      <path d="M0 0H95A14 14 0 0 1 109 14V46A14 14 0 0 1 95 60H0V48.5H93.4A3 3 0 0 0 96.4 45.5V14.5A3 3 0 0 0 93.4 11.5H0Z" />
      <path d="M52.4 50H69.1L112.5 100H95.8Z" />
    </svg>
  )
}

/**
 * Opening intro: black screen → signature rules → letter-by-letter stacked
 * wordmark → a brief hold → black curtain lifts to reveal the hero,
 * which is already rendered underneath. One GSAP timeline drives the whole sequence, including the hero
 * copy and header entrance. It never waits on hero media. The overlay unmounts
 * when the timeline completes, and a CSS failsafe clears it if script stalls.
 */
export function Intro({ onComplete }: { onComplete: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const [fontReady, setFontReady] = useState(false)
  useScrollLock(true)

  // Start at the top of the page and wait (briefly) for the brand font so
  // glyphs never swap mid-reveal. The timeline hold covers this wait.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    let alive = true
    Promise.race([
      // Brand face for the wordmark, plus the hero headline face it reveals into
      Promise.all([document.fonts.load('1em Michroma'), document.fonts.load('500 1em Geist')]),
      new Promise((resolve) => setTimeout(resolve, FONT_WAIT_MS)),
    ]).finally(() => alive && setFontReady(true))
    return () => {
      alive = false
    }
  }, [])

  useGSAP(
    () => {
      if (!fontReady || !root.current) return
      const q = gsap.utils.selector(root)
      const targets = {
        rules: q('[data-intro-rule]'),
        letters: q('[data-wm-letter]'),
        curtain: root.current.querySelector('[data-intro-curtain]'),
        mark: root.current.querySelector('[data-intro-mark]'),
        header: document.querySelector('[data-site-header]'),
      }
      // Snap the lockup, then each rule, to whole device pixels: 1px strokes
      // on a fractional position anti-alias into soft grey 2px lines.
      const dpr = window.devicePixelRatio || 1
      const snap = (el: Element | null) => {
        if (!el) return
        const top = el.getBoundingClientRect().top
        gsap.set(el, { y: Math.round(top * dpr) / dpr - top })
      }
      snap(root.current.querySelector('.intro__lockup'))
      targets.rules.forEach(snap)

      const finish = () => {
        document.documentElement.classList.remove('intro-active')
        onComplete()
      }

      const mm = gsap.matchMedia()
      mm.add(mq.motionOk, () => {
        introTimeline(targets, finish)
      })
      mm.add(mq.reduceMotion, () => {
        introTimelineReduced(targets, finish)
      })
    },
    { scope: root, dependencies: [fontReady] },
  )

  return (
    <div ref={root} className="intro" aria-hidden="true">
      <div data-intro-curtain className="intro__curtain" />
      <div data-intro-mark className="intro__mark">
        {/* Same font-size as the lockup, so the rules' em sizing tracks it */}
        <div className="intro__lockup intro-wm--size">
          <span data-intro-rule className="intro__rule intro__rule--top" />
          {/* Intro only: typeset PRIVÉ over AUTO, in the same Michroma
              treatment (weight, scale, tracking) as the original intro. The
              logo SVG (Wordmark) is used everywhere else. */}
          <span role="img" aria-label="Privé Auto" className="intro-wm intro-wm--size">
            {INTRO_LINES.map((line, i) => (
              <span key={line} aria-hidden="true" className={i === 0 ? 'intro-wm__primary' : 'intro-wm__secondary'}>
                {[...line].map((char, j) => (
                  <span key={j} data-wm-letter className="intro-wm__letter">
                    {i === 0 && char === 'R' ? <LogoR /> : char}
                  </span>
                ))}
              </span>
            ))}
          </span>
          <span data-intro-rule className="intro__rule intro__rule--bottom" />
        </div>
      </div>
    </div>
  )
}
