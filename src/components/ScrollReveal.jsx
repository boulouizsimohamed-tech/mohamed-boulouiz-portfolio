import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', // 'up', 'down', 'left', 'right', 'scale', 'none'
  threshold = 0.05,
  duration = 550
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  // Initial transform offset based on direction with micro-scale
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0) scale(0.98)';
      case 'down':
        return 'translate3d(0, -24px, 0) scale(0.98)';
      case 'left':
        return 'translate3d(24px, 0, 0) scale(0.98)';
      case 'right':
        return 'translate3d(-24px, 0, 0) scale(0.98)';
      case 'scale':
        return 'scale(0.95)';
      default:
        return 'translate3d(0, 16px, 0) scale(0.98)';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
      className={className}
    >
      {children}
    </div>
  );
}
