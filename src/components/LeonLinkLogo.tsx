export default function LeonLinkLogo() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="relative flex-shrink-0">
        {/* Sword Logo */}
        <svg width="80" height="80" viewBox="0 0 60 60" className="sword-logo">
          <defs>
            <linearGradient id="swordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>

          {/* Sword blade */}
          <rect x="28" y="5" width="4" height="40" fill="url(#swordGrad)" rx="1" />

          {/* Sword guard */}
          <rect x="20" y="40" width="20" height="3" fill="var(--primary)" rx="1" />

          {/* Sword hilt */}
          <rect x="26" y="43" width="8" height="12" fill="var(--primary)" rx="1" />

          {/* Sword pommel */}
          <circle cx="30" cy="58" r="3" fill="var(--accent)" />

          {/* Decorative elements */}
          <circle cx="30" cy="15" r="2" fill="var(--accent)" />
          <circle cx="30" cy="25" r="1.5" fill="var(--accent)" />
          <circle cx="30" cy="35" r="1" fill="var(--accent)" />

          {/* Cross-guard details */}
          <rect x="18" y="38" width="4" height="7" fill="var(--primary)" />
          <rect x="38" y="38" width="4" height="7" fill="var(--primary)" />
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
