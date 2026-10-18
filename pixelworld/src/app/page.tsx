'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PixelWallPreview } from '@/components/PixelWallPreview';
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
    <div className="flex flex-col min-h-screen bg-[#FFFDF9] text-[#18181B]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Pixel Wall Preview */}
        <PixelWallPreview onSelectSize={handleSelectSquares} />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. The Idea Behind The Wall */}
        <IdeaSection />

        {/* 6. Why Join? */}
        <WhyJoin />

        {/* 7. Pricing Preview */}
        <PricingPreview onSelectTier={handleSelectSquares} />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Final CTA & Early Access Form */}
        <EarlyAccessForm selectedSquares={selectedSquares} />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
