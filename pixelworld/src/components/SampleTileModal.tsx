'use client';

import React, { useEffect } from 'react';
import { PixelTile } from '@/types';
import { PixelArtwork } from './PixelArtwork';
import { X, ExternalLink, Sparkles, MapPin, Layers, DollarSign } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface SampleTileModalProps {
  tile: PixelTile | null;
  onClose: () => void;
  onSelectSize?: (squares: number) => void;
}

export const SampleTileModal: React.FC<SampleTileModalProps> = ({
  tile,
  onClose,
  onSelectSize,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!tile) return null;

  const totalSquares = tile.width * tile.height;
  const proposedCost = totalSquares * siteConfig.proposedPricePerSquare;

  const handleClaimSimilar = () => {
    if (onSelectSize) {
      onSelectSize(totalSquares);
    }
    onClose();
    const ctaSection = document.getElementById('early-access');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#211A3E]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white border-2 border-[#211A3E] rounded-[20px] shadow-[8px_8px_0_#211A3E] p-6 sm:p-8 text-[#211A3E] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sample preview modal"
          className="absolute top-4 right-4 p-1.5 rounded-full border border-[#211A3E] bg-[#FFFBEB] hover:bg-[#FFD23F] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5 text-[#211A3E]" />
        </button>

        {/* Modal Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="sticker tilt-l bg-[#FFD23F] text-[#211A3E] text-xs">
            <Sparkles className="w-3.5 h-3.5" /> Sample Tile Inspector
          </span>
          <span className="text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#5B5477]">
            {tile.category}
          </span>
        </div>

        {/* Tile Visual & Title */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-16 h-16 rounded-[12px] border-2 border-[#211A3E] flex flex-col items-center justify-center shadow-[3px_3px_0_#211A3E] shrink-0"
            style={{
              backgroundColor: tile.color,
              color: tile.textColor || '#FFFFFF',
            }}
          >
            {tile.pixelArt ? (
              <PixelArtwork type={tile.pixelArt} label={tile.textLabel} className="w-9 h-9" />
            ) : (
              <span className="font-['Fredoka'] font-bold text-base">{tile.textLabel || 'PW'}</span>
            )}
          </div>
          <div>
            <h3 id="modal-title" className="text-2xl font-bold text-[#211A3E] leading-tight">
              {tile.title}
            </h3>
            {tile.owner && (
              <p className="text-sm font-bold text-[#5B5477] mt-1">
                Represented by <span className="text-[#211A3E]">{tile.owner}</span>
              </p>
            )}
          </div>
        </div>

        {/* Grid Meta Information */}
        <div className="grid grid-cols-3 gap-2.5 my-4 p-3.5 bg-[#FFFBEB] border-2 border-[#211A3E] rounded-[12px] font-['Fredoka'] text-xs">
          <div>
            <span className="text-[#5B5477] block mb-0.5 flex items-center gap-1 font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#FF3D7F]" /> Coordinates
            </span>
            <span className="font-bold text-sm text-[#211A3E]">
              X:{tile.x * 12}, Y:{tile.y * 12}
            </span>
          </div>
          <div>
            <span className="text-[#5B5477] block mb-0.5 flex items-center gap-1 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#3D9DF6]" /> Dimensions
            </span>
            <span className="font-bold text-sm text-[#211A3E]">
              {tile.width}×{tile.height} ({totalSquares} sq)
            </span>
          </div>
          <div>
            <span className="text-[#5B5477] block mb-0.5 flex items-center gap-1 font-bold">
              <DollarSign className="w-3.5 h-3.5 text-[#2EC27E]" /> Proposed
            </span>
            <span className="font-bold text-sm text-[#211A3E]">
              ${proposedCost}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h4 className="text-xs font-['Fredoka'] uppercase tracking-wider text-[#5B5477] mb-1">
            Tile Description
          </h4>
          <p className="text-sm font-semibold text-[#211A3E] leading-relaxed bg-[#FFF6D6] p-3.5 border-2 border-[#211A3E] rounded-[12px]">
            {tile.description}
          </p>
        </div>

        {/* Simulated Website Link */}
        {tile.url && (
          <div className="mb-5 flex items-center justify-between text-xs p-3 bg-[#E1F0FF] border-2 border-[#211A3E] rounded-[12px] text-[#211A3E] font-bold">
            <span className="truncate max-w-[220px]">
              🔗 {tile.url}
            </span>
            <span className="inline-flex items-center gap-1 text-[#3D9DF6] shrink-0 font-['Fredoka']">
              Sample link <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        )}

        {/* Educational Note */}
        <div className="p-3 bg-[#DCF7EA] border-2 border-[#211A3E] rounded-[12px] text-xs font-semibold text-[#211A3E] mb-6">
          <strong>What your square gets:</strong> Your permanent coordinates, custom graphic or pixel sprite, and verified destination URL.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClaimSimilar}
            className="flex-1 btn-candy btn-candy-pink !py-2.5 !text-sm"
          >
            I want a {tile.width}×{tile.height} spot
          </button>
          <button
            onClick={onClose}
            className="btn-candy btn-candy-white !py-2.5 !text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
