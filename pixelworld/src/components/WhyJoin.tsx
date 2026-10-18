import React from 'react';
import { siteConfig } from '@/config/site';
import { Square, Sparkles, Users, Globe, Check } from 'lucide-react';

export const WhyJoin: React.FC = () => {
  const featureStyles = [
    {
      icon: <Square className="w-6 h-6 text-[#211A3E]" />,
      bg: 'bg-[#FFF6D6]',
      border: 'border-[#211A3E]',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF3D7F]" />,
      bg: 'bg-[#FFE4EE]',
      border: 'border-[#211A3E]',
    },
    {
      icon: <Users className="w-6 h-6 text-[#3D9DF6]" />,
      bg: 'bg-[#E1F0FF]',
      border: 'border-[#211A3E]',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#2EC27E]" />,
      bg: 'bg-[#DCF7EA]',
      border: 'border-[#211A3E]',
    },
  ];

  return (
    <section id="why-join" className="py-16 sm:py-24 border-b-2 border-[#211A3E] bg-[#FFFBEB]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="squiggle"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E]">
            {siteConfig.whyJoin.title}
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-2">
            {siteConfig.whyJoin.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyJoin.features.map((feature, idx) => {
            const style = featureStyles[idx];
            return (
              <article
                key={feature.title}
                className="card-candy p-7 flex flex-col justify-between bg-white relative"
              >
                <div>
                  {/* Icon Block */}
                  <div
                    className={`w-12 h-12 rounded-[12px] border-2 ${style.border} ${style.bg} shadow-[3px_3px_0_#211A3E] flex items-center justify-center mb-5`}
                  >
                    {style.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#211A3E] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#5B5477] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-['Fredoka'] font-bold text-[#2EC27E]">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Guaranteed coordinate</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
