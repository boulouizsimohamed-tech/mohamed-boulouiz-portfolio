import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-scheme') || localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return true; // Default to night mode
    }
    return true;
  });

  const toggleRef = useRef(null);

  // Apply theme attributes to document & local storage
  const applyTheme = (dark) => {
    const root = document.documentElement;
    const body = document.body;
    const meta = document.querySelector('meta[name="color-scheme"]');

    if (dark) {
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
  };

  // Initial sync on mount
  useEffect(() => {
    applyTheme(isDark);
  }, []);

  // Expanding & Retracting Circular Ripple Wave Theme Transition
  const handleToggle = (targetTheme, event) => {
    if (targetTheme === isDark) return;

    // Calculate exact click/tap coordinates (x, y)
    let x, y;
    if (event && typeof event.clientX === 'number' && event.clientX > 0) {
      x = event.clientX;
      y = event.clientY;
    } else if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else {
      x = window.innerWidth / 2;
      y = 40;
    }

    // Radius required to reach the furthest corner from (x, y)
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Feature detection for View Transitions API and reduced-motion preference
    const supportsViewTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (supportsViewTransition) {
      // Set transition direction attribute for z-index stacking
      const transitionType = targetTheme ? 'to-dark' : 'to-light';
      document.documentElement.dataset.themeTransition = transitionType;

      const transition = document.startViewTransition(() => {
        setIsDark(targetTheme);
        applyTheme(targetTheme);
      });

      transition.ready.then(() => {
        if (targetTheme) {
          // Expanding Wave to Dark: new dark view expands outward on top
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 550,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-new(root)'
            }
          );
        } else {
          // Retracting Wave to Light: old dark view contracts back inward into button
          document.documentElement.animate(
            {
              clipPath: [
                `circle(${endRadius}px at ${x}px ${y}px)`,
                `circle(0px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 550,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-old(root)'
            }
          );
        }
      });

      transition.finished.finally(() => {
        delete document.documentElement.dataset.themeTransition;
      });
    } else {
      // Graceful fallback: instant theme update with subtle CSS transition
      setIsDark(targetTheme);
      applyTheme(targetTheme);
    }
  };

  return (
    <div 
      ref={toggleRef}
      className="relative flex items-center p-1 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-xs select-none transition-colors"
    >
      {/* Light Mode Button */}
      <button
        type="button"
        onClick={(e) => handleToggle(false, e)}
        aria-label="Switch to light mode"
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] font-mono-accent font-semibold transition-all duration-300 ${
          !isDark
            ? 'bg-zinc-950 text-white shadow-sm'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
        }`}
      >
        <Sun className={`w-3.5 h-3.5 transition-transform duration-300 ${!isDark ? 'text-amber-400 rotate-0 scale-110' : 'text-zinc-400 -rotate-45'}`} />
        <span className="hidden sm:inline-block">Light</span>
      </button>

      {/* Dark / Night Mode Button */}
      <button
        type="button"
        onClick={(e) => handleToggle(true, e)}
        aria-label="Switch to night mode"
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] font-mono-accent font-semibold transition-all duration-300 ${
          isDark
            ? 'bg-white text-zinc-950 shadow-sm'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
        }`}
      >
        <Moon className={`w-3.5 h-3.5 transition-transform duration-300 ${isDark ? 'text-amber-400 rotate-0 scale-110' : 'text-zinc-400 rotate-45'}`} />
        <span className="hidden sm:inline-block">Night</span>
      </button>
    </div>
  );
}
