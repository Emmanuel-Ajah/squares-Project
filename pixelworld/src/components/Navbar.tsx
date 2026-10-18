'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFBEB] border-b-2 border-[#211A3E]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px]">
        
        {/* Logo / Brandmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          {/* Reference-style 4-square candy logo mark */}
          <div className="grid grid-cols-2 gap-0.5 w-[26px] h-[26px] shrink-0">
            <span className="w-full h-full rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#FF3D7F]"></span>
            <span className="w-full h-full rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#FFD23F]"></span>
            <span className="w-full h-full rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#3D9DF6]"></span>
            <span className="w-full h-full rounded-[3px] border-[1.5px] border-[#211A3E] bg-[#2EC27E]"></span>
          </div>

          <span className="font-['Fredoka'] font-bold text-xl sm:text-2xl tracking-tight text-[#211A3E] group-hover:text-[#FF3D7F] transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 text-[14.5px] font-bold text-[#211A3E]">
          <a
            href="#wall-preview"
            className="px-3.5 py-1.5 rounded-full border-2 border-transparent hover:border-[#211A3E] hover:bg-white transition-all"
          >
            The Wall
          </a>
          <a
            href="#story"
            className="px-3.5 py-1.5 rounded-full border-2 border-transparent hover:border-[#211A3E] hover:bg-white transition-all"
          >
            The Story
          </a>
          <a
            href="#how-it-works"
            className="px-3.5 py-1.5 rounded-full border-2 border-transparent hover:border-[#211A3E] hover:bg-white transition-all"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="px-3.5 py-1.5 rounded-full border-2 border-transparent hover:border-[#211A3E] hover:bg-white transition-all"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 rounded-full border-2 border-transparent hover:border-[#211A3E] hover:bg-white transition-all"
          >
            FAQ
          </a>

          {/* Nav CTA */}
          <a
            href="#early-access"
            className="ml-3 btn-candy btn-candy-pink !py-2 !px-4 !text-sm !shadow-[3px_3px_0_#211A3E] hover:!shadow-[4px_4px_0_#211A3E]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get Early Access
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[10px] border-2 border-[#211A3E] text-[#211A3E] bg-white shadow-[2px_2px_0_#211A3E] hover:bg-[#FFF6D6] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#211A3E] bg-[#FFFBEB] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1 font-bold text-[#211A3E]">
            <a
              href="#wall-preview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between"
            >
              The Wall <ArrowUpRight className="w-4 h-4 text-[#5B5477]" />
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between"
            >
              The Story <ArrowUpRight className="w-4 h-4 text-[#5B5477]" />
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between"
            >
              How It Works <ArrowUpRight className="w-4 h-4 text-[#5B5477]" />
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between"
            >
              Pricing <ArrowUpRight className="w-4 h-4 text-[#5B5477]" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white flex items-center justify-between"
            >
              FAQ <ArrowUpRight className="w-4 h-4 text-[#5B5477]" />
            </a>
          </div>
          <div className="pt-2">
            <a
              href="#early-access"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-candy btn-candy-pink text-center block"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
