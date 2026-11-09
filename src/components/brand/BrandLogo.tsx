import { Wordmark } from '@/components/brand/Wordmark'

/**
 * The PRIVÉ logo in the header and footer, set at the `.wordmark--nav` /
 * `.wordmark--footer` sizes (vector redraw: components/brand/Wordmark.tsx).
 */
export function BrandLogo({ variant }: { variant: 'nav' | 'footer' }) {
  return <Wordmark className={`wordmark--${variant}`} />
}
