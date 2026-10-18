export interface PixelTile {
  id: string;
  x: number;
  y: number;
  width: number; // in squares
  height: number; // in squares
  title: string;
  category: 'art' | 'indie' | 'tech' | 'personal' | 'available';
  owner?: string;
  url?: string;
  color: string;
  textColor?: string;
  pixelArt?: 'heart' | 'rocket' | 'smiley' | 'coffee' | 'gameboy' | 'star' | 'cat' | 'text' | 'diamond' | 'flower';
  textLabel?: string;
  description: string;
  isAvailable?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  squares: number;
  dimensions: string;
  tagline: string;
  suggestedUse: string;
  features: string[];
  popular?: boolean;
  proposedPrice: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
