"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  const themeNames: Record<string, string> = {
    spartan: "⚔️ Spartan Red",
    ocean: "🌊 Ocean Depths",
    forest: "🌲 Forest Guardian",
    void: "🌌 Void Walker",
    solar: "☀️ Solar Flare",
  };

  return (
    <div className="mt-3">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-[var(--secondary)] border border-[var(--primary)] px-4 py-2 rounded-lg
                   text-[var(--text-primary)] font-[var(--font-orbitron)] text-sm
                   hover:border-[var(--accent)] transition-all cursor-pointer"
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {themeNames[t]}
          </option>
        ))}
      </select>
    </div>
  );
}
