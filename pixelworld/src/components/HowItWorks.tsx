import React from 'react';
import { siteConfig } from '@/config/site';

export const HowItWorks: React.FC = () => {
  const stepColors = [
    { numBg: 'bg-[#FFD23F]', numColor: 'text-[#211A3E]' },
    { numBg: 'bg-[#2EC27E]', numColor: 'text-[#211A3E]' },
    { numBg: 'bg-[#FF3D7F]', numColor: 'text-white' },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 border-b-2 border-[#211A3E] bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="squiggle"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E]">
            How it works
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-2">
            Three simple steps. No hidden complexity or fine print gymnastics.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {siteConfig.howItWorks.steps.map((step, idx) => {
            const color = stepColors[idx];
            return (
              <article
                key={step.number}
                className="card-candy p-8 sm:p-9 relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number block */}
                  <div
                    className={`w-[54px] h-[54px] rounded-[14px] border-2 border-[#211A3E] shadow-[3px_3px_0_#211A3E] flex items-center justify-center font-['Fredoka'] font-bold text-2xl mb-6 ${color.numBg} ${color.numColor}`}
                  >
                    {idx + 1}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-[#211A3E] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#5B5477] font-semibold text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle step indicator tag */}
                <div className="mt-8 pt-4 border-t-2 border-[#FFFBEB] flex items-center justify-between text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#5B5477]">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-[#FF3D7F]">
                    {idx === 0 ? 'Pick Coordinates' : idx === 1 ? 'Color & Link' : 'Yours Forever'}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
