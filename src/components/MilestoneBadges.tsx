interface MilestoneBadgeProps {
  icon: React.ReactNode;
  title: string;
  year: string;
  position: { top?: string; left?: string; bottom?: string; right?: string };
  delay?: number;
}

export default function MilestoneBadge({ icon, title, year, position, delay = 0 }: MilestoneBadgeProps) {
  return (
    <div 
      className="absolute badge-float z-0"
      style={{ 
        ...position,
        animationDelay: `${delay}s`
      }}
    >
      <div className="bg-[var(--secondary)] border border-[var(--primary)] rounded-xl p-3 
                      flex flex-col items-center min-w-[80px] opacity-60">
        <div className="text-2xl mb-1">{icon}</div>
        <p className="text-xs" style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--accent)' }}>
          {title}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {year}
        </p>
      </div>
    </div>
  );
}

export function MilestoneBadges() {
  const milestones = [
    { icon: '🎓', title: 'HS GRAD', year: "'04", position: { top: '15%', left: '5%' }, delay: 0 },
    { icon: '⚔️', title: 'SERVICE', year: "'05-'09", position: { top: '25%', right: '8%' }, delay: 1 },
    { icon: '🏛️', title: 'COLLEGE', year: '2015', position: { top: '60%', left: '3%' }, delay: 2 },
    { icon: '🔥', title: 'CHIMNEY KING', year: "'22", position: { bottom: '20%', right: '5%' }, delay: 3 },
    { icon: '💻', title: 'CODING', year: "'26", position: { bottom: '35%', left: '10%' }, delay: 4 },
    { icon: '🗡️', title: 'WEBSITE SLAYER', year: "'26", position: { top: '45%', right: '3%' }, delay: 5 },
  ];

  return (
    <>
      {milestones.map((m, i) => (
        <MilestoneBadge key={i} {...m} />
      ))}
    </>
  );
}
