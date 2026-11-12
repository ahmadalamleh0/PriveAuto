import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { BrandLogo } from '@/components/brand/BrandLogo'
import { PhoneIcon } from '@/components/ui/icons'
import { featuredServices, servicePath } from '@/data/services'
import { site } from '@/data/site'
import { useScrollLock } from '@/hooks/useScrollLock'
import { handleLinkClick } from '@/lib/router'
import { handleAnchorClick } from '@/lib/scroll'

const PAGE_ID = 'page'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const { phone, phoneHref } = site.contact
  useScrollLock(menuOpen)

  // Solid header once the page leaves the very top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the mobile menu is open: page behind is inert, Escape closes it,
  // and it closes itself if the viewport grows to the desktop layout
  useEffect(() => {
    if (!menuOpen) return
    const page = document.getElementById(PAGE_ID)
    page?.setAttribute('inert', '')
    firstLinkRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = () => desktop.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      page?.removeAttribute('inert')
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  // Unlock scroll synchronously before scrolling to the target section
  const onNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (menuOpen) flushSync(() => setMenuOpen(false))
    handleAnchorClick(e)
  }

  // Service pages are routes, not sections: close the menu, then navigate
  const onServiceClick = (e: MouseEvent<HTMLAnchorElement>) => {
    flushSync(() => setMenuOpen(false))
    handleLinkClick(e)
  }

  const solid = scrolled || menuOpen

  return (
    // [data-site-header] is hidden during the intro and faded in by its timeline
    <header data-site-header className="fixed inset-x-0 top-0 z-50">
      {/* Bar background lives on its own layer: a backdrop-filter on <header>
          would become the containing block for the fixed mobile menu below */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-(--header-h) border-b transition-[background-color,border-color] duration-500 ${
          solid ? 'border-line bg-ink/85 backdrop-blur-md' : 'border-transparent'
        }`}
      />
      {/* Phones: wordmark centred, menu right (as in the reference). md+: wordmark left, links right */}
      <div className="relative container-site grid h-(--header-h) grid-cols-[1fr_auto_1fr] items-center md:flex md:justify-between">
        <span aria-hidden="true" className="md:hidden" />
        {/* Temporary typographic wordmark until the client's logo is supplied */}
        <a href="#top" onClick={onNavClick} className="flex">
          <BrandLogo variant="nav" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onNavClick}
                  className="relative py-2 text-sm text-muted transition-colors duration-300 hover:text-paper after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-paper after:transition-transform after:duration-500 after:ease-out-expo hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="-mr-3 grid size-11 place-items-center justify-self-end text-paper md:hidden"
        >
          {/* Three lines (2026-11-12); the outer two cross into an X, the middle fades */}
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-current transition-[top,rotate] duration-500 ease-out-expo ${
                menuOpen ? 'top-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 h-px w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-[top,rotate] duration-500 ease-out-expo ${
                menuOpen ? 'top-1/2 -rotate-45' : 'top-full'
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!menuOpen}
        // Visibility flips instantly on open (so focus can land) and waits for the fade on close
        className={`fixed inset-x-0 top-(--header-h) bottom-0 bg-ink md:hidden ${
          menuOpen
            ? 'visible opacity-100 [transition:opacity_0.5s,visibility_0s]'
            : 'invisible opacity-0 [transition:opacity_0.5s,visibility_0s_0.5s]'
        }`}
      >
        <div className="container-site h-full overflow-y-auto overscroll-contain pt-5 pb-10">
          {/* Call first (client, 2026-11-12): the quickest way to reach the studio */}
          {phone && (
            <a ref={firstLinkRef} href={phoneHref} className="menu-call">
              <PhoneIcon className="menu-call__icon" />
              <span>Call {phone}</span>
            </a>
          )}

          {/* Tighter rows (2026-10-16): ~27% shorter, slightly smaller type, no numbers */}
          <ul className="flex flex-col pt-3">
            {site.nav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  ref={i === 0 && !phone ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={onNavClick}
                  className="flex items-baseline py-4 text-3xl font-medium tracking-tight text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Every service with a card, each to its page (client, 2026-11-12) */}
          <p className="menu-services__label">Our services</p>
          <ul className="menu-services">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <a href={servicePath(service.slug)} onClick={onServiceClick} className="menu-services__link">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
