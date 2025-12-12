import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'wechat';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  isLoading = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold py-3 px-6 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wider text-sm";
  
  const variants = {
    primary: "bg-[#03DAC6] text-[#0A0A1F] hover:shadow-[0_0_15px_rgba(3,218,198,0.5)] border border-transparent",
    secondary: "bg-transparent border border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC]/10 hover:shadow-[0_0_10px_rgba(187,134,252,0.3)]",
    danger: "bg-transparent border border-[#CF6679] text-[#CF6679] hover:bg-[#CF6679]/10",
    wechat: "bg-[#07C160] text-white hover:shadow-[0_0_15px_rgba(7,193,96,0.5)] border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          PROCESSING
        </span>
      ) : children}
    </button>
  );
};
