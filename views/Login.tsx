import React, { useState } from 'react';
import { NeonButton } from '../components/NeonButton';
import { Lock, User, Radio } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('luoyuan881105');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (navigator.vibrate) navigator.vibrate(10);

    // Simulate API delay
    setTimeout(() => {
      if (username === 'luoyuan881105' && password === '123456') {
        if (navigator.vibrate) navigator.vibrate([20, 50, 20]);
        onLoginSuccess();
      } else {
        setError('Authorization Failed: Invalid Credentials');
        if (navigator.vibrate) navigator.vibrate([50, 50]);
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 relative overflow-hidden bg-[#0A0A1F]">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_0%,#BB86FC_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_5s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 w-full max-w-xs">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-full bg-[#03DAC6]/10 border border-[#03DAC6] flex items-center justify-center shadow-[0_0_20px_rgba(3,218,198,0.4)] mb-4 animate-bounce-slow">
            <Radio size={32} className="text-[#03DAC6]" />
          </div>
          <h1 className="text-3xl font-bold tracking-[0.2em] text-white">AURA<span className="text-[#03DAC6]">HOST</span></h1>
          <p className="text-xs text-gray-500 font-mono-tech mt-2 tracking-widest">DIGITAL ANCHOR CONSOLE</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#03DAC6] transition-colors">
                <User size={18} />
              </div>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#03DAC6] focus:bg-white/10 transition-all text-sm font-mono"
                placeholder="OPERATOR ID"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#03DAC6] transition-colors">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#03DAC6] focus:bg-white/10 transition-all text-sm font-mono"
                placeholder="ACCESS KEY"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-[#CF6679]/10 border border-[#CF6679]/30 rounded text-[#CF6679] text-xs text-center font-mono">
              > ERROR: {error}
            </div>
          )}

          <NeonButton type="submit" fullWidth isLoading={isLoading}>
            INITIALIZE UPLINK
          </NeonButton>
        </form>

        <div className="mt-12 text-center">
           <p className="text-[10px] text-gray-600 font-mono-tech">
             SECURE CONNECTION v4.2.1<br/>
             COPYRIGHT © 2025 AURA CORP
           </p>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .animate-bounce-slow {
           animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};
