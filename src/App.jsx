import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import InteractiveDemos from './components/InteractiveDemos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeLabTarget, setActiveLabTarget] = useState('audio-player');

  const handleLaunchDemo = (demoType) => {
    setActiveLabTarget(demoType);
    const demoElement = document.getElementById('demos');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#070709] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
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
        <Projects onLaunchDemo={handleLaunchDemo} />

        {/* Interactive Component & Architecture Labs */}
        <InteractiveDemos activeLab={activeLabTarget} />

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
