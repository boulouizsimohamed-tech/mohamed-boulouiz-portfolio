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

  // Apply theme attributes
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

  // Telegram-style Circular Reveal Transition
  const handleToggle = (targetTheme, event) => {
    if (targetTheme === isDark) return;

    // Get click origin coordinates
    let x = window.innerWidth / 2;
    let y = 30;

    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = event.clientX || (rect.left + rect.width / 2);
      y = event.clientY || (rect.top + rect.height / 2);
    } else if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const transition = document.startViewTransition(() => {
        setIsDark(targetTheme);
        applyTheme(targetTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      });
    } else {
      // Fallback Circular Ripple Overlay for browsers without View Transition support
      createRippleFallback(x, y, endRadius, targetTheme);
      setIsDark(targetTheme);
      applyTheme(targetTheme);
    }
  };

  // Fallback circular expanding ripple for older/unsupported browsers
  const createRippleFallback = (x, y, radius, targetTheme) => {
    const ripple = document.createElement('div');
    const size = radius * 2;
    ripple.style.position = 'fixed';
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = targetTheme ? '#070709' : '#ffffff';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '999999';
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'transform 480ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease 300ms';
    ripple.style.willChange = 'transform, opacity';
    document.body.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(1)';
      setTimeout(() => {
        ripple.style.opacity = '0';
        setTimeout(() => {
          if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 220);
      }, 300);
    });
  };

  return (
    <div 
      ref={toggleRef}
      className="relative flex items-center p-1 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-xs select-none transition-colors"
    >
      {/* Light button */}
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

      {/* Night button */}
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
