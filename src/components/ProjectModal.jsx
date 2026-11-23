import React, { useEffect, useRef } from 'react';
import { 
  X, CheckCircle2, Cpu, Layers, ExternalLink, 
  Smartphone, ArrowRight, ShieldCheck, Sparkles,
  Terminal, Globe, PenTool, Download
} from 'lucide-react';
import ProjectCardVisual from './ProjectCardVisual';

export default function ProjectModal({ project, isOpen, onClose, onOpenDemo }) {
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

  // Handle native cancel/close events to synchronize state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

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

  // Click outside backdrop dismiss per light dismiss pattern
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-full max-w-3xl rounded-3xl p-0 bg-white dark:bg-[#0c0c10] text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-xs max-h-[90vh] overflow-y-auto outline-hidden"
    >
      <div className="p-6 sm:p-8">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-2">
              <span>{project.categoryLabel}</span>
              <span>•</span>
              <span className="text-zinc-900 dark:text-white font-medium">{project.badge}</span>
            </div>
            <h2 id="project-modal-title" className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-zinc-950 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            autofocus
            aria-label="Close dialog"
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Mockup Container */}
        <div className="mb-8">
          <ProjectCardVisual 
            demoType={project.demoType} 
            accentColor={project.accentColor} 
            title={project.title} 
          />
        </div>

        {/* Project Tagline & In-Depth Summary */}
        <div className="space-y-4 mb-8">
          <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 mb-8">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {metric.label}
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-zinc-900 dark:text-white mt-0.5">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Key Features Checklist */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-lg text-zinc-950 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Key Engineering Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
                <div className="font-display font-semibold text-sm text-zinc-900 dark:text-white mb-1">
                  {feat.title}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Breakdown */}
        <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 mb-8">
          <h3 className="font-display font-bold text-base text-zinc-950 dark:text-white mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span>System Architecture & Technical Design</span>
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
            {project.architecture.overview}
          </p>
          <ul className="space-y-1.5">
            {project.architecture.layers.map((layer, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0" />
                <span>{layer}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono-accent uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            Technology Stack & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Close Overview
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-md hover:-translate-y-0.5 ${
                  project.id === 'bo-downloader'
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold hover:from-amber-300 hover:to-yellow-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                    : 'bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-950 font-bold hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download Latest Release</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenDemo) onOpenDemo(project.demoType);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md"
            >
              <span>Launch Interactive Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
