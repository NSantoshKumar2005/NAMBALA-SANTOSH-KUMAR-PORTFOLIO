import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ openResumeModal }) {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#070c18] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">{personalInfo.name}</span>
              <p className="text-xs text-slate-500 font-mono">Python Full Stack Developer</p>
            </div>
          </div>

          {/* Quick Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-700 dark:text-slate-400">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
            <button onClick={openResumeModal} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Resume</button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Nambala Santosh Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
