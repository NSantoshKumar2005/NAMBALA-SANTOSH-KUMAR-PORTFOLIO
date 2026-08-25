import React from 'react';
import { Trophy, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsAchievements() {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Verified credentials and competitive programming recognition in Python, SQL, C, and Algorithmic problem-solving.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Verified Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-sm dark:shadow-md overflow-hidden"
                >
                  <div className="relative h-28 w-full overflow-hidden">
                    <img
                      src={cert.bgImage}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-slate-900/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-transparent"></div>
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/80 text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Achievements & Recognition</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all flex items-start gap-4 shadow-sm dark:shadow-md group relative overflow-hidden"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                    <Star className="w-5 h-5 fill-amber-400/20" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
