export default function LeonLinkLogo() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="relative flex-shrink-0">
        {/* Coliseum Logo */}
        <svg width="80" height="80" viewBox="0 0 60 60" className="coliseum-logo">
          <defs>
            <linearGradient id="coliseumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>

          {/* Coliseum base */}
          <rect x="5" y="35" width="50" height="20" rx="2" fill="var(--bg-lighter)" stroke="url(#coliseumGrad)" strokeWidth="2" />

          {/* Arches */}
          <ellipse cx="15" cy="35" rx="6" ry="8" fill="var(--primary)" />
          <ellipse cx="30" cy="35" rx="6" ry="8" fill="var(--primary)" />
          <ellipse cx="45" cy="35" rx="6" ry="8" fill="var(--primary)" />

          {/* Pillars */}
          <rect x="12" y="15" width="3" height="20" fill="var(--primary)" />
          <rect x="27" y="15" width="3" height="20" fill="var(--primary)" />
          <rect x="42" y="15" width="3" height="20" fill="var(--primary)" />

          {/* Top arches */}
          <ellipse cx="15" cy="20" rx="4" ry="5" fill="var(--accent)" />
          <ellipse cx="30" cy="20" rx="4" ry="5" fill="var(--accent)" />
          <ellipse cx="45" cy="20" rx="4" ry="5" fill="var(--accent)" />

          {/* Center opening */}
          <rect x="25" y="25" width="10" height="15" fill="var(--bg-dark)" />
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
