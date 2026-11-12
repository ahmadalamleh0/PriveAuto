type IconProps = { className?: string }

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

/** Small chevron tip (›), no shaft */
export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path d="M5 3.2v9.6c0 .4.4.6.7.4l7.4-4.8a.5.5 0 0 0 0-.8L5.7 2.8c-.3-.2-.7 0-.7.4Z" fill="currentColor" />
    </svg>
  )
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <rect x="4" y="3" width="2.75" height="10" rx="0.75" fill="currentColor" />
      <rect x="9.25" y="3" width="2.75" height="10" rx="0.75" fill="currentColor" />
    </svg>
  )
}

/** Instagram Reels glyph (clapper in a rounded square) */
export function ReelsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8.5h18M8.5 3l3 5.5M14 3l3 5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.25 11.6v4.8c0 .3.3.5.6.3l3.9-2.4a.35.35 0 0 0 0-.6l-3.9-2.4c-.3-.2-.6 0-.6.3Z" fill="currentColor" />
    </svg>
  )
}

/** Handset outline, for call links */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5.6 2.5 4 2.1a1 1 0 0 0-1.1.6l-.7 1.6c-.2.5-.2 1 0 1.5a12.5 12.5 0 0 0 8 8c.5.2 1 .2 1.5 0l1.6-.7a1 1 0 0 0 .6-1.1l-.4-1.6a1 1 0 0 0-.8-.7l-2.1-.4a1 1 0 0 0-.9.3l-.8.8a8.3 8.3 0 0 1-3.6-3.6l.8-.8a1 1 0 0 0 .3-.9L6.3 3.3a1 1 0 0 0-.7-.8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  )
}
