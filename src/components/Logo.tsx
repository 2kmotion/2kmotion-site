import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = false }) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className="flex items-center group select-none">
      {/* Clean Brand Wordmark */}
      <div className="flex items-center tracking-tight">
        <span className={`font-bold font-['Space_Grotesk'] ${textSize} text-[#005A32]`}>
          2K<span className="text-[#238B45]">MOTION</span>
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#41AB5D] ml-1 animate-pulse" />
      </div>
    </div>
  );
};
