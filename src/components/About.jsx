import React from 'react';
import { User, Code2, ShieldCheck, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo, stats } = portfolioData;

  const keyFocusAreas = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
      title: "Full-Stack Development",
      desc: "End-to-end web apps with Flask & React, integrating RESTful APIs and structured state management."
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      title: "Relational DBMS & SQL",
      desc: "Optimized MySQL schema design, indexing, role-based access control, and efficient CRUD operations."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
      title: "Secure Authentication",
      desc: "User auth with protected routes, session management, RBAC, and payment gateway integration (Razorpay)."
    },
    {
      icon: <Code2 className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
      title: "Problem Solving & DSA",
      desc: "HackerRank Gold Badge holder with 100+ solved algorithmic challenges and competitive programming track record."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Driven by Code, Passionate About <span className="gradient-text">Scalable Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Summary Text & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                Professional Summary
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {personalInfo.summary}
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">{stat.value}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all group shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit mb-3 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-200 text-sm mb-1.5">
                  {area.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
