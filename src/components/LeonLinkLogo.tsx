export default function LeonLinkLogo() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="relative flex-shrink-0">
        {/* Spartan Helmet Logo */}
        <svg width="80" height="80" viewBox="0 0 60 60" className="spartan-shield">
          <defs>
            <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>

          {/* Shield background */}
          <path
            d="M30 5 L55 15 L55 45 Q55 55 30 55 Q5 55 5 45 L5 15 Z"
            fill="var(--bg-lighter)"
            stroke="url(#helmetGrad)"
            strokeWidth="2"
          />

          {/* Helmet silhouette */}
          <path
            d="M30 12 L42 18 L42 32 Q42 42 30 46 Q18 42 18 32 L18 18 Z"
            fill="var(--primary)"
            className="glitch"
          />

          {/* Visor */}
          <rect x="20" y="26" width="20" height="5" rx="2" fill="var(--accent)" />

          {/* Plume */}
          <path d="M30 5 L30 12" stroke="var(--accent)" strokeWidth="3" />
        </svg>
      </div>

      <div className="text-center flex-1">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text glitch"
            style={{ fontFamily: 'var(--font-cinzel)' }}>
          THE-COLISEUM
        </h1>
        <p className="text-sm md:text-base tracking-widest uppercase" style={{
          fontFamily: 'var(--font-orbitron)',
          color: 'var(--text-secondary)'
        }}>
          THE ARENA
        </p>
      </div>
    </div>
  );
}
