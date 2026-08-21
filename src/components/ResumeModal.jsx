import React from 'react';
import { X, Printer, Download, Mail, Phone, Github, Linkedin, CheckCircle2, GraduationCap, Briefcase, Code, Award, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const { personalInfo, experience, projects, education, certifications, achievements, skillCategories } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
      
      <div className="bg-[#0b1329] dark:bg-[#0b1329] light:bg-white border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden print:max-h-none print:border-none print:shadow-none print:rounded-none">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <h3 className="text-base sm:text-lg font-bold text-white">Nambala Santosh Kumar — Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b1329] text-slate-200 font-sans print:p-0 print:text-black print:bg-white print:overflow-visible">
          
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase print:text-black">
              {personalInfo.name}
            </h1>
            <div className="mt-2 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-cyan-400 print:text-black">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/{personalInfo.githubUsername}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/{personalInfo.linkedinUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-black">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-black">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1">
                  <span className="font-semibold text-slate-100 sm:w-44 shrink-0 print:text-black">• {cat.name}:</span>
                  <span className="text-slate-400 print:text-black">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {education.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white print:text-black">{item.degree}</span>
                    <div className="text-slate-400 print:text-black">{item.institution} | {item.score}</div>
                  </div>
                  <span className="font-mono text-cyan-400 text-xs print:text-black">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              INTERNSHIP
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between font-bold text-white print:text-black">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-cyan-400 text-xs font-normal print:text-black">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300 print:text-black">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <div className="font-bold text-white print:text-black">{proj.title}</div>
                  <div className="text-slate-400 font-mono text-[11px] print:text-black">
                    <span className="font-semibold text-slate-300 print:text-black">Tech Stack:</span> {proj.techStack.join(', ')}
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-slate-300 mt-1 print:text-black">
                    {proj.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-300 list-disc list-inside print:text-black">
              {certifications.map((c, idx) => (
                <li key={idx}><span className="font-semibold text-white print:text-black">{c.title}</span> — {c.issuer}</li>
              ))}
            </ul>
          </div>

          {/* Achievements & Activities */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
              ACHIEVEMENTS & ACTIVITIES
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside print:text-black">
              {achievements.map((ach, idx) => (
                <li key={idx} className="leading-relaxed">{ach.description}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
