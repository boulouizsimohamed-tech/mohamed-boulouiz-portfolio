import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

const CV_PROJECTS = [
  {
    title: 'BO Music',
    subtitle: 'Offline Audio Engine (Flutter & Dart)',
    badge: 'Offline Multimedia',
    desc: 'Offline-first high-fidelity audio/video player with gapless decoding (<15ms latency), dynamic 6-palette theming, earphone/Bluetooth media interceptors, and GitHub OTA auto-updates.',
    tags: ['Flutter', 'Dart', 'just_audio', 'Hive NoSQL', 'Media Controls']
  },
  {
    title: 'BO Downloader',
    subtitle: 'Multi-Platform Engine (FastAPI & Flutter)',
    badge: '10+ Platforms',
    desc: 'Multi-platform media extraction client backed by an async Python FastAPI microservice utilizing yt-dlp to stream up to 4K MP4 / 320kbps MP3 without watermarks and with resumable background queues.',
    tags: ['FastAPI', 'Python', 'yt-dlp', 'Flutter', 'Async Queues']
  },
  {
    title: 'BOULOUIZ SHOP',
    subtitle: 'Normalized E-Commerce (Next.js & MySQL)',
    badge: 'Commercial Web',
    desc: 'Full-featured luxury fashion e-commerce platform built with strict Third Normal Form (3NF) relational architecture, dynamic catalog filtering, admin command center, and relational order tracking.',
    tags: ['Next.js', 'PHP', 'MySQL 3NF', 'Tailwind CSS', 'REST API']
  },
  {
    title: 'Personal Developer Portfolio',
    subtitle: 'SPA Architecture (React & Vite)',
    badge: 'Web Engineering',
    desc: 'High-performance portfolio featuring Telegram-style View Transitions circular ripple wave, interactive project carousels with lightbox zoom, and isolated 1-page A4 print architecture.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'View Transitions']
  }
];

const CV_SKILLS = [
  {
    title: 'Mobile Engineering',
    items: 'Flutter, Dart, just_audio, audio_service, background_downloader, custom theming, MethodChannels.'
  },
  {
    title: 'Frontend Web',
    items: 'React, Vite, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI.'
  },
  {
    title: 'Backend & APIs',
    items: 'Python, FastAPI, yt-dlp, PHP, Laravel MVC, RESTful APIs, Async Queues.'
  },
  {
    title: 'Databases',
    items: 'MySQL (1NF–3NF Normalization), Relational Schemas, Hive NoSQL.'
  },
  {
    title: 'Tools & UI/UX Design',
    items: 'Git, GitHub, VS Code, Linux, Postman, Vercel, Canva, Brand Identity.'
  }
];

