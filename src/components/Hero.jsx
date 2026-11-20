import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Download, CheckCircle2, Terminal, Smartphone, Layout, Palette } from 'lucide-react';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Location Pill */}
            <ScrollReveal direction="down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xs mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Available for Projects
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {profileData.location}
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={200}>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-zinc-950 dark:text-white leading-[1.08] mb-6">
                Hi, I'm <span className="underline decoration-zinc-300 dark:decoration-zinc-700 decoration-wavy decoration-2 underline-offset-8">Mohamed</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400">
                  Boulouiz.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle / Value Proposition */}
            <ScrollReveal direction="up" delay={300}>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
                Full-Stack & Flutter Developer and Digital Product Designer. Specialized in crafting <strong className="text-zinc-900 dark:text-white font-semibold">high-performance mobile apps</strong>, <strong className="text-zinc-900 dark:text-white font-semibold">scalable backends</strong>, and <strong className="text-zinc-900 dark:text-white font-semibold">minimalist high-contrast web experiences</strong>.
              </p>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap items-center gap-3.5 mb-12">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>View Featured Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 backdrop-blur-md"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>Summary CV</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal direction="up" delay={500} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
                {profileData.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: High-Contrast Portrait & Tech Cluster */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal direction="left" delay={250}>
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                
                {/* Outer decorative ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-700 dark:via-zinc-800 dark:to-transparent opacity-70 blur-xs"></div>

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
                <div className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-white leading-none">Flutter & Dart</div>
                    <div className="text-[9px] text-zinc-500 dark:text-zinc-400">Offline & Audio Apps</div>
                  </div>
                </div>

                {/* Floating Pill: Python & FastAPI */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-white leading-none">FastAPI & Python</div>
                    <div className="text-[9px] text-zinc-500 dark:text-zinc-400">yt-dlp & Async APIs</div>
                  </div>
                </div>

                {/* Floating Pill: Full-Stack Web & Brand */}
                <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-white leading-none">Next.js & UI/UX</div>
                    <div className="text-[9px] text-zinc-500 dark:text-zinc-400">Minimalist Commerce</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Tech Stack Horizontal Ribbon */}
        <ScrollReveal direction="up" delay={300} className="mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <p className="text-xs font-mono-accent uppercase tracking-widest text-zinc-400 dark:text-zinc-500 text-center mb-6">
            Core Engineering & Design Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {["Flutter", "Dart", "Python", "FastAPI", "yt-dlp", "PHP", "Laravel (MVC)", "MySQL (3NF)", "React", "Next.js", "Vite", "Tailwind CSS", "Bootstrap", "Brand Identity", "Product Mockups"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
