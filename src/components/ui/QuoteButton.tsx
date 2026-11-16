import { useEffect, useState } from 'react'
import { handleAnchorClick } from '@/lib/scroll'

/**
 * "Get a Quote": a fixed button at the bottom-left that stays with the
 * visitor while they scroll (client, 2026-11-16) and takes them to the
 * enquiry form (#build). From a service page it goes home first
 * (handleAnchorClick). It steps aside while the form itself or the footer
 * is on screen, so it never covers what it points to. Lives inside #page,
 * so it goes inert with the rest of the page while the mobile menu is open.
 */
export function QuoteButton({ route }: { route: string }) {
  const [covered, setCovered] = useState(false)

  useEffect(() => {
    const targets = [document.getElementById('build'), document.querySelector('footer')].filter((el): el is HTMLElement => !!el)
    if (!targets.length) return
    const seen = new Map<Element, boolean>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target, e.isIntersecting)
        setCovered([...seen.values()].some(Boolean))
      },
      { threshold: 0.15 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [route])

  return (
    <a
      href="#build"
      onClick={handleAnchorClick}
      className="quote-fab"
      data-hidden={covered || undefined}
      aria-hidden={covered || undefined}
      tabIndex={covered ? -1 : undefined}
    >
      Get a Quote
    </a>
  )
}
