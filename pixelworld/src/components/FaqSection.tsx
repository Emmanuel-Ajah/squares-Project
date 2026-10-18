'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { ChevronDown, Mail } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 border-b-2 border-[#211A3E] bg-[#FFFBEB]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="squiggle"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E]">
            Questions, answered honestly
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-2">
            The stuff people actually ask before reserving a square.
          </p>
        </div>

        {/* FAQ List using clean details/summary styling */}
        <div className="flex flex-col gap-4">
          {siteConfig.faq.map((item, index) => (
            <details
              key={index}
              open={index === 0}
              className="group bg-white border-2 border-[#211A3E] rounded-[16px] shadow-[3px_3px_0_#211A3E] open:shadow-[5px_5px_0_#211A3E] overflow-hidden transition-all duration-200"
            >
              <summary className="list-none flex items-center justify-between gap-4 p-5 sm:px-6 sm:py-5 font-['Fredoka'] font-bold text-lg text-[#211A3E] cursor-pointer hover:bg-[#FFF6D6] transition-colors focus:outline-none">
                <span>{item.question}</span>
                <span className="w-8 h-8 rounded-full border border-[#211A3E] flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-200 bg-white">
                  <ChevronDown className="w-4 h-4 text-[#211A3E]" />
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-[#5B5477] font-semibold text-base leading-relaxed border-t border-[#FFF6D6]">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-base font-bold text-[#5B5477] flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-[#FF3D7F]" />
          <span>
            Need more answers? Email the founder at{' '}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[#211A3E] underline decoration-[#FF3D7F] decoration-2 hover:text-[#FF3D7F]"
            >
              {siteConfig.contactEmail}
            </a>
          </span>
        </div>

      </div>
    </section>
  );
};
