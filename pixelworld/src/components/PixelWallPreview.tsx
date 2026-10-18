'use client';

import React, { useState, useMemo } from 'react';
import { SAMPLE_TILES, GRID_COLS, GRID_ROWS } from '@/data/sampleTiles';
import { PixelTile } from '@/types';
import { PixelArtwork } from './PixelArtwork';
import { SampleTileModal } from './SampleTileModal';
import { siteConfig } from '@/config/site';
import { Filter, MousePointerClick, Info, Sparkles } from 'lucide-react';

interface PixelWallPreviewProps {
  onSelectSize?: (squares: number) => void;
}

export const PixelWallPreview: React.FC<PixelWallPreviewProps> = ({ onSelectSize }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTile, setActiveTile] = useState<PixelTile | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<{
    x: number;
    y: number;
    label: string;
    owner?: string;
  } | null>(null);

  // Map coordinate strings "x,y" to tiles
  const tileOccupancy = useMemo(() => {
    const map = new Map<string, PixelTile>();
    SAMPLE_TILES.forEach((tile) => {
      for (let dx = 0; dx < tile.width; dx++) {
        for (let dy = 0; dy < tile.height; dy++) {
          map.set(`${tile.x + dx},${tile.y + dy}`, tile);
        }
      }
    });
    return map;
  }, []);

  const filteredTiles = useMemo(() => {
    if (selectedCategory === 'all') return SAMPLE_TILES;
    return SAMPLE_TILES.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All Tiles' },
    { id: 'art', label: 'Pixel Art' },
    { id: 'indie', label: 'Indie Apps' },
    { id: 'tech', label: 'Tools & Code' },
    { id: 'personal', label: 'Personal Spots' },
  ];

  const handleEmptyClick = (x: number, y: number) => {
    setActiveTile({
      id: `empty-${x}-${y}`,
      x,
      y,
      width: 1,
      height: 1,
      title: `Unclaimed Spot [X: ${x * 12}, Y: ${y * 12}]`,
      category: 'available',
      color: '#FFFFFF',
      description: 'This sample coordinate is unreserved. When PixelWorld opens reservations, you can claim this spot to choose your color, upload custom pixel artwork, and add your website link.',
      isAvailable: true,
    });
  };

  return (
    <section id="wall-preview" className="py-16 sm:py-24 border-b-2 border-[#211A3E]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header with Squiggle */}
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <div className="squiggle"></div>
          <span className="sticker tilt-r bg-[#FFD23F] text-[#211A3E] text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E] mt-2">
            Explore the Pixel Wall
          </h2>
          <p className="text-[#5B5477] text-lg font-bold mt-2">
            Click any square to see what a future tile could hold.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-['Fredoka'] font-semibold uppercase tracking-wider text-[#5B5477] mr-1 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-['Fredoka'] font-bold border-2 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#211A3E] text-white border-[#211A3E] shadow-[3px_3px_0_#FFD23F]'
                  : 'bg-white text-[#211A3E] border-[#211A3E] hover:bg-[#FFF6D6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* HUD Bar */}
        <div className="bg-[#211A3E] text-white px-5 py-3 rounded-t-[16px] border-2 border-b-0 border-[#211A3E] flex flex-wrap items-center justify-between gap-3 font-['Fredoka'] text-sm">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2EC27E] animate-pulse"></span>
            <span className="text-zinc-300 font-semibold">GRID STATUS:</span>
            {hoveredInfo ? (
              <span className="text-[#FFD23F] font-bold truncate max-w-[340px] sm:max-w-none">
                [X: {hoveredInfo.x * 12}, Y: {hoveredInfo.y * 12}] • {hoveredInfo.label} {hoveredInfo.owner ? `(${hoveredInfo.owner})` : ''}
              </span>
            ) : (
              <span className="text-zinc-300 flex items-center gap-1.5">
                <MousePointerClick className="w-4 h-4 text-[#FFD23F]" />
                Hover or click any square to inspect coordinates
              </span>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-300 font-mono font-bold">
            <span>PREVIEW MODE: 16×8 SECTION</span>
            <span className="text-[#3D9DF6]">• 1,000,000 AT LAUNCH</span>
          </div>
        </div>

        {/* The Wall Grid Frame */}
        <div className="card-candy !rounded-t-none p-4 sm:p-6 bg-white overflow-x-auto shadow-[8px_8px_0_#211A3E]">
          <div className="min-w-[700px]">
            <div
              className="grid gap-2 p-2 bg-[#FFFBEB] border-2 border-[#211A3E] rounded-[12px] select-none"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${GRID_ROWS}, minmax(46px, 1fr))`,
              }}
            >
              {/* Background Empty Coordinates */}
              {Array.from({ length: GRID_ROWS }).map((_, rowIndex) => {
                const y = rowIndex + 1;
                return Array.from({ length: GRID_COLS }).map((_, colIndex) => {
                  const x = colIndex + 1;
                  const isOccupied = tileOccupancy.has(`${x},${y}`);

                  if (isOccupied) return null;

                  return (
                    <button
                      key={`empty-${x}-${y}`}
                      onClick={() => handleEmptyClick(x, y)}
                      onMouseEnter={() =>
                        setHoveredInfo({
                          x,
                          y,
                          label: 'Available Spot (1×1)',
                        })
                      }
                      onMouseLeave={() => setHoveredInfo(null)}
                      title={`Open Coordinate (${x * 12}, ${y * 12})`}
                      className="group relative border-2 border-dashed border-[#211A3E]/20 hover:border-[#211A3E] hover:bg-white transition-colors flex items-center justify-center rounded-[6px]"
                      style={{
                        gridColumnStart: x,
                        gridRowStart: y,
                        minHeight: '46px',
                      }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 font-['Fredoka'] text-sm text-[#FF3D7F] font-bold">
                        +
                      </span>
                    </button>
                  );
                });
              })}

              {/* Sample Placed Tiles */}
              {filteredTiles.map((tile) => {
                const isMatch = selectedCategory === 'all' || tile.category === selectedCategory;
                if (!isMatch) return null;

                const isMultiSquare = tile.width > 1 || tile.height > 1;

                return (
                  <button
                    key={tile.id}
                    onClick={() => setActiveTile(tile)}
                    onMouseEnter={() =>
                      setHoveredInfo({
                        x: tile.x,
                        y: tile.y,
                        label: `${tile.title} [${tile.width}×${tile.height} block]`,
                        owner: tile.owner,
                      })
                    }
                    onMouseLeave={() => setHoveredInfo(null)}
                    style={{
                      gridColumnStart: tile.x,
                      gridColumnEnd: tile.x + tile.width,
                      gridRowStart: tile.y,
                      gridRowEnd: tile.y + tile.height,
                      backgroundColor: tile.color,
                      color: tile.textColor || '#FFFFFF',
                    }}
                    className="relative group border-2 border-[#211A3E] rounded-[6px] shadow-[2px_2px_0_#211A3E] flex flex-col items-center justify-center p-1.5 cursor-pointer transition-all hover:scale-[1.03] hover:z-20 hover:shadow-[4px_4px_0_#211A3E] focus:outline-none"
                  >
                    {/* Artwork / Icon */}
                    {tile.pixelArt ? (
                      <PixelArtwork
                        type={tile.pixelArt}
                        label={tile.textLabel}
                        className={isMultiSquare ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-5 h-5'}
                      />
                    ) : (
                      <span className="font-['Fredoka'] font-bold text-xs uppercase tracking-wider">
                        {tile.textLabel || tile.title.slice(0, 3)}
                      </span>
                    )}

                    {/* Text Label for multi-square blocks */}
                    {tile.width >= 3 && (
                      <span className="text-[11px] font-['Fredoka'] font-bold tracking-tight truncate max-w-full px-1 mt-0.5 opacity-95">
                        {tile.title}
                      </span>
                    )}

                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity border border-[#211A3E]"></span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#5B5477] font-semibold">
          <p className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3D7F]"></span>
            {siteConfig.caption}
          </p>
          <p className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#211A3E] shadow-[2px_2px_0_#211A3E] text-xs">
            <Info className="w-3.5 h-3.5 text-[#3D9DF6]" />
            <span>Interactive preview only. Official grid opens for reservations at launch.</span>
          </p>
        </div>

      </div>

      {/* Modal */}
      <SampleTileModal
        tile={activeTile}
        onClose={() => setActiveTile(null)}
        onSelectSize={onSelectSize}
      />
    </section>
  );
};