function CvDocument({ isPrint = false }) {
  const cardCls = isPrint
    ? 'p-2.5 rounded-lg border border-zinc-300 bg-white'
    : 'p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40';

  const headingCls = isPrint
    ? 'text-[10px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 mb-1.5 border-b border-zinc-300 pb-0.5'
    : 'text-[11px] font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-0.5';

  const titleCls = isPrint
    ? 'font-display font-bold text-[11.5px] text-zinc-950'
    : 'font-display font-bold text-xs text-zinc-950 dark:text-white';

  const bodyCls = isPrint
    ? 'text-[10px] text-zinc-700 leading-snug'
    : 'text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug';

  const tagCls = isPrint
    ? 'text-[8.5px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-300'
    : 'text-[9px] font-mono-accent px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700';

  return (
    <div
      className={
        isPrint
          ? 'w-full bg-white text-zinc-950 font-sans space-y-3'
          : 'mt-6 p-5 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 space-y-4 font-sans'
      }
    >
      {/* Header: Photo + Name + Contact Split */}
      <div
        className={`flex ${isPrint ? 'flex-row items-center justify-between' : 'flex-col sm:flex-row sm:items-center justify-between'} gap-4 pb-3 border-b ${
          isPrint ? 'border-zinc-300' : 'border-zinc-300 dark:border-zinc-800'
        }`}
      >
        {/* Left: Avatar + Identity */}
        <div className="flex items-center gap-3.5">
          <img
            src="/avatar.jpg"
            alt={profileData.name}
            className={`w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-xl object-cover object-top shrink-0 border ${
              isPrint ? 'border-zinc-300' : 'border-zinc-300 dark:border-zinc-700 shadow-sm'
            }`}
          />
          <div>
            <h1
              id={!isPrint ? 'resume-modal-title' : undefined}
              className={`font-display font-black tracking-tight leading-none ${
                isPrint ? 'text-2xl text-zinc-950' : 'text-2xl sm:text-3xl text-zinc-950 dark:text-white'
              }`}
            >
              {profileData.name}
            </h1>
            <p
              className={`text-xs sm:text-[13px] font-semibold mt-1 ${
                isPrint ? 'text-zinc-800' : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {profileData.title}
            </p>
            <p
              className={`text-[10.5px] mt-1 flex items-center gap-1 font-mono-accent ${
                isPrint ? 'text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              <MapPin className="w-3 h-3 shrink-0" />
              <span>{profileData.location} • OFPPT ISTA</span>
            </p>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div
          className={`text-[10px] font-mono-accent space-y-0.5 shrink-0 ${
            isPrint ? 'text-right text-zinc-700' : 'sm:text-right text-zinc-600 dark:text-zinc-400'
          }`}
        >
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-200'}>Email:</strong>{' '}
            {profileData.socials.email}
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-200'}>Phone:</strong>{' '}
            {profileData.socials.phone}
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-200'}>GitHub:</strong>{' '}
            github.com/boulouizsimohamed-tech
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-200'}>LinkedIn:</strong>{' '}
            linkedin.com/in/simo-blz-279438386
          </div>
          <div>
            <strong className={isPrint ? 'text-zinc-950' : 'text-zinc-900 dark:text-zinc-200'}>Portfolio:</strong>{' '}
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

      {/* 2-Column Body Grid */}
      <div className={isPrint ? 'grid grid-cols-12 gap-4 items-start' : 'grid grid-cols-1 md:grid-cols-12 gap-5 items-start'}>
        {/* Main Column (8 Cols): Projects & Education */}
        <div className={isPrint ? 'col-span-8 space-y-3' : 'md:col-span-8 space-y-3.5'}>
          <div className="print-avoid-break">
            <h2 className={headingCls}>Key Engineering Projects</h2>
            <div className="space-y-2">
              {CV_PROJECTS.map((proj) => (
                <div key={proj.title} className={cardCls}>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={titleCls}>
                      {proj.title}{' '}
                      <span className={`font-normal ${isPrint ? 'text-zinc-600' : 'text-zinc-500'}`}>
                        — {proj.subtitle}
                      </span>
                    </h3>
                    <span className={`text-[8.5px] font-mono-accent shrink-0 ${isPrint ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      {proj.badge}
                    </span>
                  </div>
                  <p className={`${bodyCls} mt-0.5`}>{proj.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className={tagCls}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="print-avoid-break">
            <h2 className={headingCls}>Education &amp; Specialized Training</h2>
            <div className={cardCls}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={titleCls}>
                    Specialized Technician in Digital Development &amp; IT
                  </h3>
                  <p className={`${bodyCls} mt-0.5`}>
                    OFPPT Specialized Institute of Applied Technology (ISTA) — Taza, Morocco
                  </p>
                </div>
                <span className={`${tagCls} shrink-0`}>2024 – Present</span>
              </div>
              <p className={`text-[9.5px] mt-1 ${isPrint ? 'text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}`}>
                Practical engineering track covering Flutter/Dart mobile development, Python/FastAPI backend systems, PHP/Laravel MVC, MySQL 3NF normalization, and UI/UX design.
              </p>
            </div>
          </div>
        </div>

        {/* Side Column (4 Cols): Technical Skills & Languages */}
        <div className={isPrint ? 'col-span-4 space-y-3' : 'md:col-span-4 space-y-3.5'}>
          <div className="print-avoid-break">
            <h2 className={headingCls}>Technical Skills</h2>
            <div className="space-y-1.5">
              {CV_SKILLS.map((skill) => (
                <div key={skill.title} className={cardCls}>
                  <span className={`${titleCls} block mb-0.5`}>{skill.title}:</span>
                  <span className={`${bodyCls} block`}>{skill.items}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="print-avoid-break">
            <h2 className={headingCls}>Languages</h2>
            <div className={`${cardCls} space-y-1 text-[10px]`}>
              {[
                { lang: 'Arabic', level: 'Native' },
                { lang: 'French', level: 'Professional Working' },
                { lang: 'English', level: 'Professional Working' }
              ].map(({ lang, level }) => (
                <div key={lang} className="flex justify-between items-center">
                  <span className={`font-semibold ${isPrint ? 'text-zinc-950' : 'text-zinc-800 dark:text-zinc-200'}`}>
                    {lang}:
                  </span>
                  <span className={isPrint ? 'text-zinc-600' : 'text-zinc-500 dark:text-zinc-400'}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
