import React from 'react'

export default function CanadaFlagBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-dark_black/80 border border-orange/30 shadow-sm ${className}`}>
      <svg width="24" height="14" viewBox="0 0 60 30" className="rounded-sm">
        <rect width="60" height="30" fill="#ff0000" />
        <rect x="18" y="0" width="24" height="30" fill="#fff" />
        {/* Simple maple-leaf approximation */}
        <path d="M30 6 L33 12 L39 13 L34 17 L36 24 L30 20 L24 24 L26 17 L21 13 L27 12 Z" fill="#ff0000" />
      </svg>
      <span className="text-xs font-bold text-dark_black dark:text-white tracking-wide">CANADA ENGINEERED</span>
    </span>
  )
}
