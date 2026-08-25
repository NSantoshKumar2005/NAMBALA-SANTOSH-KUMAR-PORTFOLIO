import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative z-10 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Solid foundation in Computer Science, Data Science, Mathematics, and Analytical Reasoning.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-sm dark:shadow-lg overflow-hidden"
            >
              {/* Card Banner Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={item.bgImage}
                  alt={item.degree}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-slate-900/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-transparent"></div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 text-xs font-mono font-bold text-emerald-400 bg-slate-900/80 backdrop-blur-md rounded-md border border-emerald-500/30">
                    {item.score}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {item.institution}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Verification</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Completed / Enrolled</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
