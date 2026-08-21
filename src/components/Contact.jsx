import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: "Send Email"
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Phone Number",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      action: "Call Direct"
    },
    {
      icon: <Github className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "GitHub Profile",
      value: `@${personalInfo.githubUsername}`,
      href: personalInfo.github,
      action: "View Repositories"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "LinkedIn Profile",
      value: `@${personalInfo.linkedinUsername}`,
      href: personalInfo.linkedin,
      action: "Connect on LinkedIn"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Open for full-stack developer opportunities, software engineering roles, and collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mb-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Feel free to reach out via email, phone, or LinkedIn. I usually respond within a few hours.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{card.title}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {card.value}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.action} →
                </span>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below to send an instant message or inquiry directly to my email inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your email client has been launched with your message pre-filled.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Santosh, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
