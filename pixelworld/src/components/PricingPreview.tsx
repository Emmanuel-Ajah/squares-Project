'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { Check, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface PricingPreviewProps {
  onSelectTier?: (squares: number) => void;
}

export const PricingPreview: React.FC<PricingPreviewProps> = ({ onSelectTier }) => {
  const handleSelectTier = (squares: number) => {
    if (onSelectTier) {
      onSelectTier(squares);
    }
    const target = document.getElementById('early-access');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 border-b-2 border-[#211A3E] bg-[#FFFBEB]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="squiggle"></div>
          <span className="sticker tilt-l bg-[#FFD23F] text-[#211A3E] text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E] mt-2">
            Your own little piece of the internet.
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-2">
            Proposed launch price of $1 per square. No confusing math or subscription lock-ins.
          </p>
        </div>

        {/* 4 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {siteConfig.pricingPreview.tiers.map((tier) => (
            <article
              key={tier.id}
              className={`card-candy p-7 flex flex-col justify-between bg-white relative ${
                tier.popular ? 'border-[#FF3D7F] !shadow-[6px_6px_0_#211A3E]' : ''
              }`}
            >
              {/* Popular Flag Sticker */}
              {tier.popular && (
                <div className="absolute -top-3.5 right-4">
                  <span className="sticker tilt-r bg-[#FF3D7F] text-white text-xs">
                    Builder Favorite
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-4">
                  <span className="text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#FF3D7F]">
                    {tier.dimensions}
                  </span>
                  <h3 className="text-2xl font-bold text-[#211A3E] mt-0.5">
                    {tier.name}
                  </h3>
                  <p className="text-xs font-bold text-[#5B5477] mt-1">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-[12px] border-2 border-[#211A3E] bg-[#FFF6D6] flex items-baseline gap-2">
                  <span className="text-4xl font-['Fredoka'] font-bold text-[#211A3E] tabular-nums">
                    ${tier.proposedPrice}
                  </span>
                  <span className="text-xs font-['Fredoka'] font-semibold text-[#5B5477]">
                    proposed ({tier.squares} sq)
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#5B5477] mb-5">
                  {tier.suggestedUse}
                </p>

                {/* Feature List */}
                <ul className="space-y-2.5 text-sm font-bold text-[#211A3E] mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2EC27E] stroke-[3] shrink-0 mt-1" />
                      <span className="leading-tight text-[13.5px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier CTA */}
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectTier(tier.squares)}
                  className={`w-full btn-candy !py-3 !text-sm ${
                    tier.popular ? 'btn-candy-pink' : 'btn-candy-white'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* The Perk Ladder Table (Reference Style) */}
        <div className="card-candy bg-white p-6 sm:p-8 mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#211A3E]">
            <h3 className="text-xl font-bold text-[#211A3E]">
              What Unlocks as You Grow
            </h3>
            <span className="text-xs font-['Fredoka'] font-bold text-[#2EC27E] uppercase tracking-wider">
              Cumulative Benefits
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-semibold text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-zinc-200 text-xs font-['Fredoka'] uppercase text-[#5B5477]">
                  <th className="py-2.5 px-3">Spot Size</th>
                  <th className="py-2.5 px-3">Proposed Price</th>
                  <th className="py-2.5 px-3">Features & Artwork Unlocked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dashed divide-zinc-200">
                <tr>
                  <td className="py-3 px-3 font-['Fredoka'] font-bold text-[#FF3D7F]">1 Square</td>
                  <td className="py-3 px-3 font-bold">$1</td>
                  <td className="py-3 px-3 text-[#5B5477]">1 pixel spot forever, custom color, hover card with display name & link</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-['Fredoka'] font-bold text-[#FF8A3D]">4 Squares (2×2)</td>
                  <td className="py-3 px-3 font-bold">$4</td>
                  <td className="py-3 px-3 text-[#5B5477]">Everything above, plus custom tiny pixel icon or avatar, elevated hover card</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-['Fredoka'] font-bold text-[#2EC27E]">16 Squares (4×4)</td>
                  <td className="py-3 px-3 font-bold">$16</td>
                  <td className="py-3 px-3 text-[#5B5477]">Visible graphic logo, brand headline, featured in project directory</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-['Fredoka'] font-bold text-[#3D9DF6]">64 Squares (8×8)</td>
                  <td className="py-3 px-3 font-bold">$64</td>
                  <td className="py-3 px-3 text-[#5B5477]">Prominent landmark banner, priority coordinate selection, launch spotlight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="p-4 sm:p-5 rounded-[16px] bg-white border-2 border-[#211A3E] shadow-[3px_3px_0_#211A3E] flex items-start gap-3.5 text-sm font-semibold text-[#5B5477]">
          <AlertCircle className="w-5 h-5 text-[#FF8A3D] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#211A3E]">Proposed launch price:</strong> {siteConfig.pricingPreview.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
