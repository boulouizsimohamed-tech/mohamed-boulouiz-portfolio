import React, { useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-scheme') || localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return false;
      }
      return true;
    }
    return true;
  });

  const buttonRef = useRef(null);
  const isTransitioningRef = useRef(false);

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

  useEffect(() => {
    applyTheme(isDark);
  }, []);

  const toggleTheme = () => {
    if (isTransitioningRef.current) return;

    const targetDark = !isDark;

    const commitThemeChange = () => {
      flushSync(() => {
        setIsDark(targetDark);
      });
      applyTheme(targetDark);
    };

    const supportsViewTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition || !buttonRef.current) {
      commitThemeChange();
      return;
    }

    isTransitioningRef.current = true;
    const root = document.documentElement;
    const directionClass = targetDark ? 'to-dark' : 'to-light';

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.classList.add('theme-transitioning', directionClass);

    const transition = document.startViewTransition(() => {
      commitThemeChange();
    });

    transition.ready
      .then(() => {
        const clipPath = targetDark
          ? [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
          : [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`];

        root.animate(
          { clipPath },
          {
            duration: 850,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            fill: 'forwards',
            pseudoElement: targetDark ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      })
      .catch(() => {
        // Ignore aborted transition errors cleanly
      });

    transition.finished.finally(() => {
      root.classList.remove('theme-transitioning', 'to-dark', 'to-light');
      isTransitioningRef.current = false;
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xs hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-100 transition-all duration-200 active:scale-90 cursor-pointer select-none"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-800 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  );
}
