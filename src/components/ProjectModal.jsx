import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Shield, Database, Layout } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between sticky top-0 bg-[#0f172a]/95 backdrop-blur-md z-10">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            <p className="text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Key Technical Features & Architecture
            </h4>
            <ul className="space-y-3">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-3">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-600 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
