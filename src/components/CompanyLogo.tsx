import React from 'react';

interface CompanyLogoMarkProps {
  className?: string;
  size?: number | string;
  variant?: 'solid' | 'transparent' | 'dark';
  rounded?: boolean;
  animated?: boolean;
}

/**
 * Official Engineering Enterprises Geometric Structural Emblem
 * Accurately vectorized with an animated glowing snake-like light pulse moving along the lines
 */
export const CompanyLogoMark: React.FC<CompanyLogoMarkProps> = ({
  className = "w-10 h-10",
  variant = 'solid',
  rounded = true,
  animated = true,
}) => {
  const bgColor = variant === 'transparent' ? 'transparent' : '#24225A';
  const strokeColor = 'rgba(255, 255, 255, 0.9)';

  // Continuous geometric circuit path for the snake light to traverse
  const snakePath1 = "M 50,0 L 26,0 L 0,26 L 50,50 L 0,74 L 26,100 L 50,100 L 74,100 L 100,74 L 50,50 L 100,26 L 74,0 Z";
  const snakePath2 = "M 50,100 L 50,0 L 26,0 L 26,100 L 50,50 L 74,100 L 74,0 L 50,50";

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${rounded ? 'rounded-xl overflow-hidden' : ''} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs select-none"
      >
        <defs>
          {/* Glowing filter for the snake light head */}
          <filter id="logoLightGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Intense neon trail gradient */}
          <linearGradient id="snakeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="snakeGradient2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="75%" stopColor="#93C5FD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Background Box */}
        {variant !== 'transparent' && (
          <rect width="100" height="100" fill={bgColor} />
        )}

        {/* Base Structural Truss Engineering Lines */}
        <g stroke={strokeColor} strokeWidth="2.8" strokeLinecap="square" strokeLinejoin="miter">
          {/* Central Vertical Spine */}
          <line x1="50" y1="0" x2="50" y2="100" strokeWidth="3" />
          
          {/* Left & Right Vertical Columns */}
          <line x1="26" y1="0" x2="26" y2="100" />
          <line x1="74" y1="0" x2="74" y2="100" />

          {/* Left Structural Diagonals */}
          <line x1="0" y1="26" x2="26" y2="0" />
          <line x1="0" y1="26" x2="50" y2="50" />
          <line x1="0" y1="74" x2="50" y2="50" />
          <line x1="0" y1="74" x2="26" y2="100" />

          {/* Right Structural Diagonals */}
          <line x1="100" y1="26" x2="74" y2="0" />
          <line x1="100" y1="26" x2="50" y2="50" />
          <line x1="100" y1="74" x2="50" y2="50" />
          <line x1="100" y1="74" x2="74" y2="100" />
        </g>

        {/* Snake-like Animated Glowing Light Trace */}
        {animated && (
          <>
            {/* Primary Glowing Snake Pulse 1 (Traversing Perimeter & Diagonal Crossings) */}
            <path
              d={snakePath1}
              fill="none"
              stroke="url(#snakeGradient1)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="45 350"
              filter="url(#logoLightGlow)"
              className="opacity-95"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="400"
                to="0"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </path>

            {/* Glowing Dot Head for Snake 1 */}
            <circle r="3.2" fill="#FFFFFF" filter="url(#logoLightGlow)">
              <animateMotion
                path={snakePath1}
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="1.8" fill="#38BDF8">
              <animateMotion
                path={snakePath1}
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Secondary Snake Pulse 2 (Traversing Vertical Spine & Internal Nodes) */}
            <path
              d={snakePath2}
              fill="none"
              stroke="url(#snakeGradient2)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray="35 280"
              filter="url(#logoLightGlow)"
              className="opacity-90"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="315"
                dur="4.4s"
                repeatCount="indefinite"
              />
            </path>

            {/* Glowing Dot Head for Snake 2 */}
            <circle r="2.8" fill="#FFFFFF" filter="url(#logoLightGlow)">
              <animateMotion
                path={snakePath2}
                dur="4.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="1.4" fill="#00F0FF">
              <animateMotion
                path={snakePath2}
                dur="4.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Center Intersection Ambient Energy Pulse */}
            <circle cx="50" cy="50" r="2.5" fill="#38BDF8" filter="url(#logoLightGlow)">
              <animate
                attributeName="r"
                values="1.8;3.6;1.8"
                dur="1.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
};

interface CompanyLogoProps {
  layout?: 'horizontal' | 'stacked' | 'mark-only';
  theme?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  className?: string;
  markSizeClass?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  layout = 'horizontal',
  theme = 'light',
  showSubtitle = true,
  className = '',
  markSizeClass = 'w-11 h-11'
}) => {
  const isDark = theme === 'dark';

  if (layout === 'mark-only') {
    return <CompanyLogoMark className={markSizeClass} />;
  }

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <CompanyLogoMark className={`${markSizeClass} shadow-md`} />
        
        <div className="mt-3 flex flex-col items-center">
          <span className={`text-lg sm:text-xl font-black tracking-wider uppercase font-display leading-tight ${isDark ? 'text-white' : 'text-[#0B1B2B]'}`}>
            ENGINEERING
          </span>
          <span className={`text-lg sm:text-xl font-black tracking-wider uppercase font-display leading-tight ${isDark ? 'text-slate-100' : 'text-[#0B1B2B]'}`}>
            ENTERPRISES
          </span>
          
          {showSubtitle && (
            <div className="mt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1677FF]">
              <span>Veloair Envirotech</span>
              <span className="text-slate-400">•</span>
              <span className="text-[#6B747C]">Est. 1992</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal layout (standard for Navbar & Headers)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <CompanyLogoMark className={`${markSizeClass} shadow-md border border-[#24225A]/20 transition-transform group-hover:scale-105 duration-300`} />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`text-xl sm:text-[22px] font-black tracking-tight font-display ${isDark ? 'text-white' : 'text-[#0B1B2B]'}`}>
            ENGINEERING
          </span>
          <span className={`text-xl sm:text-[22px] font-black tracking-tight font-display transition-colors ${
            isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-[#1677FF] group-hover:text-blue-700'
          }`}>
            ENTERPRISES
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-2 mt-1 leading-none">
            <span className="text-[10px] tracking-widest text-[#1677FF] font-bold uppercase">
              Veloair Envirotech
            </span>
            <span className={isDark ? 'text-slate-600' : 'text-[#D4D9DE]'}>|</span>
            <span className={`text-[10px] font-semibold ${isDark ? 'text-slate-400' : 'text-[#6B747C]'}`}>
              Since 1992
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default CompanyLogo;
