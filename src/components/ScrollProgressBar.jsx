import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent pointer-events-none">
      <div
        className="relative h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 dark:from-amber-400 dark:via-emerald-400 dark:to-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glowing Head Particle */}
        {scrollProgress > 1 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(6,182,212,0.8)]" />
        )}
      </div>
    </div>
  );
}
