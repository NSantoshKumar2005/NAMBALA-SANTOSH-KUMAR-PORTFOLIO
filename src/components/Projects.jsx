import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            End-to-End <span className="gradient-text">Web Applications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Production-ready web solutions incorporating secure authentication, payment gateway APIs, and efficient REST API state management.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg dark:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400/80 mb-4">{project.subtitle}</p>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-cyan-600 dark:text-cyan-300 text-xs font-semibold hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Architecture & Code Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
