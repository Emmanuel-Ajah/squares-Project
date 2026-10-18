import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 border-b-2 border-[#211A3E]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="squiggle"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E]">
            The internet did this once. It never forgot.
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-3">
            A two-decade legend, and you are invited to the sequel.
          </p>
        </div>

        {/* 2 Comparison Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel 2005 */}
          <article className="card-candy p-8 sm:p-9 relative bg-white">
            <span className="sticker tilt-l absolute -top-3.5 right-6 bg-[#3D9DF6] text-white text-xs">
              The Original
            </span>
            <span className="inline-block font-['Fredoka'] font-bold text-2xl px-4 py-1 rounded-[10px] border-2 border-[#211A3E] bg-[#E1F0FF] shadow-[2px_2px_0_#211A3E] mb-5">
              2005
            </span>
            <h3 className="text-2xl font-bold text-[#211A3E] mb-3">
              A broke student sells a million pixels
            </h3>
            <p className="text-[#5B5477] font-semibold text-base mb-3 leading-relaxed">
              University tuition was due. The idea seemed ridiculous: one web page, one million pixels, one US dollar each.{' '}
              <strong className="text-[#211A3E]">The internet laughed, then bought every single square.</strong>
            </p>
            <p className="text-[#5B5477] font-semibold text-base mb-3 leading-relaxed">
              The page sold out in 138 days. The degree got paid off. It became an internet folklore story passed down by indie creators ever since.
            </p>
            <p className="text-[#5B5477] font-semibold text-base leading-relaxed">
              Over the last 20 years, many of the old links rotted and the web moved to algorithmic feeds.
            </p>
          </article>

          {/* Panel 2026 */}
          <article className="card-candy p-8 sm:p-9 relative bg-white">
            <span className="sticker tilt-r absolute -top-3.5 right-6 bg-[#FF3D7F] text-white text-xs">
              The Revival
            </span>
            <span className="inline-block font-['Fredoka'] font-bold text-2xl px-4 py-1 rounded-[10px] border-2 border-[#211A3E] bg-[#FFE4EE] shadow-[2px_2px_0_#211A3E] mb-5">
              2026
            </span>
            <h3 className="text-2xl font-bold text-[#211A3E] mb-3">
              PixelWorld rebuilds it for modern builders
            </h3>
            <p className="text-[#5B5477] font-semibold text-base mb-3 leading-relaxed">
              <strong className="text-[#211A3E]">PixelWorld brings back the classic magic with modern craft.</strong> Same million squares. Same honest one dollar proposed price. But built for responsive screens and accessible devices.
            </p>
            <p className="text-[#5B5477] font-semibold text-base mb-3 leading-relaxed">
              Every square gets a permanent place on the web, with regular link health checks so your coordinates never rot. Multi-square blocks support crisp pixel art and custom logos.
            </p>
            <p className="text-[#5B5477] font-semibold text-base leading-relaxed">
              You are not just buying pixels. You are carving out an enduring coordinate in web history.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
};
