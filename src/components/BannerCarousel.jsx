import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Maximize2, X, Download } from 'lucide-react';

const ACCENT_THEMES = {
  cyan: {
    container: 'border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
    glowBg: 'bg-cyan-500/10',
    dot: 'bg-cyan-400',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-200',
    subtitleText: 'text-cyan-200/80',
    zoomBtn: 'hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    arrowBtn: 'hover:bg-cyan-500/30 border-cyan-500/40',
    arrowIcon: 'text-cyan-200',
    dotsWrap: 'border-cyan-500/20',
    dotActive: 'bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]',
    lightboxBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    lightboxImage: 'border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)]',
    lightboxClose: 'hover:border-cyan-400',
    lightboxArrow: 'hover:bg-cyan-500/30 border-cyan-500/40',
    lightboxArrowIcon: 'text-cyan-300',
    actionBtn: 'bg-cyan-500 text-zinc-950 hover:bg-cyan-400'
  },
  amber: {
    container: 'border-amber-500/30 hover:border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    glowBg: 'bg-amber-500/10',
    dot: 'bg-amber-400',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-200',
    subtitleText: 'text-amber-200/80',
    zoomBtn: 'hover:bg-amber-500/20 text-amber-300 border-amber-500/30',
    arrowBtn: 'hover:bg-amber-500/30 border-amber-500/40',
    arrowIcon: 'text-amber-200',
    dotsWrap: 'border-amber-500/20',
    dotActive: 'bg-gradient-to-r from-amber-400 to-yellow-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]',
    lightboxBadge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    lightboxImage: 'border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)]',
    lightboxClose: 'hover:border-amber-400',
    lightboxArrow: 'hover:bg-amber-500/30 border-amber-500/40',
    lightboxArrowIcon: 'text-amber-300',
    actionBtn: 'bg-amber-500 text-zinc-950 hover:bg-amber-400'
  }
};

export default function BannerCarousel({
  banners,
  brandLabel,
  accent = 'cyan',
  actionUrl,
  actionLabel = 'Download APK'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const theme = ACCENT_THEMES[accent] || ACCENT_THEMES.cyan;
  const total = banners.length;

  const nextSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx, e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(idx);
  };

  const openLightbox = (idx, e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(idx);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, nextSlide, prevSlide]);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  const currentBanner = banners[currentIndex];

  return (
    <>
      <div
        ref={containerRef}
        onClick={(e) => openLightbox(currentIndex, e)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${brandLabel} Showcase`}
        className={`group/carousel relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border ${theme.container} transition-all duration-300 cursor-pointer select-none`}
      >
        <div className={`absolute top-0 right-0 w-48 h-48 ${theme.glowBg} rounded-full blur-3xl pointer-events-none`} />

        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, idx) => (
            <div
              key={banner.id}
              className="relative min-w-full h-full flex-shrink-0 bg-zinc-950 overflow-hidden"
              aria-hidden={currentIndex !== idx}
            >
              <img
                src={banner.src}
                alt={banner.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/45" />

        {/* Top Header Badge Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-950/75 border ${theme.badgeBorder} backdrop-blur-md shadow-md`}>
            <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`} />
            <span className={`text-[11px] font-mono-accent uppercase tracking-wider ${theme.badgeText}`}>
              {brandLabel} // {currentBanner.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => openLightbox(currentIndex, e)}
            aria-label="View screenshot full-screen"
            title="Click to zoom / view high-res"
            className={`pointer-events-auto p-1.5 rounded-full bg-zinc-950/75 border backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md flex items-center gap-1 text-[11px] font-mono-accent px-2 ${theme.zoomBtn}`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Zoom</span>
          </button>
        </div>

        {/* Left Navigation Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className={`absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 text-white border backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10 ${theme.arrowBtn}`}
        >
          <ChevronLeft className={`w-4 h-4 ${theme.arrowIcon}`} />
        </button>

        {/* Right Navigation Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 text-white border backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10 ${theme.arrowBtn}`}
        >
          <ChevronRight className={`w-4 h-4 ${theme.arrowIcon}`} />
        </button>

        {/* Bottom Title & Indicator Dots */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 pointer-events-none">
          <div className="flex flex-col text-left max-w-[70%]">
            <span className="font-display font-bold text-xs sm:text-sm text-white drop-shadow-md truncate">
              {currentBanner.title}
            </span>
            <span className={`text-[10px] ${theme.subtitleText} font-mono-accent truncate hidden sm:block`}>
              {currentBanner.subtitle}
            </span>
          </div>

          <div className={`flex items-center gap-1.5 pointer-events-auto bg-zinc-950/70 px-2.5 py-1 rounded-full border ${theme.dotsWrap} backdrop-blur-md`}>
            {banners.map((b, idx) => (
              <button
                key={b.id}
                type="button"
                onClick={(e) => goToSlide(idx, e)}
                aria-label={`Go to slide ${idx + 1}: ${b.title}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? `w-5 h-1.5 ${theme.dotActive}`
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${brandLabel} Lightbox Preview`}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in text-white"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between py-2 z-10"
          >
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono-accent border ${theme.lightboxBadge}`}>
                {currentIndex + 1} / {total}
              </span>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  {currentBanner.title}
                </h4>
                <p className="text-xs text-zinc-400 font-mono-accent">
                  {currentBanner.badge}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {actionUrl && (
                <a
                  href={actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-sm ${theme.actionBtn}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{actionLabel}</span>
                </a>
              )}

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className={`p-2 rounded-full bg-zinc-900 border border-zinc-700 ${theme.lightboxClose} hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto p-2"
          >
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className={`absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-950/80 text-white border backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-xl z-20 ${theme.lightboxArrow}`}
            >
              <ChevronLeft className={`w-6 h-6 ${theme.lightboxArrowIcon}`} />
            </button>

            <div className={`relative max-w-full max-h-[75vh] rounded-xl overflow-hidden border bg-zinc-950 ${theme.lightboxImage}`}>
              <img
                src={currentBanner.src}
                alt={currentBanner.alt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl select-none"
              />
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className={`absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-950/80 text-white border backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-xl z-20 ${theme.lightboxArrow}`}
            >
              <ChevronRight className={`w-6 h-6 ${theme.lightboxArrowIcon}`} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-zinc-800 text-xs text-zinc-400 z-10"
          >
            <p className="text-center sm:text-left text-zinc-300 text-xs sm:text-sm">
              {currentBanner.subtitle}
            </p>

            <div className="flex items-center gap-2">
              {banners.map((banner, idx) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={(e) => goToSlide(idx, e)}
                  aria-label={`Go to ${banner.title}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? `w-6 h-2 ${theme.dotActive}`
                      : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
