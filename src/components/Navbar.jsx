import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code2, FileText } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-[#0a0f1d]/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-200 dark:border-slate-800/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              NAMBALA SANTOSH KUMAR
            </span>
            <span className="text-[10px] text-slate-600 dark:text-slate-400 font-mono tracking-wider uppercase">
              Python Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume & Dark Mode Toggle) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors shadow-sm dark:shadow-none"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#0a0f1d]/98 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-3 shadow-xl backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="flex items-center gap-2 w-full justify-center px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              View Full Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
