import React, { useEffect, useRef } from 'react';
import { X, Download } from 'lucide-react';
import { profileData } from '../data/profile';

const CV_SKILLS = [
  {
    category: 'Mobile Engineering',
    items: 'Flutter, Dart, just_audio, audio_service, background_downloader, custom theming, Method Channels'
  },
  {
    category: 'Frontend Web',
    items: 'React, Vite, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI'
  },
  {
    category: 'Backend & APIs',
    items: 'Python, FastAPI, yt-dlp, PHP, Laravel MVC, RESTful APIs, Async Queues'
  },
  {
    category: 'Databases',
    items: 'MySQL (1NF–3NF Normalization), Relational Schemas, Hive NoSQL'
  },
  {
    category: 'Tools & UI/UX Design',
    items: 'Git, GitHub, VS Code, Linux, Postman, Vercel, Canva, Brand Identity'
  }
];

const CV_PROJECTS = [
  {
    title: 'BO Music — Offline Audio Engine (Offline Multimedia)',
    tech: 'Flutter • Dart • just_audio • Hive NoSQL • Media Controls',
    desc: 'Offline-first high-fidelity audio/video player with gapless decoding (<15ms latency), dynamic 6-palette theming, earphone/Bluetooth media interceptors, and GitHub OTA auto-updates.'
  },
  {
    title: 'BO Downloader — Multi-Platform Engine (10+ Platforms)',
    tech: 'FastAPI • Python • yt-dlp • Flutter • Async Queues',
    desc: 'Multi-platform media extraction client backed by an async Python FastAPI microservice utilizing yt-dlp to stream up to 4K MP4 / 320kbps MP3 without watermarks and with resumable background queues.'
  },
  {
    title: 'BOULOUIZ SHOP — Normalized E-Commerce (Commercial Web)',
    tech: 'Next.js • PHP • MySQL 3NF • Tailwind CSS • REST API',
    desc: 'Full-featured luxury fashion e-commerce platform built with strict Third Normal Form (3NF) relational architecture, dynamic catalog filtering, admin command center, and relational order tracking.'
  },
  {
    title: 'Personal Developer Portfolio — SPA Architecture (Web Engineering)',
    tech: 'React • Vite • Tailwind CSS • View Transitions',
    desc: 'High-performance portfolio featuring Telegram-style View Transitions circular ripple wave, interactive project carousels with lightbox zoom, and clean responsive design.'
  }
];

export default function ResumeModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
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

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="resume-modal-title"
      className="m-auto w-full max-w-4xl rounded-3xl p-0 bg-white dark:bg-[#0c0c10] text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-xs max-h-[92vh] overflow-y-auto outline-hidden"
    >
      <div className="p-5 sm:p-8">
        {/* Top Actions Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-extrabold text-xl text-zinc-950 dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-accent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Mohamed_Boulouiz_CV.pdf"
              download="Mohamed_Boulouiz_CV.pdf"
              className="px-4 py-2 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
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

        {/* On-Screen CV Document Preview */}
        <div className="mt-6 p-6 sm:p-9 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-5 font-sans shadow-sm">
          {/* Header: Photo + Name + Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3.5 border-b-2 border-zinc-900 dark:border-zinc-700">
            <div className="flex items-center gap-4">
              <img
                src="/avatar.jpg"
                alt={profileData.name}
                className="w-[66px] h-[80px] rounded-md object-cover object-top shrink-0 border border-zinc-300 dark:border-zinc-700"
              />
              <div>
                <h1
                  id="resume-modal-title"
                  className="font-display font-black uppercase tracking-tight leading-tight text-2xl sm:text-[26px] text-zinc-950 dark:text-white"
                >
                  {profileData.name}
                </h1>
                <p className="text-xs sm:text-[13px] font-bold mt-0.5 text-blue-700 dark:text-blue-400">
                  {profileData.title}
                </p>
                <p className="text-[11px] mt-1 text-zinc-600 dark:text-zinc-400">
                  {profileData.location} • OFPPT ISTA
                </p>
              </div>
            </div>

            <div className="text-[10.5px] leading-[1.5] shrink-0 sm:text-right text-zinc-700 dark:text-zinc-300">
              <div>
                <strong className="text-zinc-950 dark:text-white">Email:</strong> {profileData.socials.email}
              </div>
              <div>
                <strong className="text-zinc-950 dark:text-white">Phone:</strong> {profileData.socials.phone}
              </div>
              <div>
                <strong className="text-zinc-950 dark:text-white">GitHub:</strong> github.com/boulouizsimohamed-tech
              </div>
              <div>
                <strong className="text-zinc-950 dark:text-white">LinkedIn:</strong> linkedin.com/in/simo-blz-279438386
              </div>
              <div>
                <strong className="text-zinc-950 dark:text-white">Portfolio:</strong> mohamed-boulouiz-portfolio.vercel.app
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Results-driven Full-Stack &amp; Flutter Developer specializing in high-performance cross-platform mobile apps (offline audio decoding, low-latency playback, yt-dlp media extraction), scalable backend APIs (Python FastAPI, PHP Laravel), and modern React/Next.js web architectures. Focused on clean code, 3NF database normalization, and minimalist high-contrast digital product design.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-1.5">
              {CV_SKILLS.map((skill) => (
                <div
                  key={skill.category}
                  className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-3 items-baseline"
                >
                  <span className="font-bold text-[10.5px] text-zinc-900 dark:text-white">
                    {skill.category}
                  </span>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {skill.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5">
              Key Engineering Projects
            </h2>
            <div className="space-y-2.5">
              {CV_PROJECTS.map((proj) => (
                <div key={proj.title}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                    <h3 className="font-bold text-[11px] text-zinc-950 dark:text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-semibold shrink-0 text-blue-700 dark:text-blue-400">
                      {proj.tech}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mt-0.5">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Specialized Training */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5">
              Education &amp; Specialized Training
            </h2>
            <div>
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-bold text-[11px] text-zinc-950 dark:text-white">
                  Specialized Technician in Digital Development &amp; IT
                </h3>
                <span className="font-bold text-[10.5px] shrink-0 text-zinc-900 dark:text-zinc-100">
                  2024 – Present
                </span>
              </div>
              <p className="text-[10.5px] font-semibold mt-0.5 text-blue-700 dark:text-blue-400">
                OFPPT Specialized Institute of Applied Technology (ISTA) — Taza, Morocco
              </p>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mt-0.5">
                Practical engineering track covering Flutter/Dart mobile development, Python/FastAPI backend systems, PHP/Laravel MVC, MySQL 3NF normalization, and UI/UX design.
              </p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5">
              Languages
            </h2>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong className="text-zinc-900 dark:text-white">Arabic:</strong> Native
              {' • '}
              <strong className="text-zinc-900 dark:text-white">French:</strong> Professional Working
              {' • '}
              <strong className="text-zinc-900 dark:text-white">English:</strong> Professional Working
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-5 flex items-center justify-end gap-2.5">
          <a
            href="/Mohamed_Boulouiz_CV.pdf"
            download="Mohamed_Boulouiz_CV.pdf"
            className="px-5 py-2.5 rounded-full text-xs font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
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
