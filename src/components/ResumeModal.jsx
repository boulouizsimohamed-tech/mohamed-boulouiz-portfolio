import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, GraduationCap, Code, Briefcase, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { profileData } from '../data/profile';
import { skillCategories } from '../data/skills';
import { projectsData } from '../data/projects';

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
      <div className="p-6 sm:p-10">
        
        {/* Top Actions Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl text-zinc-950 dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-accent bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-1.5"
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

        {/* CV Document Container */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 space-y-8 font-sans">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h1 id="resume-modal-title" className="font-display font-black text-3xl text-zinc-950 dark:text-white">
                {profileData.name}
              </h1>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 mt-1">
                {profileData.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {profileData.location} • {profileData.education.institution}
              </p>
            </div>

            <div className="text-xs font-mono-accent text-zinc-500 dark:text-zinc-400 space-y-1">
              <div>Email: {profileData.socials.email}</div>
              <div>Phone: {profileData.socials.phone}</div>
              <div>GitHub: {profileData.socials.github}</div>
              <div>LinkedIn: <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">simo-blz</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-3">
              Education & Specialized Training
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm text-zinc-950 dark:text-white">
                    {profileData.education.program}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    {profileData.education.institution} — Taza, Morocco
                  </p>
                </div>
                <span className="text-[11px] font-mono-accent px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Active Specialization
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                Specialized tracks: Full-Stack Web Development, Mobile Development (Flutter/Dart), Relational Database Normalization (MySQL 3NF), and Digital Brand Merchandising.
              </p>
            </div>
          </div>

          {/* Featured Projects in CV */}
          <div>
            <h2 className="text-xs font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-sm text-zinc-950 dark:text-white">
                      {proj.title} <span className="font-normal text-zinc-400">({proj.categoryLabel})</span>
                    </h3>
                    <span className="text-[10px] font-mono-accent text-zinc-400">{proj.badge}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                    {proj.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono-accent px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono-accent font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-3">
              Technical Skill Inventory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                <span className="font-bold text-zinc-900 dark:text-white block mb-1">Mobile Development:</span>
                <span className="text-zinc-600 dark:text-zinc-400">Flutter, Dart, just_audio, background_downloader, custom theming, media controls, local notifications.</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                <span className="font-bold text-zinc-900 dark:text-white block mb-1">Backend & Databases:</span>
                <span className="text-zinc-600 dark:text-zinc-400">Python, FastAPI, yt-dlp, PHP, Laravel (MVC), MySQL, Database Normalization (1NF to 3NF).</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                <span className="font-bold text-zinc-900 dark:text-white block mb-1">Frontend Web:</span>
                <span className="text-zinc-600 dark:text-zinc-400">HTML5, CSS3, JavaScript (ES6+), React, Vite, Next.js, Bootstrap, jQuery, Tailwind CSS.</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                <span className="font-bold text-zinc-900 dark:text-white block mb-1">UI/UX & Digital Design:</span>
                <span className="text-zinc-600 dark:text-zinc-400">Brand Identity, Logo Design, Product Mockups, Promotional Video Ads, Canva, Google Flow, Digital Asset Merchandising.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Close Action */}
        <div className="mt-6 flex justify-end">
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
