import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#070709] text-zinc-900 dark:text-zinc-100">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Floating Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Projects Showcase */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Formal CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
