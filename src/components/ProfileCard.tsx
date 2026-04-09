export default function ProfileCard() {
  return (
    <div className="bg-[var(--secondary)] border border-[var(--primary)] rounded-2xl p-6 max-w-md mx-auto
                    relative overflow-hidden profile-glow">
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--accent)" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        {/* Profile Photo */}
        <div className="w-28 h-28 rounded-full border-4 border-[var(--accent)] overflow-hidden 
                        bg-[var(--bg-dark)] flex items-center justify-center profile-glow">
          <img 
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=300&h=300&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--accent)' }}>
            LEON
          </h2>
          <p className="text-sm" style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-secondary)' }}>
            LEVEL 42 • VETERAN RANK
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 w-full mt-2">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>27</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>POSTS</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>6</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>BADGES</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-orbitron)' }}>22</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>YEARS ACTIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
