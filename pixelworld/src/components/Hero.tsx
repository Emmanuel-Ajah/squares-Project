'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { ArrowRight, Eye, Sparkles, Check, Grid } from 'lucide-react';

export const Hero: React.FC = () => {
  // Mini grid animated cells state
  const TOTAL_CELLS = 112; // 14 cols x 8 rows
  const initialColors: { [key: number]: string } = {
    4: '#FF3D7F', 9: '#FFD23F', 16: '#3D9DF6', 22: '#2EC27E',
    25: '#FF8A3D', 33: '#8B5CF6', 38: '#FF3D7F', 45: '#2EC27E',
    51: '#FFD23F', 58: '#3D9DF6', 64: '#FF8A3D', 71: '#FF3D7F',
    79: '#2EC27E', 85: '#8B5CF6', 92: '#FFD23F', 99: '#3D9DF6',
    104: '#FF3D7F', 108: '#2EC27E',
  };

  const [activeCell, setActiveCell] = useState<{ index: number; color: string } | null>(null);

  useEffect(() => {
    const palette = ['#FF3D7F', '#FFD23F', '#3D9DF6', '#2EC27E', '#FF8A3D', '#8B5CF6', '#1BC9C9'];
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      const randIdx = (tick * 37 + 13) % TOTAL_CELLS;
      const color = palette[tick % palette.length];
      setActiveCell({ index: randIdx, color });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 border-b-2 border-[#211A3E]">
      
      {/* Decorative floating confetti squares */}
      <span className="confetti-sq w-5 h-5 bg-[#8B5CF6] top-10 left-6 sm:left-12 rotate-12 hidden sm:block"></span>
      <span className="confetti-sq w-4 h-4 bg-[#1BC9C9] bottom-16 left-1/4 -rotate-12 hidden sm:block"></span>
      <span className="confetti-sq w-4 h-4 bg-[#FF8A3D] top-14 right-8 rotate-45 hidden sm:block"></span>
      <span className="confetti-sq w-3 h-3 bg-[#FF3D7F] bottom-12 right-1/3 rotate-12 hidden sm:block"></span>

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Text */}
          <div>
            {/* Kicker badge */}
            <div className="mb-5">
              <span className="sticker tilt-l bg-[#FFD23F] text-[#211A3E]">
                <Grid className="w-3.5 h-3.5" />
                The 2005 legend, rebuilt in public
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211A3E] leading-[1.08] tracking-tight">
              Own a <span className="hl-pink">Piece</span> of the <span className="hl-green">Internet.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-bold text-[#5B5477] mt-5 mb-8 max-w-[520px] leading-relaxed">
              {siteConfig.hero.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <a href="#early-access" className="btn-candy btn-candy-pink btn-candy-lg">
                <span>Claim Your Spot</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#wall-preview" className="btn-candy btn-candy-white btn-candy-lg">
                <Eye className="w-5 h-5" />
                <span>Explore the Wall</span>
              </a>
            </div>

            {/* Social Proof / Trust Line */}
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#5B5477]">
              <span className="w-6 h-6 rounded-full bg-[#2EC27E]/20 text-[#2EC27E] flex items-center justify-center border border-[#2EC27E]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>
                <strong className="text-[#211A3E]">1,000,000 squares</strong> starting at <strong className="text-[#FF3D7F]">$1 each</strong>. Guaranteed 10+ year permanence.
              </span>
            </div>
          </div>

          {/* Right Column: Mini Pixel Grid Preview with Floating Stickers */}
          <div className="relative p-4 sm:p-7">
            
            {/* Floating Stickers */}
            <span className="sticker tilt-l absolute -top-3 -left-2 sm:-left-4 z-20 bg-[#2EC27E] text-[#211A3E] text-xs sm:text-sm">
              $1 = 1 square proposed
            </span>

            <span className="sticker tilt-r absolute -bottom-3 -right-2 sm:-right-4 z-20 bg-[#FF3D7F] text-white text-xs sm:text-sm">
              Every square is forever
            </span>

            <span className="sticker tilt-r absolute top-1/2 -right-4 sm:-right-8 z-20 bg-[#FFD23F] text-[#211A3E] text-xs hidden sm:inline-flex">
              <Sparkles className="w-3 h-3" /> Interactive Mosaic
            </span>

            {/* Mini Grid Canvas */}
            <div className="card-candy p-4 sm:p-5 bg-white relative z-10">
              <div
                className="grid grid-cols-14 gap-1 sm:gap-1.5"
                style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
                aria-label="Sample miniature pixel mosaic"
              >
                {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
                  const staticColor = initialColors[i];
                  const isDynamic = activeCell && activeCell.index === i;
                  const bg = isDynamic ? activeCell.color : (staticColor || '#FFFBEB');
                  const hasColor = staticColor || isDynamic;

                  return (
                    <span
                      key={i}
                      className={`aspect-square rounded-[3px] border-[1.5px] border-[#211A3E] transition-all duration-300 ${
                        hasColor ? 'cell-pop' : ''
                      }`}
                      style={{
                        backgroundColor: bg,
                      }}
                    />
                  );
                })}
              </div>

              {/* Grid Footer Caption */}
              <div className="mt-3 text-center">
                <span className="text-[12px] font-['Fredoka'] font-semibold text-[#5B5477] tracking-wide uppercase">
                  {siteConfig.caption}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
