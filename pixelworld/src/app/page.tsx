'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DefinitionAndStats } from '@/components/DefinitionAndStats';
import { PixelWallPreview } from '@/components/PixelWallPreview';
import { StorySection } from '@/components/StorySection';
import { HowItWorks } from '@/components/HowItWorks';
import { IdeaSection } from '@/components/IdeaSection';
import { WhyJoin } from '@/components/WhyJoin';
import { PricingPreview } from '@/components/PricingPreview';
import { FaqSection } from '@/components/FaqSection';
import { EarlyAccessForm } from '@/components/EarlyAccessForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [selectedSquares, setSelectedSquares] = useState<number>(1);

  const handleSelectSquares = (squares: number) => {
    setSelectedSquares(squares);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBEB] text-[#211A3E]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Definition & Live Stats Bar */}
        <DefinitionAndStats />

        {/* 4. Pixel Wall Preview */}
        <PixelWallPreview onSelectSize={handleSelectSquares} />

        {/* 5. The Story (2005 vs 2026) */}
        <StorySection />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. The Idea Behind The Wall */}
        <IdeaSection />

        {/* 8. Why Join? */}
        <WhyJoin />

        {/* 9. Pricing Preview */}
        <PricingPreview onSelectTier={handleSelectSquares} />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. Final CTA & Early Access Form */}
        <EarlyAccessForm selectedSquares={selectedSquares} />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
