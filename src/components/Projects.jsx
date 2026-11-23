import React, { useState } from 'react';
import { 
  Sparkles, Smartphone, Globe, PenTool, 
  ArrowUpRight, Layers, Eye, Sliders, ExternalLink, Download
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectCardVisual from './ProjectCardVisual';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onLaunchDemo }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'design', label: 'UI/UX & Design', icon: PenTool },
  ];

  const filteredProjects = projectsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-3">
                <span>03 // FEATURED WORK</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 dark:text-white">
                Flagship Engineering & Design.
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
                Dedicated project architectures encompassing offline-first Flutter audio engines, FastAPI media downloaders, normalized e-commerce platforms, and commercial digital asset suites.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 150} className="h-full">
              <article
                className="group rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl premium-card h-full"
              >
              <div>
                {/* Visual Preview / Mockup */}
                <div className="mb-6 rounded-2xl overflow-hidden shadow-md group-hover:scale-[1.01] transition-transform duration-300">
                  <ProjectCardVisual 
                    demoType={project.demoType} 
                    accentColor={project.accentColor} 
                    title={project.title} 
                  />
                </div>

                {/* Header info */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-accent font-semibold bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono-accent text-zinc-500 dark:text-zinc-400">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-extrabold text-2xl text-zinc-950 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 5).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-accent bg-white dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono-accent text-zinc-400">
                      +{project.tags.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenDetails(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white hover:underline decoration-2 underline-offset-4"
                >
                  <Eye className="w-4 h-4 text-zinc-400" />
                  <span>Architecture & Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => onLaunchDemo && onLaunchDemo(project.demoType)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
                  >
                    <span>Test Simulator</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
        </div>

      </div>

      {/* Accessible Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
        onOpenDemo={onLaunchDemo}
      />
    </section>
  );
}
