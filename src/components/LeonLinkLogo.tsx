export default function LeonLinkLogo() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="relative flex-shrink-0">
        {/* No Sacred Cows Logo */}
        <svg width="80" height="80" viewBox="0 0 60 60" className="cow-logo">
          <defs>
            <linearGradient id="cowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>

          {/* Cow body */}
          <ellipse cx="30" cy="40" rx="12" ry="8" fill="var(--primary)" />

          {/* Cow head */}
          <ellipse cx="30" cy="30" rx="8" ry="6" fill="var(--primary)" />

          {/* Cow ears */}
          <ellipse cx="24" cy="26" rx="2" ry="3" fill="var(--primary)" />
          <ellipse cx="36" cy="26" rx="2" ry="3" fill="var(--primary)" />

          {/* Cow horns */}
          <path d="M24 24 L22 20 M36 24 L38 20" stroke="var(--primary)" strokeWidth="2" />

          {/* Cow eyes */}
          <circle cx="27" cy="29" r="1" fill="var(--accent)" />
          <circle cx="33" cy="29" r="1" fill="var(--accent)" />

          {/* Cow spots */}
          <circle cx="28" cy="35" r="1.5" fill="var(--accent)" />
          <circle cx="32" cy="38" r="1" fill="var(--accent)" />

          {/* Halo */}
          <path d="M20 20 A10 5 0 0 1 40 20" fill="none" stroke="var(--accent)" strokeWidth="2" />

          {/* Cross out halo */}
          <line x1="18" y1="18" x2="42" y2="22" stroke="var(--primary)" strokeWidth="3" />
          <line x1="42" y1="18" x2="18" y2="22" stroke="var(--primary)" strokeWidth="3" />
        </svg>
      </div>

      <div className="text-center flex-1">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text glitch"
            style={{ fontFamily: 'var(--font-cinzel)' }}>
          NO SACRED COWS
        </h1>
      </div>
    </div>
  );
}
