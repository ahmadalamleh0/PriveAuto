import { Wordmark } from '@/components/brand/Wordmark'

/**
 * PLACEHOLDER brand logo for the header and footer: the typeset Privé Auto
 * wordmark (site.wordmark), set at the `.wordmark--nav` / `.wordmark--footer`
 * sizes. Swap in the official logo files here once Privé Auto supplies them.
 */
export function BrandLogo({ variant }: { variant: 'nav' | 'footer' }) {
  return <Wordmark className={`wordmark--${variant}`} />
}
