import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ChevronLeft, ChevronRight, Maximize2, X, Download, ExternalLink, Sparkles
} from 'lucide-react';

export const BO_MUSIC_BANNERS = [
  {
    id: 'offline-playback',
    src: '/images/bo-music/banner-1-offline.jpg',
    title: 'Offline Playback Showcase',
    subtitle: 'No Internet. No Ads. Just pure sound.',
    badge: 'Lossless Audio Engine',
    alt: "BO Music Android app offline playback showcase featuring the 3D player UI, album artwork for 'Snowman - Sia', and a vinyl record graphic against a high-contrast dark teal glowing soundwave background."
  },
  {
    id: 'customizable-themes',
    src: '/images/bo-music/banner-2-themes.jpg',
    title: 'Customizable Themes',
    subtitle: 'Shape your sound, choose your vibe.',
    badge: 'Light & Dark Cyber UI',
    alt: "BO Music app interface personalization displaying Settings, dark/light toggle collection, and fluid 3D accent swirls representing customization and dynamic visual styles."
  },
  {
    id: 'in-app-updates',
    src: '/images/bo-music/banner-3-updates.jpg',
    title: 'In-App Auto-Updates',
    subtitle: 'Stay updated directly through GitHub Releases.',
    badge: 'v1.1.0+ GitHub OTA',
    alt: "BO Music app In-App Auto-Update feature showcasing the Version 1.1.0 update interface, a glowing cyber download icon, and Mohamed Boulouiz credit against a dark grid pattern."
  }
];

export default function BoMusicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const total = BO_MUSIC_BANNERS.length;

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

  // Keyboard navigation
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

  // Touch handlers for swipe
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentBanner = BO_MUSIC_BANNERS[currentIndex];

  return (
    <>
      {/* Main Interactive Carousel Container */}
      <div 
        ref={containerRef}
        onClick={(e) => openLightbox(currentIndex, e)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="BO Music Marketing Banners"
        className="group/carousel relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-pointer select-none"
      >
        {/* Glow ambient background effect */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Carousel Sliding Track */}
        <div 
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {BO_MUSIC_BANNERS.map((banner, idx) => (
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

        {/* Subtle Top & Bottom Gradient Vignettes */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/40" />

        {/* Top Header Badge Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-950/75 border border-cyan-500/30 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono-accent uppercase tracking-wider text-cyan-200">
              BO Music // {currentBanner.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => openLightbox(currentIndex, e)}
            aria-label="View banner full-screen"
            title="Click to zoom / view high-res"
            className="pointer-events-auto p-1.5 rounded-full bg-zinc-950/75 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md flex items-center gap-1 text-[11px] font-mono-accent px-2"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Zoom</span>
          </button>
        </div>

        {/* Left Navigation Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous banner"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 hover:bg-cyan-500/30 text-white border border-cyan-500/40 backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10"
        >
          <ChevronLeft className="w-4 h-4 text-cyan-200" />
        </button>

        {/* Right Navigation Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next banner"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/70 hover:bg-cyan-500/30 text-white border border-cyan-500/40 backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 shadow-lg z-10"
        >
          <ChevronRight className="w-4 h-4 text-cyan-200" />
        </button>

        {/* Bottom Banner Title & Indicator Dots */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 pointer-events-none">
          <div className="flex flex-col text-left max-w-[70%]">
            <span className="font-display font-bold text-xs sm:text-sm text-white drop-shadow-md truncate">
              {currentBanner.title}
            </span>
            <span className="text-[10px] text-cyan-200/80 font-mono-accent truncate hidden sm:block">
              {currentBanner.subtitle}
            </span>
          </div>

          {/* Indicator Dots / Pills */}
          <div className="flex items-center gap-1.5 pointer-events-auto bg-zinc-950/70 px-2.5 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md">
            {BO_MUSIC_BANNERS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => goToSlide(idx, e)}
                aria-label={`Go to slide ${idx + 1}: ${BO_MUSIC_BANNERS[idx].title}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-5 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Portal to body for unconstrained full-screen view) */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Banner Lightbox Zoom"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in text-white"
        >
          {/* Lightbox Top Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between py-2 z-10"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono-accent bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
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
              <a
                href="https://github.com/boulouizsimohamed-tech/BO-Music-Releases"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500 text-zinc-950 hover:bg-cyan-400 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="p-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-cyan-400 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center: Image with Nav Arrows */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto p-2"
          >
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous banner"
              className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-950/80 hover:bg-cyan-500/30 text-white border border-cyan-500/40 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-xl z-20"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-300" />
            </button>

            {/* Banner Full Image */}
            <div className="relative max-w-full max-h-[75vh] rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-zinc-950">
              <img
                src={currentBanner.src}
                alt={currentBanner.alt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl select-none"
              />
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next banner"
              className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-950/80 hover:bg-cyan-500/30 text-white border border-cyan-500/40 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-xl z-20"
            >
              <ChevronRight className="w-6 h-6 text-cyan-300" />
            </button>
          </div>

          {/* Lightbox Bottom Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-zinc-800 text-xs text-zinc-400 z-10"
          >
            <p className="text-center sm:text-left text-zinc-300 text-xs sm:text-sm">
              {currentBanner.subtitle}
            </p>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {BO_MUSIC_BANNERS.map((banner, idx) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to ${banner.title}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
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
