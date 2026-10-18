import React from 'react';

interface PixelArtworkProps {
  type?: 'heart' | 'rocket' | 'smiley' | 'coffee' | 'gameboy' | 'star' | 'cat' | 'diamond' | 'flower' | 'text';
  label?: string;
  className?: string;
}

export const PixelArtwork: React.FC<PixelArtworkProps> = ({ type, label, className = "w-6 h-6" }) => {
  switch (type) {
    case 'heart':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          {/* Pixelated heart */}
          <rect x="2" y="2" width="4" height="2" />
          <rect x="10" y="2" width="4" height="2" />
          <rect x="1" y="4" width="6" height="4" />
          <rect x="9" y="4" width="6" height="4" />
          <rect x="2" y="8" width="12" height="2" />
          <rect x="4" y="10" width="8" height="2" />
          <rect x="6" y="12" width="4" height="2" />
          <rect x="7" y="14" width="2" height="1" />
        </svg>
      );

    case 'rocket':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="7" y="1" width="2" height="2" />
          <rect x="6" y="3" width="4" height="4" />
          <rect x="5" y="7" width="6" height="4" />
          <rect x="3" y="10" width="2" height="4" />
          <rect x="11" y="10" width="2" height="4" />
          <rect x="6" y="11" width="4" height="2" />
          <rect x="7" y="13" width="2" height="2" fill="#FACC15" />
        </svg>
      );

    case 'coffee':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="3" y="5" width="8" height="8" />
          <rect x="11" y="6" width="3" height="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="1" width="2" height="2" opacity="0.6" />
          <rect x="7" y="2" width="2" height="2" opacity="0.6" />
        </svg>
      );

    case 'smiley':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="4" y="1" width="8" height="1" />
          <rect x="2" y="2" width="12" height="1" />
          <rect x="1" y="3" width="14" height="10" />
          <rect x="2" y="13" width="12" height="1" />
          <rect x="4" y="14" width="8" height="1" />
          <rect x="4" y="5" width="2" height="3" fill="#18181B" />
          <rect x="10" y="5" width="2" height="3" fill="#18181B" />
          <rect x="4" y="10" width="8" height="1" fill="#18181B" />
          <rect x="3" y="9" width="1" height="1" fill="#18181B" />
          <rect x="12" y="9" width="1" height="1" fill="#18181B" />
        </svg>
      );

    case 'star':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="7" y="1" width="2" height="2" />
          <rect x="6" y="3" width="4" height="2" />
          <rect x="1" y="5" width="14" height="2" />
          <rect x="3" y="7" width="10" height="2" />
          <rect x="4" y="9" width="8" height="2" />
          <rect x="3" y="11" width="4" height="3" />
          <rect x="9" y="11" width="4" height="3" />
        </svg>
      );

    case 'diamond':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="6" y="2" width="4" height="2" />
          <rect x="4" y="4" width="8" height="2" />
          <rect x="2" y="6" width="12" height="2" />
          <rect x="4" y="8" width="8" height="2" />
          <rect x="6" y="10" width="4" height="2" />
          <rect x="7" y="12" width="2" height="2" />
        </svg>
      );

    case 'gameboy':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="3" y="1" width="10" height="14" rx="1" />
          <rect x="5" y="3" width="6" height="4" fill="#059669" />
          <rect x="4" y="9" width="3" height="1" fill="#18181B" />
          <rect x="5" y="8" width="1" height="3" fill="#18181B" />
          <rect x="10" y="9" width="1.5" height="1.5" fill="#EF4444" />
        </svg>
      );

    case 'cat':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="3" y="2" width="2" height="3" />
          <rect x="11" y="2" width="2" height="3" />
          <rect x="3" y="5" width="10" height="7" />
          <rect x="5" y="7" width="1.5" height="1.5" fill="#18181B" />
          <rect x="9.5" y="7" width="1.5" height="1.5" fill="#18181B" />
          <rect x="7" y="9" width="2" height="1" fill="#F43F5E" />
          <rect x="5" y="12" width="6" height="2" />
        </svg>
      );

    case 'flower':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <rect x="6" y="2" width="4" height="3" />
          <rect x="2" y="6" width="3" height="4" />
          <rect x="11" y="6" width="3" height="4" />
          <rect x="6" y="10" width="4" height="3" />
          <rect x="6" y="6" width="4" height="4" fill="#FACC15" />
        </svg>
      );

    default:
      if (label) {
        return (
          <span className="font-mono font-black text-[10px] tracking-wider uppercase leading-none">
            {label}
          </span>
        );
      }
      return (
        <rect x="0" y="0" width="16" height="16" fill="currentColor" />
      );
  }
};
