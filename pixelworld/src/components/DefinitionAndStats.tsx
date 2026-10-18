import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

export const DefinitionAndStats: React.FC = () => {
  return (
    <div className="border-b-2 border-[#211A3E]">
      
      {/* What Is This Definition Card */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-[960px] mx-auto" aria-label="What is PixelWorld">
        <div className="card-candy p-6 sm:p-8 relative">
          <span className="sticker tilt-l absolute -top-4 left-6 bg-[#3D9DF6] text-white text-xs sm:text-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            What is this?
          </span>
          <p className="text-base sm:text-[17px] font-bold text-[#5B5477] leading-relaxed pt-2">
            <strong className="text-[#211A3E]">PixelWorld is an upcoming 2026 project featuring a 1,000 by 1,000 grid of one million squares for one dollar each.</strong>{' '}
            Each square keeps its owner's chosen color, display name, and link on the public canvas for a minimum of 10 years. Multi-square blocks unlock custom pixel artwork or logo images, reviewed by humans before rendering. Inspired by the classic 2005 Million Dollar Homepage, rebuilt with modern web standards and indie heart.
          </p>
        </div>
      </section>

      {/* Live Stats / Proposed Numbers Bar */}
      <section className="bg-white border-t-2 border-[#211A3E] py-8 px-4 sm:px-6" aria-label="Project Launch Facts">
        <div className="max-w-[1120px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="space-y-1">
            <b className="block font-['Fredoka'] text-3xl sm:text-4xl text-[#FF3D7F] tabular-nums font-bold">
              $1.00
            </b>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#5B5477]">
              Proposed Launch Price
            </span>
          </div>

          <div className="space-y-1">
            <b className="block font-['Fredoka'] text-3xl sm:text-4xl text-[#2EC27E] tabular-nums font-bold">
              1,000,000
            </b>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#5B5477]">
              Total Square Spots
            </span>
          </div>

          <div className="space-y-1">
            <b className="block font-['Fredoka'] text-3xl sm:text-4xl text-[#3D9DF6] tabular-nums font-bold">
              1,000 × 1,000
            </b>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#5B5477]">
              Grid Dimensions
            </span>
          </div>

          <div className="space-y-1">
            <b className="block font-['Fredoka'] text-3xl sm:text-4xl text-[#8B5CF6] tabular-nums font-bold">
              10+ Years
            </b>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#5B5477]">
              Guaranteed Permanence
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
