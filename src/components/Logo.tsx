export default function Logo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#003087" />
          <stop offset="100%" stopColor="#00C4B4" />
        </linearGradient>
        <linearGradient id="meshGrad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Background rounded square */}
      <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
      {/* Mesh/network pattern */}
      <circle cx="18" cy="16" r="3" fill="url(#meshGrad)" />
      <circle cx="30" cy="16" r="3" fill="url(#meshGrad)" />
      <circle cx="24" cy="26" r="3.5" fill="url(#meshGrad)" />
      <circle cx="14" cy="32" r="2.5" fill="url(#meshGrad)" />
      <circle cx="34" cy="32" r="2.5" fill="url(#meshGrad)" />
      {/* Connection lines */}
      <line x1="18" y1="16" x2="30" y2="16" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="18" y1="16" x2="24" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="30" y1="16" x2="24" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="24" y1="26" x2="14" y2="32" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="24" y1="26" x2="34" y2="32" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="14" y1="32" x2="34" y2="32" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
      {/* Stethoscope heart/care symbol in center */}
      <path d="M22 22.5C22 21.1 22.9 20 24 20C25.1 20 26 21.1 26 22.5C26 24.5 24 26.5 24 26.5C24 26.5 22 24.5 22 22.5Z" fill="white" fillOpacity="0.95" />
      {/* Plus/cross medical symbol */}
      <rect x="23" y="34" width="2" height="6" rx="1" fill="white" fillOpacity="0.8" />
      <rect x="21" y="36" width="6" height="2" rx="1" fill="white" fillOpacity="0.8" />
    </svg>
  )
}
