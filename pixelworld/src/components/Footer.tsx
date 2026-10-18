'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { LegalModal } from './LegalModal';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#211A3E] text-[#FFFBEB] mt-10">
      
      {/* 6-Color Candy Ribbon Strip */}
      <div className="flex h-[10px] w-full">
        <span className="flex-1 bg-[#FF3D7F]"></span>
        <span className="flex-1 bg-[#FF8A3D]"></span>
        <span className="flex-1 bg-[#FFD23F]"></span>
        <span className="flex-1 bg-[#2EC27E]"></span>
        <span className="flex-1 bg-[#3D9DF6]"></span>
        <span className="flex-1 bg-[#8B5CF6]"></span>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 pb-10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="grid grid-cols-2 gap-0.5 w-[26px] h-[26px]">
                <span className="rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#FF3D7F]"></span>
                <span className="rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#FFD23F]"></span>
                <span className="rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#3D9DF6]"></span>
                <span className="rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#2EC27E]"></span>
              </div>
              <span className="font-['Fredoka'] font-bold text-2xl text-[#FFFBEB]">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#FFFBEB]/80 max-w-sm leading-relaxed">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-['Fredoka'] font-bold text-[15px] text-[#FFD23F] mb-3">
              Project
            </h4>
            <div className="flex flex-col space-y-1.5 text-sm font-semibold text-[#FFFBEB]/85">
              <a href="#wall-preview" className="hover:text-[#FFD23F] transition-colors">The Wall</a>
              <a href="#story" className="hover:text-[#FFD23F] transition-colors">The Story</a>
              <a href="#how-it-works" className="hover:text-[#FFD23F] transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-[#FFD23F] transition-colors">Pricing</a>
              <a href="#early-access" className="hover:text-[#FFD23F] transition-colors">Early Access</a>
            </div>
          </div>

          {/* Community & FAQ */}
          <div>
            <h4 className="font-['Fredoka'] font-bold text-[15px] text-[#FFD23F] mb-3">
              Learn More
            </h4>
            <div className="flex flex-col space-y-1.5 text-sm font-semibold text-[#FFFBEB]/85">
              <a href="#the-idea" className="hover:text-[#FFD23F] transition-colors">The Idea</a>
              <a href="#why-join" className="hover:text-[#FFD23F] transition-colors">Why Join</a>
              <a href="#faq" className="hover:text-[#FFD23F] transition-colors">FAQ</a>
              <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-1 hover:text-[#FFD23F] transition-colors">
                <Mail className="w-3.5 h-3.5" /> Contact Us
              </a>
            </div>
          </div>

          {/* Legal Drafts */}
          <div>
            <h4 className="font-['Fredoka'] font-bold text-[15px] text-[#FFD23F] mb-3">
              Legal Drafts
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-semibold text-[#FFFBEB]/85">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="text-left hover:text-[#FFD23F] transition-colors cursor-pointer"
              >
                Privacy Policy <span className="text-[11px] text-[#FFD23F]/80 block">(Draft — completed before launch)</span>
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="text-left hover:text-[#FFD23F] transition-colors cursor-pointer"
              >
                Terms of Service <span className="text-[11px] text-[#FFD23F]/80 block">(Draft — completed before launch)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Fine Print Note */}
        <div className="pt-6 border-t border-[#FFFBEB]/20 text-xs font-semibold text-[#FFFBEB]/70 leading-relaxed">
          Squares are a fun, community-driven way to leave your mark on the web and support indie internet projects. They are not an investment, not cryptocurrency, and not financial securities. The grid is planned for a minimum guaranteed uptime of 10 years with regular link health checks. {siteConfig.footer.copyright}
        </div>
      </div>

      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </footer>
  );
};
