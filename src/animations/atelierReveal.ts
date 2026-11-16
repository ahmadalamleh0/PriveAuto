import { gsap, mq } from '@/lib/gsap'

/**
 * Atelier entrance. Call inside useGSAP scoped to the section. The headline
 * rises in as the other section titles do, then the photographs unmask
 * upward in a short left-to-right stagger, once only (clip-path and
 * transform, expo.out). Reduced motion: final state.
 */
export function atelierReveal() {
  const mm = gsap.matchMedia()

  mm.add(mq.motionOk, () => {
    gsap.from('[data-atelier-title]', {
      autoAlpha: 0,
      y: 22,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: '[data-atelier-title]', start: 'top 85%', once: true },
    })

    gsap.fromTo(
      '[data-atelier-piece] .atelier__media',
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.3,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.atelier__spread', start: 'top 85%', once: true },
      },
    )

    gsap.from('[data-atelier-piece] .atelier__caption', {
      autoAlpha: 0,
      y: 10,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 0.35,
      scrollTrigger: { trigger: '.atelier__spread', start: 'top 85%', once: true },
    })
  })

  return mm
}
