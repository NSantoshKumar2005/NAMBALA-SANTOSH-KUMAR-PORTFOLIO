import React, { useState } from 'react';
import { Cpu, CheckCircle, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All Skills' },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name }))
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, categoryName: cat.name })));
    }
    const cat = skillCategories.find(c => c.id === activeTab);
    return cat ? cat.skills.map(s => ({ ...s, categoryName: cat.name })) : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technologies & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Proficient across frontend, backend, database architectures, and fundamental computer science principles.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group relative overflow-hidden shadow-sm"
            >
              {skill.highlight && (
                <div className="absolute top-3 right-3 text-cyan-500 dark:text-cyan-400" title="Key Proficiency">
                  <Star className="w-4 h-4 fill-cyan-500/20 dark:fill-cyan-400/20" />
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 group-hover:from-cyan-400 group-hover:to-emerald-400"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skill.categoryName}</span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
