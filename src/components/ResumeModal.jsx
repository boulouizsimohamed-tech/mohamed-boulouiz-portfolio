import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
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
    desc: 'High-performance portfolio featuring Telegram-style View Transitions circular ripple wave, interactive project carousels with lightbox zoom, and isolated 1-page A4 print architecture.'
  }
];

function CvDocument({ isPrint = false }) {
  const headingCls = isPrint
    ? 'text-[11px] font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2'
    : 'text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2.5';

  const bodyCls = isPrint
    ? 'text-[10.5px] text-zinc-700 leading-[1.45]'
    : 'text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed';

  const accentTextCls = isPrint
    ? 'text-blue-700'
    : 'text-blue-700 dark:text-blue-400';

  return (
    <div
      className={
        isPrint
          ? 'w-full bg-white text-zinc-900 font-sans space-y-3.5'
          : 'mt-6 p-6 sm:p-9 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-5 font-sans shadow-sm'
      }
    >
      {/* Header: Photo + Name + Contact Info */}
      <div
        className={`flex ${isPrint ? 'flex-row items-start justify-between' : 'flex-col sm:flex-row sm:items-start justify-between'} gap-4 pb-3.5 border-b-2 ${
          isPrint ? 'border-zinc-900' : 'border-zinc-900 dark:border-zinc-700'
        }`}
      >
        {/* Left: Portrait + Identity */}
        <div className="flex items-center gap-4">
          <img
            src="/avatar.jpg"
            alt={profileData.name}
            className={`w-[66px] h-[80px] rounded-md object-cover object-top shrink-0 border ${
              isPrint ? 'border-zinc-300' : 'border-zinc-300 dark:border-zinc-700'
            }`}
          />
          <div>
            <h1
              id={!isPrint ? 'resume-modal-title' : undefined}
              className={`font-display font-black uppercase tracking-tight leading-tight ${
                isPrint ? 'text-[22px] text-zinc-950' : 'text-2xl sm:text-[26px] text-zinc-950 dark:text-white'
              }`}
            >
              {profileData.name}
            </h1>
            <p className={`text-xs sm:text-[13px] font-bold mt-0.5 ${accentTextCls}`}>
              {profileData.title}
            </p>
            <p className={`text-[11px] mt-1 ${isPrint ? 'text-zinc-600' : 'text-zinc-600 dark:text-zinc-400'}`}>
              {profileData.location} • OFPPT ISTA
            </p>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div
          className={`text-[10.5px] leading-[1.5] shrink-0 ${
            isPrint ? 'text-right text-zinc-700' : 'sm:text-right text-zinc-700 dark:text-zinc-300'
          }`}
        >
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}>Email:</strong>{' '}
            {profileData.socials.email}
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}>Phone:</strong>{' '}
            {profileData.socials.phone}
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}>GitHub:</strong>{' '}
            github.com/boulouizsimohamed-tech
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}>LinkedIn:</strong>{' '}
            linkedin.com/in/simo-blz-279438386
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}>Portfolio:</strong>{' '}
            mohamed-boulouiz-portfolio.vercel.app
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="print-avoid-break">
        <h2 className={headingCls}>Professional Summary</h2>
        <p className={bodyCls}>
          Results-driven Full-Stack &amp; Flutter Developer specializing in high-performance cross-platform mobile apps (offline audio decoding, low-latency playback, yt-dlp media extraction), scalable backend APIs (Python FastAPI, PHP Laravel), and modern React/Next.js web architectures. Focused on clean code, 3NF database normalization, and minimalist high-contrast digital product design.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="print-avoid-break">
        <h2 className={headingCls}>Technical Skills</h2>
        <div className="space-y-1.5">
          {CV_SKILLS.map((skill) => (
            <div
              key={skill.category}
              className={`grid ${isPrint ? 'grid-cols-[155px_1fr]' : 'grid-cols-1 sm:grid-cols-[170px_1fr]'} gap-1 sm:gap-3 items-baseline`}
            >
              <span className={`font-bold text-[10.5px] ${isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                {skill.category}
              </span>
              <span className={bodyCls}>{skill.items}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Engineering Projects */}
      <div className="print-avoid-break">
        <h2 className={headingCls}>Key Engineering Projects</h2>
        <div className="space-y-2.5">
          {CV_PROJECTS.map((proj) => (
            <div key={proj.title}>
              <div className={`flex ${isPrint ? 'flex-row justify-between items-baseline' : 'flex-col sm:flex-row sm:justify-between sm:items-baseline'} gap-1 sm:gap-4`}>
                <h3 className={`font-bold text-[11px] ${isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}`}>
                  {proj.title}
                </h3>
                <span className={`text-[10px] font-semibold shrink-0 ${accentTextCls}`}>
                  {proj.tech}
                </span>
              </div>
              <p className={`${bodyCls} mt-0.5`}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Specialized Training */}
      <div className="print-avoid-break">
        <h2 className={headingCls}>Education &amp; Specialized Training</h2>
        <div>
          <div className="flex justify-between items-baseline gap-2">
            <h3 className={`font-bold text-[11px] ${isPrint ? 'text-zinc-950' : 'text-zinc-950 dark:text-white'}`}>
              Specialized Technician in Digital Development &amp; IT
            </h3>
            <span className={`font-bold text-[10.5px] shrink-0 ${isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-100'}`}>
              2024 – Present
            </span>
          </div>
          <p className={`text-[10.5px] font-semibold mt-0.5 ${accentTextCls}`}>
            OFPPT Specialized Institute of Applied Technology (ISTA) — Taza, Morocco
          </p>
          <p className={`${bodyCls} mt-0.5`}>
            Practical engineering track covering Flutter/Dart mobile development, Python/FastAPI backend systems, PHP/Laravel MVC, MySQL 3NF normalization, and UI/UX design.
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="print-avoid-break">
        <h2 className={headingCls}>Languages</h2>
        <p className={bodyCls}>
          <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-white'}>Arabic:</strong> Native
          {' • '}
          <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-white'}>French:</strong> Professional Working
          {' • '}
          <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-white'}>English:</strong> Professional Working
        </p>
      </div>

      {/* Document Footer */}
      <div
        className={`pt-2.5 border-t flex items-center justify-between text-[10px] ${
          isPrint ? 'border-zinc-200 text-zinc-500' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400'
        }`}
      >
        <span>{profileData.name} — Curriculum Vitae</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  );
}

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

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <>
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby="resume-modal-title"
        className="no-print m-auto w-full max-w-4xl rounded-3xl p-0 bg-white dark:bg-[#0c0c10] text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-xs max-h-[92vh] overflow-y-auto outline-hidden"
      >
        <div className="p-5 sm:p-8">
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800 gap-4">
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

          {/* On-Screen Preview */}
          <CvDocument isPrint={false} />

          {/* Modal Close Action Bar */}
          <div className="mt-5 flex justify-end">
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

      {/* Dedicated 1-Page A4 Print Portal mounted directly on document.body */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div id="printable-cv-portal" className="hidden print:block">
            <CvDocument isPrint={true} />
          </div>,
          document.body
        )}
    </>
  );
}
