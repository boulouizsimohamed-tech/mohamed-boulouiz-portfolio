import React, { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const barRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && barRef.current) {
        const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        updateProgress();
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 dark:from-amber-400 dark:via-emerald-400 dark:to-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
