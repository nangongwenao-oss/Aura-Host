import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { NeonButton } from '../components/NeonButton';
import { generateScript } from '../services/geminiService';
import { Send, Cpu, Sliders, Radio } from 'lucide-react';

export const ScriptCenter: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [script, setScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [config, setConfig] = useState({
    emotion: 50,
    sync: 95,
    speed: 100 // 1.0x
  });
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize script area
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [script]);

  const handleGenerate = async () => {
    if (!theme.trim()) return;
    
    setIsGenerating(true);
    if (navigator.vibrate) navigator.vibrate(20);

    try {
      const generatedText = await generateScript(theme, config.emotion);
      setScript(generatedText);
      if (navigator.vibrate) navigator.vibrate([10, 30, 10]);
    } catch (error) {
      setScript("// ERROR: LINK SEVERED. RETRY CONNECTION.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDeploy = () => {
    if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
    alert("DEPLOYING SEQUENCE INITIATED...");
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
       <header>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Cpu className="text-[#03DAC6]" /> 
          Script<span className="text-[#03DAC6]">Core</span>
        </h1>
      </header>

      {/* Input Section */}
      <GlassCard className="relative overflow-visible">
        <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">Broadcast Theme / Topic</label>
        <div className="flex gap-2">
          <input 
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            type="text" 
            placeholder="e.g., Q3 Economic Analysis..." 
            className="flex-1 bg-[#0A0A1F] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#03DAC6] transition-colors"
          />
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !theme}
            className={`p-3 rounded-lg bg-[#03DAC6] text-black hover:bg-[#03DAC6]/90 transition-all ${isGenerating ? 'opacity-50' : ''}`}
          >
            {isGenerating ? <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></div> : <Send size={20} />}
          </button>
        </div>
      </GlassCard>

      {/* Output Section */}
      <div className="flex-1 min-h-[200px] relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-4 overflow-y-auto">
          {script ? (
            <textarea
              ref={textareaRef}
              readOnly
              value={script}
              className="w-full bg-transparent text-[#03DAC6] font-mono-tech text-sm leading-relaxed outline-none resize-none h-full drop-shadow-[0_0_5px_rgba(3,218,198,0.4)]"
            />
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-white/20 font-mono-tech text-xs text-center">
               <div className="w-12 h-12 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite] mb-4"></div>
               > WAITING FOR INPUT STREAM...<br/>
               > AIGC MODEL READY
             </div>
          )}
        </div>
      </div>

      {/* MeshTalk Tuning */}
      <GlassCard title="MeshTalk™ Tuning" className="border-[#03DAC6]/20">
         <div className="space-y-5">
           {/* Emotion Slider */}
           <div>
             <div className="flex justify-between text-xs font-mono-tech mb-2">
               <span className="text-gray-400">EMOTION_GAIN</span>
               <span className="text-[#03DAC6]">{config.emotion}%</span>
             </div>
             <input 
               type="range" 
               min="0" max="100" 
               value={config.emotion}
               onChange={(e) => setConfig({...config, emotion: parseInt(e.target.value)})}
               className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#BB86FC]" 
             />
           </div>

           {/* Sync Slider */}
           <div>
             <div className="flex justify-between text-xs font-mono-tech mb-2">
               <span className="text-gray-400">LIP_SYNC_DELAY</span>
               <span className="text-[#03DAC6]">{config.sync}%</span>
             </div>
             <input 
               type="range" 
               min="0" max="100" 
               value={config.sync}
               onChange={(e) => setConfig({...config, sync: parseInt(e.target.value)})}
               className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#03DAC6]" 
             />
           </div>
         </div>
      </GlassCard>

      <NeonButton fullWidth onClick={handleDeploy} disabled={!script}>
        <Radio className="w-4 h-4 mr-2" />
        DEPLOY TO LIVE STREAM
      </NeonButton>
    </div>
  );
};
