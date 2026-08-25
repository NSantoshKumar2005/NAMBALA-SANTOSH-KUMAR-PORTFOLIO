import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, FileText, Sparkles, Code, Database, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Software Engineering Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-30 pointer-events-none transition-opacity duration-500 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"
        style={{ backgroundImage: "url('/bg-tech.jpg')" }}
      ></div>

      {/* Glow background decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/5 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping"></span>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for Python Full Stack Developer Roles</span>
        </div>

        {/* Main Name & Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-cyan-500 font-mono font-bold">&lt;</span>
          <span>{personalInfo.title}</span>
          <span className="text-cyan-500 font-mono font-bold">/&gt;</span>
        </p>

        {/* Short Summary */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Building end-to-end web applications with <span className="text-cyan-600 dark:text-cyan-400 font-medium">Python & Flask</span> on the backend, <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span> on the frontend, and robust <span className="text-emerald-600 dark:text-emerald-400 font-medium">MySQL</span> databases.
        </p>

        {/* Quick Tech Highlights Badge Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10 text-xs font-mono text-slate-700 dark:text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
            <Code className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" /> Python / Flask
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
            <Globe className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" /> React.js / REST APIs
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
            <Database className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> MySQL / DBMS
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={openResumeModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 shadow-sm transition-all"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 shadow-sm transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 shadow-sm transition-all"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="p-3 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500/40 hover:scale-110 shadow-sm transition-all"
            title="Call Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
