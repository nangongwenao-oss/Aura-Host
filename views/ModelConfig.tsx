import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { RotateCw, Sliders, UserCheck, Mic } from 'lucide-react';

export const ModelConfig: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-white tracking-tight">Console <span className="text-[#BB86FC]">Active</span></h1>
        <p className="text-gray-400 text-xs font-mono-tech mt-1">ID: AURA-HOST-007 // ONLINE</p>
      </header>

      {/* 3D Model Viewer Simulator */}
      <GlassCard className="flex flex-col items-center relative min-h-[360px] justify-center border-[#BB86FC]/30">
         <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="text-[10px] text-[#03DAC6] font-mono-tech border border-[#03DAC6]/30 px-2 py-0.5 rounded">NeRF RENDERER</div>
            <div className="text-[10px] text-gray-400 font-mono-tech">POLY: 2.4M</div>
         </div>
         
         {/* Simulated 3D Model */}
         <div 
           className="relative w-48 h-64 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(187,134,252,0.2)] transition-transform duration-500"
           style={{ transform: `rotateY(${rotation}deg)` }}
         >
           <img 
             src="https://picsum.photos/400/600?grayscale" 
             alt="Digital Human" 
             className="w-full h-full object-cover mix-blend-luminosity"
           />
           {/* Scanning effect */}
           <div className="absolute top-0 left-0 w-full h-1 bg-[#03DAC6]/50 shadow-[0_0_15px_#03DAC6] animate-[scan_3s_linear_infinite]"></div>
           
           {/* Wireframe overlay hint */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
         </div>

         <div className="mt-8 flex gap-4">
            <button 
              onClick={() => setRotation(r => r - 45)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#03DAC6]"
            >
              <RotateCw className="w-5 h-5 -scale-x-100" />
            </button>
            <button 
              onClick={() => setRotation(r => r + 45)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#03DAC6]"
            >
              <RotateCw className="w-5 h-5" />
            </button>
         </div>
         
         <div className="absolute bottom-4 right-4 flex items-center gap-2">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           <span className="text-[10px] font-mono-tech text-green-500">SYNCED</span>
         </div>
      </GlassCard>

      {/* Value Alignment */}
      <GlassCard title="Value Alignment Core" headerAction={<UserCheck size={16} className="text-[#BB86FC]" />}>
        <div className="space-y-4">
          <div className="p-3 bg-black/40 rounded border border-white/5 font-mono-tech text-xs text-gray-300">
            > CURRENT: MAINSTREAM_MEDIA_V4.2<br/>
            > BIAS_CHECK: PASSED<br/>
            > SAFETY_FILTER: ACTIVE
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">Corpus Calibration Input</label>
            <input 
              type="text" 
              placeholder="Enter value keywords (e.g., 'Objective', 'Positive')" 
              className="w-full bg-[#0A0A1F] border border-[#BB86FC]/50 rounded p-3 text-sm text-white focus:outline-none focus:border-[#BB86FC] focus:shadow-[0_0_10px_rgba(187,134,252,0.3)] transition-all placeholder-gray-600"
            />
          </div>
        </div>
      </GlassCard>

      {/* Voice Config */}
      <GlassCard title="Voice Synthesis" headerAction={<Mic size={16} className="text-[#03DAC6]" />}>
        <div className="space-y-4">
           <div>
             <div className="flex justify-between text-xs text-gray-400 mb-1">
               <span>Timbre Warmth</span>
               <span className="text-[#03DAC6]">78%</span>
             </div>
             <input type="range" className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#03DAC6]" />
           </div>
           <div>
             <div className="flex justify-between text-xs text-gray-400 mb-1">
               <span>Pitch Variation</span>
               <span className="text-[#03DAC6]">42%</span>
             </div>
             <input type="range" className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#03DAC6]" />
           </div>
        </div>
      </GlassCard>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
