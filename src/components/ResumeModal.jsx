import React, { useEffect, useRef } from 'react';
import { 
  X, Printer, GraduationCap, Code, Briefcase, Mail, Phone, 
  MapPin, Globe, ExternalLink, Sparkles, Layers, ShieldCheck, Terminal
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('cancel', handleCancel);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="resume-modal-title"
      className="m-auto w-full max-w-4xl rounded-3xl p-0 bg-white dark:bg-[#0c0c10] text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-xs max-h-[92vh] overflow-y-auto outline-hidden"
    >
      <div className="p-5 sm:p-8">
        
        {/* Top Actions Bar (Hidden in Print) */}
        <div className="no-print flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-extrabold text-xl text-zinc-950 dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-accent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
              1-Page A4 Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              autofocus
              aria-label="Close CV preview"
              className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===================================================================
            CV Document Container (#cv-print-sheet)
            - Styled cleanly on-screen in dark/light mode
            - Strictly isolated and formatted as 1-Page A4 when printed
           =================================================================== */}
        <div 
          id="cv-print-sheet" 
          className="mt-6 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 space-y-4 sm:space-y-5 font-sans"
        >
          
          {/* Header: 2-Column Split */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-zinc-300 dark:border-zinc-800 print:border-zinc-300">
            <div>
              <h1 id="resume-modal-title" className="font-display font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white print:text-zinc-950 tracking-tight leading-none">
                Mohamed Boulouiz
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 print:text-zinc-800 mt-1.5">
                Full-Stack & Flutter Developer | Digital Product Designer
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-1 flex items-center gap-1.5 font-mono-accent">
                <MapPin className="w-3 h-3 text-zinc-400 print:text-zinc-600" />
                <span>Taza, Morocco</span>
                <span>•</span>
                <span>OFPPT Specialized Institute of Applied Technology</span>
              </p>
            </div>

            {/* Contact Information Cluster */}
            <div className="text-[11px] font-mono-accent text-zinc-600 dark:text-zinc-400 print:text-zinc-700 space-y-1 sm:text-right shrink-0">
              <div><strong className="text-zinc-900 dark:text-zinc-200 print:text-zinc-900">Email:</strong> boulouiz.simohamed@gmail.com</div>
              <div><strong className="text-zinc-900 dark:text-zinc-200 print:text-zinc-900">Phone:</strong> +212 688-348-189</div>
              <div><strong className="text-zinc-900 dark:text-zinc-200 print:text-zinc-900">GitHub:</strong> github.com/boulouizsimohamed-tech</div>
              <div><strong className="text-zinc-900 dark:text-zinc-200 print:text-zinc-900">LinkedIn:</strong> linkedin.com/in/simo-blz</div>
              <div><strong className="text-zinc-900 dark:text-zinc-200 print:text-zinc-900">Portfolio:</strong> mohamed-boulouiz-portfolio.vercel.app</div>
            </div>
          </div>

          {/* Professional Summary (Tight 3–4 lines max) */}
          <div className="print-avoid-break">
            <h2 className="text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white print:text-zinc-950 mb-1 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-800 leading-relaxed mt-1">
              Results-driven Full-Stack & Flutter Developer specializing in high-performance cross-platform mobile apps (offline audio decoding, low-latency playback, yt-dlp media extraction), scalable backend APIs (Python FastAPI, PHP Laravel), and modern React web architectures. Passionate about clean code, 3NF database normalization, and minimalist high-contrast digital product design.
            </p>
          </div>

          {/* Two-Column Body Grid (8 Cols Main / 4 Cols Side) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 print:grid-cols-12 print:gap-4 items-start">
            
            {/* Main Column (8 Cols): Key Engineering Projects & Education */}
            <div className="md:col-span-8 print:col-span-8 space-y-3.5">
              
              {/* Projects Section */}
              <div className="print-avoid-break">
                <h2 className="text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white print:text-zinc-950 mb-2 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-0.5">
                  Key Engineering Projects
                </h2>
                
                <div className="space-y-2.5">
                  {/* Project 1: BO Music */}
                  <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xs text-zinc-950 dark:text-white print:text-zinc-950">
                        BO Music <span className="font-normal text-zinc-500 print:text-zinc-600">— Offline Audio Engine (Flutter & Dart)</span>
                      </h3>
                      <span className="text-[9px] font-mono-accent text-zinc-500 print:text-zinc-600">Offline Multimedia</span>
                    </div>
                    <p className="text-[10.5px] text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight mt-1">
                      Offline-first high-fidelity audio/video player with gapless decoding (&lt;15ms latency), dynamic 6-palette theming, earphone/Bluetooth media button interceptors, and GitHub OTA auto-updates.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {['Flutter', 'Dart', 'just_audio', 'Hive NoSQL', 'Media Notifications'].map((t, i) => (
                        <span key={i} className="text-[8.5px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 border border-zinc-200 dark:border-zinc-700 print:border-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2: BO Downloader */}
                  <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xs text-zinc-950 dark:text-white print:text-zinc-950">
                        BO Downloader <span className="font-normal text-zinc-500 print:text-zinc-600">— Multi-Platform Engine (FastAPI & Flutter)</span>
                      </h3>
                      <span className="text-[9px] font-mono-accent text-zinc-500 print:text-zinc-600">10+ Platforms</span>
                    </div>
                    <p className="text-[10.5px] text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight mt-1">
                      Multi-platform media extraction client backed by an asynchronous Python FastAPI microservice utilizing yt-dlp to stream up to 4K MP4 / 320kbps MP3 without watermarks and with resumable background queues.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {['FastAPI', 'Python', 'yt-dlp', 'Flutter', 'Async Queues', 'Android/iOS'].map((t, i) => (
                        <span key={i} className="text-[8.5px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 border border-zinc-200 dark:border-zinc-700 print:border-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 3: BOULOUIZ SHOP */}
                  <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xs text-zinc-950 dark:text-white print:text-zinc-950">
                        BOULOUIZ SHOP <span className="font-normal text-zinc-500 print:text-zinc-600">— Normalized E-Commerce (Next.js & MySQL)</span>
                      </h3>
                      <span className="text-[9px] font-mono-accent text-zinc-500 print:text-zinc-600">Commercial Web</span>
                    </div>
                    <p className="text-[10.5px] text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight mt-1">
                      Full-featured e-commerce platform built with strict Third Normal Form (3NF) relational architecture, server-side catalog hydration, secure cart checkout, and relational order tracking.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {['Next.js', 'React', 'MySQL 3NF', 'Tailwind CSS', 'REST API'].map((t, i) => (
                        <span key={i} className="text-[8.5px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 border border-zinc-200 dark:border-zinc-700 print:border-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4: Developer Portfolio */}
                  <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xs text-zinc-950 dark:text-white print:text-zinc-950">
                        Personal Developer Portfolio <span className="font-normal text-zinc-500 print:text-zinc-600">(React & Vite)</span>
                      </h3>
                      <span className="text-[9px] font-mono-accent text-zinc-500 print:text-zinc-600">SPA Architecture</span>
                    </div>
                    <p className="text-[10.5px] text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight mt-1">
                      High-performance portfolio featuring Telegram-style circular wave transitions (View Transitions API), client-side interactive component simulators, and isolated 1-page A4 print architecture.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {['React', 'Vite', 'Tailwind CSS', 'View Transitions', 'Accessible Dialogs'].map((t, i) => (
                        <span key={i} className="text-[8.5px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 border border-zinc-200 dark:border-zinc-700 print:border-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="print-avoid-break">
                <h2 className="text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white print:text-zinc-950 mb-1.5 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-0.5">
                  Education & Specialized Training
                </h2>
                <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xs text-zinc-950 dark:text-white print:text-zinc-950">
                        Specialized Technician in Digital Development & Information Technology
                      </h3>
                      <p className="text-[10.5px] text-zinc-600 dark:text-zinc-300 print:text-zinc-700">
                        OFPPT Specialized Institute of Applied Technology (ISTA) — Taza, Morocco
                      </p>
                    </div>
                    <span className="text-[9px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 text-zinc-600 dark:text-zinc-300 print:text-zinc-800 border border-zinc-200 dark:border-zinc-700 print:border-zinc-300 shrink-0">
                      2024 – Present
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-1">
                    Rigorous practical curriculum covering Flutter/Dart mobile development, Python/FastAPI backend engineering, PHP/Laravel MVC systems, MySQL relational database normalization, and UX design.
                  </p>
                </div>
              </div>

            </div>

            {/* Side Column (4 Cols): Technical Skills & Languages */}
            <div className="md:col-span-4 print:col-span-4 space-y-3.5">
              
              {/* Technical Skills Inventory */}
              <div className="print-avoid-break">
                <h2 className="text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white print:text-zinc-950 mb-2 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-0.5">
                  Technical Skills
                </h2>
                
                <div className="space-y-2 text-[10.5px]">
                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      Mobile Engineering:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      Flutter, Dart, just_audio, audio_service, background_downloader, custom theming, local notifications, MethodChannels.
                    </span>
                  </div>

                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      Frontend Web:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      React, Vite, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI.
                    </span>
                  </div>

                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      Backend & APIs:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      Python, FastAPI, yt-dlp, PHP, Laravel MVC, RESTful APIs, Asynchronous queues.
                    </span>
                  </div>

                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      Databases:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      MySQL (1NF, 2NF, 3NF Normalization), Relational Schemas, Hive NoSQL.
                    </span>
                  </div>

                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      Tools & Workflows:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      Git, GitHub, VS Code, Linux, Postman, Vercel, Vite.
                    </span>
                  </div>

                  <div className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-zinc-950 block text-[11px] mb-0.5">
                      UI/UX & Design:
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300 print:text-zinc-700 leading-tight block">
                      Canva, Logo & Brand Identity, High-Contrast UI, Product Mockups.
                    </span>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div className="print-avoid-break">
                <h2 className="text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white print:text-zinc-950 mb-1.5 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-0.5">
                  Languages
                </h2>
                <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 print:border-zinc-300 bg-white dark:bg-zinc-900/40 print:bg-white space-y-1 text-[10.5px]">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 print:text-zinc-900">Arabic:</span>
                    <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 print:text-zinc-900">French:</span>
                    <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">Professional Working</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 print:text-zinc-900">English:</span>
                    <span className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">Professional Working</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Close Action Bar (Hidden in Print) */}
        <div className="no-print mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
          >
            Close Preview
          </button>
        </div>

      </div>
    </dialog>
  );
}
