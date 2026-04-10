export default function LeonLinkLogo() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="relative flex-shrink-0">
        {/* Coliseum Logo - Ground View */}
        <svg width="80" height="80" viewBox="0 0 60 60" className="coliseum-logo">
          <defs>
            <linearGradient id="coliseumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
            <pattern id="damaged" patternUnits="userSpaceOnUse" width="4" height="4">
              <rect width="4" height="4" fill="var(--bg-lighter)" />
              <circle cx="1" cy="1" r="0.5" fill="var(--primary)" opacity="0.3" />
              <circle cx="3" cy="3" r="0.3" fill="var(--accent)" opacity="0.5" />
            </pattern>
          </defs>

          {/* Ground/base */}
          <rect x="2" y="45" width="56" height="13" rx="1" fill="url(#damaged)" stroke="url(#coliseumGrad)" strokeWidth="1" />

          {/* Main arches from ground view */}
          <ellipse cx="12" cy="35" rx="8" ry="12" fill="none" stroke="var(--primary)" strokeWidth="3" />
          <ellipse cx="30" cy="35" rx="8" ry="12" fill="none" stroke="var(--primary)" strokeWidth="3" />
          <ellipse cx="48" cy="35" rx="8" ry="12" fill="none" stroke="var(--primary)" strokeWidth="3" />

          {/* Broken/damaged elements */}
          <path d="M8 35 L16 35" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2,2" />
          <path d="M26 35 L34 35" stroke="var(--accent)" strokeWidth="2" strokeDasharray="1,3" />
          <path d="M44 35 L52 35" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3,1" />

          {/* Upper level arches (damaged) */}
          <ellipse cx="12" cy="25" rx="6" ry="8" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.7" />
          <ellipse cx="30" cy="25" rx="6" ry="8" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.7" />
          <ellipse cx="48" cy="25" rx="6" ry="8" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.7" />

          {/* Central opening */}
          <rect x="26" y="20" width="8" height="25" fill="var(--bg-dark)" stroke="url(#coliseumGrad)" strokeWidth="1" />

          {/* Ivy/vine damage effect */}
          <path d="M5 40 Q10 35 15 40 Q20 35 25 40" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M35 40 Q40 35 45 40 Q50 35 55 40" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>
      </div>

      <div className="text-center flex-1">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text glitch"
            style={{ fontFamily: 'var(--font-cinzel)' }}>
          THE-COLISEUM
        </h1>
      </div>
    </div>
  );
}
