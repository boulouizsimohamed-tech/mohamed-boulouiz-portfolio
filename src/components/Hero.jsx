import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Download, CheckCircle2, Terminal, Smartphone, Layout, Palette } from 'lucide-react';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

const TYPEWRITER_PHRASES = [
  'Mohamed Boulouiz.',
  'a Full-Stack Developer.',
  'a Flutter Mobile Developer.',
  'a Digital Product Designer.'
];

export default function Hero({ onOpenResume }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 80);
      } else {
        // Pause when current phrase typing finishes
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        }, 45);
      } else {
        // Switch to next phrase after deleting
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        timeout = setTimeout(() => {}, 350);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-20 min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Introduction & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Location Pill */}
            <ScrollReveal direction="down" delay={80}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xs mb-4 sm:mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Available for Projects
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {profileData.location}
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline with Typewriter & Fixed Height Container */}
            <ScrollReveal direction="up" delay={160} className="w-full">
              <div className="min-h-[105px] xs:min-h-[115px] sm:min-h-[135px] md:min-h-[155px] lg:min-h-[165px] flex items-start mb-5 sm:mb-6">
                <h1 className="font-display font-black text-3.5xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-zinc-950 dark:text-white leading-[1.12] sm:leading-[1.08]">
                  <span>Hi, I'm </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
                    {currentText}
                  </span>
                  {/* Blinking Cursor */}
                  <span 
                    className="inline-block w-[3px] h-[0.82em] ml-1 bg-amber-500 dark:bg-amber-400 align-baseline animate-blink rounded-xs shadow-[0_0_8px_rgba(245,158,11,0.6)]" 
                    aria-hidden="true"
                  />
                </h1>
              </div>
            </ScrollReveal>

            {/* Subtitle / Value Proposition */}
            <ScrollReveal direction="up" delay={240}>
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
                Full-Stack & Flutter Developer and Digital Product Designer. Specialized in crafting <strong className="text-zinc-900 dark:text-white font-semibold">high-performance mobile apps</strong>, <strong className="text-zinc-900 dark:text-white font-semibold">scalable backends</strong>, and <strong className="text-zinc-900 dark:text-white font-semibold">minimalist high-contrast web experiences</strong>.
              </p>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal direction="up" delay={320} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-10 w-full">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>View Featured Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2.5">
                  <a
                    href="#contact"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 backdrop-blur-md active:scale-[0.98]"
                  >
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200 border border-zinc-200/80 dark:border-zinc-800/80 sm:border-transparent active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4 text-zinc-500" />
                    <span>Summary CV</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal direction="up" delay={400} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 sm:pt-7 border-t border-zinc-200/80 dark:border-zinc-800/80">
                {profileData.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col p-2.5 sm:p-0 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 sm:bg-transparent">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-400 dark:text-zinc-500">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: High-Contrast Portrait & Tech Cluster */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-1">
            <ScrollReveal direction="left" delay={200} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[420px]">
                
                {/* Outer decorative ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-700 dark:via-zinc-800 dark:to-transparent opacity-70 blur-xs" />

                {/* Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="Mohamed Boulouiz"
                    className="w-full h-auto aspect-3/4 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex flex-col justify-end">
                    <span className="text-white font-display font-bold text-base">
                      Mohamed Boulouiz
                    </span>
                    <span className="text-zinc-300 text-xs">
                      OFPPT Digital Development • Taza
                    </span>
                  </div>
                </div>

                {/* Floating Pill: Flutter Mobile */}
                <div className="absolute -top-3 -left-3 sm:-left-5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-zinc-900 dark:text-white leading-none">Flutter & Dart</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400">Offline & Audio Apps</div>
                  </div>
                </div>

                {/* Floating Pill: Python & FastAPI */}
                <div className="absolute -bottom-3 -left-3 sm:-left-5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-zinc-900 dark:text-white leading-none">FastAPI & Python</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400">yt-dlp & Async APIs</div>
                  </div>
                </div>

                {/* Floating Pill: Full-Stack Web & Brand */}
                <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-zinc-900 dark:text-white leading-none">Full-Stack Web</div>
                    <div className="text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400">React & Next.js</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
