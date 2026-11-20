import React from 'react';
import { GraduationCap, Award, MapPin, CheckCircle, Code2, Smartphone, Layers, ShieldCheck, Sparkles, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import ScrollReveal from './ScrollReveal';

export default function About({ onOpenResume }) {
  const pillars = [
    {
      icon: Smartphone,
      title: "Mobile App Specialization",
      accent: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      description: "Delivering polished cross-platform mobile apps in Flutter. Deep expertise in just_audio media subsystems, background_downloader workers, lock-screen controls, and hardware button listeners."
    },
    {
      icon: Layers,
      title: "Full-Stack & Normalized Architecture",
      accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      description: "Building scalable backend microservices with Python (FastAPI) and PHP (Laravel MVC), backed by rigorously normalized MySQL relational databases (1NF to 3NF) for transactional stability."
    },
    {
      icon: Sparkles,
      title: "Minimalist High-Contrast UI/UX",
      accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      description: "Believing that luxury design is born from restraint. Combining crisp typography, generous whitespace, accessible contrast ratios, and photorealistic product mockups."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col items-start max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-3">
              <span>01 // PROFILE & BACKGROUND</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 dark:text-white">
              Driven by Engineering Precision & Minimalist Aesthetics.
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Narrative & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
            <ScrollReveal direction="up" delay={200}>
              <p>
                I am <strong className="text-zinc-900 dark:text-white font-semibold">Mohamed Boulouiz</strong>, a Digital Development and Information Technology student at <strong className="text-zinc-900 dark:text-white font-semibold">OFPPT</strong> in Taza, Morocco. My curriculum and personal engineering projects are focused on the intersection of Full-Stack Web Development, Mobile Engineering, and Digital Product Design.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p>
                I reject cluttered interfaces and brittle architectures. In every application I build—whether an offline audio player managing gapless playback and system notification channels, a high-throughput video extraction engine, or an e-commerce platform with a normalized MySQL database—I enforce strict separation of concerns, defensive programming, and seamless user flows.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <p>
                My design background extends into commercial digital assets: creating brand identities, typography graphics, and packaging mockups curated for platforms such as Creative Market and Ballwool. This dual fluency in technical code and visual hierarchy enables me to deliver complete digital products from initial sketch to production deployment.
              </p>
            </ScrollReveal>

            {/* Quick points */}
            <ScrollReveal direction="up" delay={500}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "OFPPT Digital Development Specialization",
                  "Full-Stack Web (Next.js, PHP Laravel, MySQL)",
                  "Mobile Engineering (Flutter, Dart, Background)",
                  "Normalized Database Architect (1NF to 3NF)",
                  "Brand Identity & Commercial Vector Design",
                  "Fluent in French, Arabic, and English"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-800 dark:text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-sm font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Formal Qualifications & CV Summary</span>
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Education Card & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* OFPPT Education Card */}
            <ScrollReveal direction="left" delay={250}>
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur-md relative overflow-hidden premium-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold mb-1">
                      Specialized Training
                    </div>
                    <h3 className="font-display font-bold text-lg text-zinc-950 dark:text-white">
                      OFPPT — Digital Development & IT
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      Taza, Fès-Meknès, Morocco
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 space-y-2">
                  <p>
                    Comprehensive vocational program encompassing Full-Stack Web Development, Mobile Application Development (Flutter), Relational Database Normalization, MVC Frameworks (Laravel), and UX/UI Digital Product Design.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Capability Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={i} direction="up" delay={300 + i * 120}>
                    <div
                      className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors premium-card"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg border ${pillar.accent}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-sm text-zinc-950 dark:text-white">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-9">
                        {pillar.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
