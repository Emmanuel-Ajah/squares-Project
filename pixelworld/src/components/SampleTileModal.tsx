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
  onSelectSize
}) => {
  // Close on Escape key
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white border-3 border-[#18181B] shadow-[8px_8px_0px_#18181B] p-6 sm:p-7 text-[#18181B] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sample preview modal"
          className="absolute top-4 right-4 p-1.5 rounded-sm border-2 border-[#18181B] hover:bg-[#F4F4F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
        >
          <X className="w-5 h-5 text-[#18181B]" />
        </button>

        {/* Modal Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="retro-sticker bg-[#FFD23F] text-[#18181B] text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Sample Tile Preview
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            {tile.category}
          </span>
        </div>

        {/* Tile Visual & Title */}
        <div className="flex items-start gap-4 mb-4 pt-1">
          <div
            className="w-16 h-16 rounded-md border-2 border-[#18181B] flex flex-col items-center justify-center shadow-[3px_3px_0px_#18181B] shrink-0"
            style={{
              backgroundColor: tile.color,
              color: tile.textColor || '#FFFFFF',
            }}
          >
            {tile.pixelArt ? (
              <PixelArtwork type={tile.pixelArt} label={tile.textLabel} className="w-9 h-9" />
            ) : (
              <span className="font-mono font-black text-sm">{tile.textLabel || 'PW'}</span>
            )}
          </div>
          <div>
            <h3 id="modal-title" className="text-xl font-bold text-[#18181B] leading-tight">
              {tile.title}
            </h3>
            {tile.owner && (
              <p className="text-sm font-medium text-zinc-600 mt-0.5">
                Represented by <span className="font-semibold text-[#18181B]">{tile.owner}</span>
              </p>
            )}
          </div>
        </div>

        {/* Grid Meta Information */}
        <div className="grid grid-cols-3 gap-2.5 my-4 p-3 bg-[#FFFDF9] border-2 border-zinc-200 rounded-sm font-mono text-xs">
          <div>
            <span className="text-zinc-500 block mb-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Coordinates
            </span>
            <span className="font-bold text-[#18181B]">
              X:{tile.x * 12}, Y:{tile.y * 12}
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block mb-0.5 flex items-center gap-1">
              <Layers className="w-3 h-3" /> Dimension
            </span>
            <span className="font-bold text-[#18181B]">
              {tile.width}×{tile.height} ({totalSquares} sq)
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block mb-0.5 flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> Proposed
            </span>
            <span className="font-bold text-[#18181B]">
              ${proposedCost}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
            Tile Description
          </h4>
          <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-3 border border-zinc-200 rounded-sm">
            {tile.description}
          </p>
        </div>

        {/* Simulated Website Link */}
        {tile.url && (
          <div className="mb-5 flex items-center justify-between text-xs p-2.5 bg-blue-50/60 border border-blue-200 text-blue-900 rounded-sm">
            <span className="truncate max-w-[260px] font-mono">
              🔗 {tile.url}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-blue-700 shrink-0">
              Sample link <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        )}

        {/* Educational Note */}
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-sm mb-5">
          <strong>What your future tile will have:</strong> When PixelWorld opens reservations, you can pick any available spot, upload your graphic or custom pixel art, choose your colors, and link to your personal page or project.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handleClaimSimilar}
            className="flex-1 py-2.5 px-4 btn-indie-primary text-center text-sm font-bold flex items-center justify-center gap-2"
          >
            Request a {tile.width}×{tile.height} spot
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 btn-indie-secondary text-center text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
