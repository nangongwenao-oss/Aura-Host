import React from 'react';
import { View } from '../types';
import { LayoutDashboard, Mic2, BarChart3, Settings } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  onChangeView: (view: View) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, onChangeView, children }) => {
  const navItems = [
    { view: View.MODEL_CONFIG, label: 'Model', icon: <LayoutDashboard size={20} /> },
    { view: View.SCRIPT_CENTER, label: 'Script', icon: <Mic2 size={20} /> },
    { view: View.PERFORMANCE, label: 'Stats', icon: <BarChart3 size={20} /> },
    { view: View.SETTINGS, label: 'System', icon: <Settings size={20} /> },
  ];

  if (currentView === View.LOGIN) {
    return <div className="min-h-screen w-full relative">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col pb-20 relative bg-[#0A0A1F]">
      {/* Top Status Bar Decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0A0A1F] via-[#BB86FC] to-[#0A0A1F]"></div>
      
      {/* Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 px-6 py-3 flex justify-between items-center z-50 rounded-t-2xl">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => {
              if (navigator.vibrate) navigator.vibrate(10);
              onChangeView(item.view);
            }}
            className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
              currentView === item.view ? 'text-[#03DAC6]' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <div className={`p-1 rounded-full ${currentView === item.view ? 'bg-[#03DAC6]/10 shadow-[0_0_10px_rgba(3,218,198,0.2)]' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-medium tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
