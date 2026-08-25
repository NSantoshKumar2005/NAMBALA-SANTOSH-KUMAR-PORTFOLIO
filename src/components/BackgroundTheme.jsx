import React from 'react';

export default function BackgroundTheme() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]"
      ></div>

      {/* Modern Developer Square Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem]"
      ></div>

      {/* Floating Glowing Mesh Orbs (Dark & Light Adaptive) */}
      {/* Orb 1: Top-Left Cyan/Blue */}
      <div 
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-transparent blur-[140px] animate-pulse-slow"
      ></div>

      {/* Orb 2: Top-Right Purple/Indigo */}
      <div 
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/15 via-indigo-600/15 to-transparent blur-[150px] animate-float"
      ></div>

      {/* Orb 3: Center Emerald Accent */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-500/10 blur-[130px]"
      ></div>

      {/* Orb 4: Bottom-Left Electric Blue */}
      <div 
        className="absolute bottom-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-transparent blur-[140px] animate-float"
        style={{ animationDelay: '3s' }}
      ></div>

      {/* Orb 5: Bottom-Right Cyan/Teal */}
      <div 
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-400/20 to-indigo-500/15 blur-[130px]"
      ></div>

    </div>
  );
}
