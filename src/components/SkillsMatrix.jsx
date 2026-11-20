import React, { useState, useMemo } from 'react';
import { 
  Smartphone, Server, Globe, PenTool, Search, 
  CheckCircle2, Sparkles, Filter, Code, Terminal, 
  Cpu, Database, Layers, Layout, Zap, Braces, 
  Atom, Shield, Box, Video, ShoppingBag, Music,
  DownloadCloud, Palette, Headphones, BellRing, Gauge, Workflow
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import ScrollReveal from './ScrollReveal';

// Icon mapping helper
const iconMap = {
  Smartphone, Server, Globe, PenTool, Code, Terminal,
  Cpu, Database, Layers, Layout, Zap, Braces, Atom,
  Shield, Box, Video, ShoppingBag, Music, DownloadCloud,
  Palette, Headphones, BellRing, Gauge, Workflow, Sparkles
};

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'mobile', label: 'Mobile Development', icon: Smartphone },
    { id: 'backend', label: 'Backend & Databases', icon: Server },
    { id: 'frontend', label: 'Frontend Web', icon: Globe },
    { id: 'design', label: 'UI/UX & Design', icon: PenTool },
  ];

  // Filter skills based on tab and search
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => activeTab === 'all' || cat.id === activeTab)
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) => {
          const matchQuery = 
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
          return matchQuery;
        });
        return { ...cat, skills: filteredSkills };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeTab, searchQuery]);

  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#070709] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono-accent text-zinc-600 dark:text-zinc-400 mb-3">
                <span>02 // TECHNICAL MATRIX</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-950 dark:text-white">
                Skills, Frameworks & Tooling.
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base">
                A comprehensive breakdown of mobile development, backend services, normalized databases, modern web interfaces, and digital brand design.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skill (e.g. Flutter, 3NF)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm'
                      : 'bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const CatIcon = iconMap[category.icon] || Code;
            return (
              <div key={category.id} className="space-y-6">
                
                {/* Category Sub-header */}
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-zinc-950 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono-accent font-medium bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {category.badge}
                  </span>
                </div>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={idx}
                        className="group p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between hover:shadow-md premium-card"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform">
                              <SkillIcon className="w-4 h-4" />
                            </div>
                            <span className="font-display font-semibold text-sm text-zinc-900 dark:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono-accent font-medium tracking-tight ${
                            skill.level === 'Expert'
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                              : skill.level === 'Specialized'
                              ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-1">
                          {skill.highlight}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                No matching technologies found for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-3 text-xs font-semibold text-zinc-900 dark:text-white underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
