import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-scheme') || localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return true; // Default to night/dark mode
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const meta = document.querySelector('meta[name="color-scheme"]');

    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      if (meta) meta.content = 'dark';
      try {
        localStorage.setItem('color-scheme', 'dark');
        localStorage.setItem('theme', 'dark');
      } catch (e) {}
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      if (meta) meta.content = 'light';
      try {
        localStorage.setItem('color-scheme', 'light');
        localStorage.setItem('theme', 'light');
      } catch (e) {}
    }
  }, [isDark]);

  return (
    <div className="flex items-center p-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xs">
      <button
        type="button"
        onClick={() => setIsDark(false)}
        aria-label="Switch to light mode"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-accent font-semibold transition-all duration-200 ${
          !isDark
            ? 'bg-zinc-950 text-white shadow-xs'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
        }`}
      >
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <span className="hidden sm:inline-block">Light</span>
      </button>

      <button
        type="button"
        onClick={() => setIsDark(true)}
        aria-label="Switch to night mode"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-accent font-semibold transition-all duration-200 ${
          isDark
            ? 'bg-white text-zinc-950 shadow-xs dark:bg-white dark:text-zinc-950'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
        }`}
      >
        <Moon className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline-block">Night</span>
      </button>
    </div>
  );
}
