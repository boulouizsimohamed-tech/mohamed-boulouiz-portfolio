import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X, Download, Sparkles, ExternalLink } from 'lucide-react';

export default function BoDownloaderVisual() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const banner = {
    src: '/images/bo-downloader/banner-showcase.jpg',
    title: 'BO Downloader — Obsidian Media Suite',
    subtitle: 'Save anything. Beautifully. Ultra-fast downloads from 10+ platforms with zero watermarks.',
    alt: 'BO Downloader Android app showcase featuring the obsidian gold media suite UI, supported platforms including YouTube, TikTok, and Instagram, and highlights for real streams with no watermarks and in-app auto-updates.',
    badge: '10+ Platforms Ready',
    downloadUrl: 'https://github.com/boulouizsimohamed-tech/BO-Downloader-Releases'
  };

  const openLightbox = (e) => {
    if (e) e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen && e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox]);

  return (
    <>
      {/* Main Interactive Showcase Banner Container */}
      <div 
        onClick={openLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(e);
          }
        }}
        aria-label="View BO Downloader showcase full-screen"
        className="group/downloader relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-all duration-300 cursor-pointer select-none"
      >
        {/* Ambient glow background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Banner Image */}
        <img
          src={banner.src}
          alt={banner.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/downloader:scale-[1.02]"
        />

        {/* Subtle Top & Bottom Gradient Vignettes */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/40" />

        {/* Top Header Badge Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-950/75 border border-amber-500/30 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono-accent uppercase tracking-wider text-amber-200">
              BO Downloader // {banner.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={openLightbox}
            aria-label="View banner full-screen"
            title="Click to zoom / view high-res"
            className="pointer-events-auto p-1.5 rounded-full bg-zinc-950/75 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md flex items-center gap-1 text-[11px] font-mono-accent px-2"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Zoom</span>
          </button>
        </div>

        {/* Bottom Banner Title & Highlights */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 pointer-events-none">
          <div className="flex flex-col text-left max-w-[75%]">
            <span className="font-display font-bold text-xs sm:text-sm text-white drop-shadow-md truncate">
              Save anything. Beautifully.
            </span>
            <span className="text-[10px] text-amber-200/80 font-mono-accent truncate hidden sm:block">
              YouTube • TikTok • Instagram • Real Streams • No Watermarks
            </span>
          </div>

          <div className="flex items-center gap-1 bg-zinc-950/75 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md text-[10px] text-amber-300 font-mono-accent">
            <span>HD Media Suite</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Portal to body for unconstrained full-screen view) */}
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="BO Downloader Showcase Zoom"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in text-white"
        >
          {/* Lightbox Top Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex items-center justify-between py-2 z-10"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono-accent bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Showcase
              </span>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  {banner.title}
                </h4>
                <p className="text-xs text-zinc-400 font-mono-accent">
                  {banner.badge}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={banner.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="p-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-amber-400 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center: Image */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-auto p-2"
          >
            <div className="relative max-w-full max-h-[75vh] rounded-xl overflow-hidden border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] bg-zinc-950">
              <img
                src={banner.src}
                alt={banner.alt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl select-none"
              />
            </div>
          </div>

          {/* Lightbox Bottom Bar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-zinc-800 text-xs text-zinc-400 z-10"
          >
            <p className="text-center sm:text-left text-zinc-300 text-xs sm:text-sm">
              {banner.subtitle}
            </p>

            <a
              href={banner.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
