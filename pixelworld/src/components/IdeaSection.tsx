import React from 'react';
import { siteConfig } from '@/config/site';
import { ShieldCheck, Heart, Clock, ExternalLink } from 'lucide-react';

export const IdeaSection: React.FC = () => {
  return (
    <section id="the-idea" className="py-16 sm:py-24 border-b-2 border-[#211A3E] bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="squiggle"></div>
          <span className="sticker tilt-l bg-[#FF3D7F] text-white text-xs mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" /> The Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E] mt-2">
            {siteConfig.theIdea.heading}
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-3">
            Built as an open, collective landmark for people who love the web.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="card-candy p-8 sm:p-12 bg-[#FFFBEB] relative overflow-hidden mb-12">
          <div className="space-y-5 text-base sm:text-lg text-[#5B5477] font-semibold leading-relaxed max-w-3xl">
            {siteConfig.theIdea.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 3 Trust Pillars (The Grid that does not rot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="card-candy p-7 bg-white">
            <div className="w-12 h-12 rounded-[14px] border-2 border-[#211A3E] bg-[#DCF7EA] shadow-[3px_3px_0_#211A3E] flex items-center justify-center mb-5 text-[#2EC27E]">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#211A3E] mb-2">
              Moderated Before Render
            </h3>
            <p className="text-sm font-semibold text-[#5B5477] leading-relaxed">
              Every submitted image, logo, and link is reviewed by humans. No gambling, malware, or spam. Safe for every visitor.
            </p>
          </div>

          <div className="card-candy p-7 bg-white">
            <div className="w-12 h-12 rounded-[14px] border-2 border-[#211A3E] bg-[#E1F0FF] shadow-[3px_3px_0_#211A3E] flex items-center justify-center mb-5 text-[#3D9DF6]">
              <ExternalLink className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#211A3E] mb-2">
              Quarterly Health Checks
            </h3>
            <p className="text-sm font-semibold text-[#5B5477] leading-relaxed">
              Link rot ruined 40% of the old 2005 grid. We run regular health checks and notify owners if a URL ever changes.
            </p>
          </div>

          <div className="card-candy p-7 bg-white">
            <div className="w-12 h-12 rounded-[14px] border-2 border-[#211A3E] bg-[#FFE4EE] shadow-[3px_3px_0_#211A3E] flex items-center justify-center mb-5 text-[#FF3D7F]">
              <Clock className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#211A3E] mb-2">
              10-Year Guaranteed Uptime
            </h3>
            <p className="text-sm font-semibold text-[#5B5477] leading-relaxed">
              The grid is built to endure for at least a full decade in writing. A permanent timestamp for you and your creations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
