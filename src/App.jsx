import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import CertificationsAchievements from './components/CertificationsAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundTheme from './components/BackgroundTheme';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 transition-colors duration-500 relative font-sans">
      <BackgroundTheme />

      <div className="relative z-10">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          openResumeModal={() => setResumeModalOpen(true)}
        />

        <main>
          <Hero openResumeModal={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <CertificationsAchievements />
          <Contact />
        </main>

        <Footer openResumeModal={() => setResumeModalOpen(true)} />
      </div>

      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
