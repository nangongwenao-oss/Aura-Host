import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headerAction?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', title, headerAction }) => {
  return (
    <div className={`glass-panel rounded-2xl p-5 relative overflow-hidden ${className}`}>
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {(title || headerAction) && (
        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
          {title && <h3 className="text-lg font-bold tracking-wide text-gray-100 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#03DAC6] rounded-sm inline-block shadow-[0_0_8px_#03DAC6]"></span>
            {title}
          </h3>}
          {headerAction}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
