import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles, FolderGit2, Mail, User, Download, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profileData } from '../data/profile';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Interactive Labs', href: '#demos', icon: Sparkles },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'py-2.5 sm:py-3 bg-white/85 dark:bg-[#070709]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
        : 'py-3.5 sm:py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-white rounded-lg min-w-0"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-display font-extrabold text-base sm:text-lg shadow-md tracking-tight transition-transform duration-300 group-hover:scale-105 shrink-0">
              <span>MB</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 animate-pulse" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors leading-tight truncate">
                {profileData.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono-accent text-zinc-500 dark:text-zinc-400 leading-tight truncate hidden xs:block">
                Full-Stack & Flutter
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-xs" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Telegram-style circular transition theme toggle */}
            <ThemeToggle />

            {/* Desktop Connect Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all active:scale-95 shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-zinc-900 dark:text-white" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Glass Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-[57px] sm:top-[65px] z-40 bg-black/60 backdrop-blur-md md:hidden animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="border-b border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-[#0c0c10]/95 backdrop-blur-2xl px-5 pt-4 pb-6 shadow-2xl space-y-4 rounded-b-3xl"
          >
            {/* Navigation links */}
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </a>
                );
              })}
            </div>

            {/* Quick Actions in mobile drawer */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono-accent">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  Taza, Morocco
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume CV</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
