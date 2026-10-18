import { FaqItem, PricingTier } from '@/types';

export const siteConfig = {
  name: "PixelWorld",
  tagline: "Own a Piece of the Internet.",
  subtitle: "One giant digital wall. A million little squares. Your chance to leave your mark on the internet.",
  caption: "A little piece of the internet could be yours.",
  contactEmail: "hello@pixelworld.xyz",
  proposedPricePerSquare: 1, // in USD
  totalSquares: 1000000,
  gridDimensions: "1,000 × 1,000",
  
  navigation: [
    { label: "The Wall", href: "#wall-preview" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "The Idea", href: "#the-idea" },
    { label: "Why Join", href: "#why-join" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "Coming Soon • 2026 Indie Digital Landmark",
    headline: "Own a Piece of the Internet.",
    supportingText: "One giant digital wall. A million little squares. Your chance to leave your mark on the internet.",
    primaryCta: "Claim Your Spot",
    secondaryCta: "Explore the Wall",
    caption: "A little piece of the internet could be yours.",
    notice: "Sample preview canvas below. No live squares have been sold yet."
  },

  howItWorks: {
    kicker: "Simple & Transparent",
    title: "How it works",
    subtitle: "Three clear steps to claim your square and leave your mark.",
    steps: [
      {
        number: "01",
        title: "Find Your Spot",
        description: "Choose a single square or a larger block on the digital wall. Pick the coordinates that mean something to you.",
        icon: "compass"
      },
      {
        number: "02",
        title: "Make It Yours",
        description: "Add your name, choose a color, and eventually personalize your spot with an image, artwork, and a clickable link.",
        icon: "palette"
      },
      {
        number: "03",
        title: "Share Your Place on the Internet",
        description: "Share your unique spot with friends, customers, or your community. Your coordinates belong to you.",
        icon: "share"
      }
    ]
  },

  theIdea: {
    heading: "The Internet Is Made of People. Now It Has a Wall.",
    badge: "The Vision",
    paragraphs: [
      "The early internet was chaotic, colorful, and built by curious people who wanted to claim their own little corner of cyberspace. Today, much of the web lives inside closed algorithms and endless feeds that disappear in seconds.",
      "PixelWorld is a shared digital canvas where creators, builders, businesses, artists, and communities can claim a small, permanent space and become part of a growing online landmark.",
      "Whether you are showcasing a project you spent months building, celebrating a friend, planting a digital flag for your startup, or just having fun, your square is a physical coordinate in digital history."
    ]
  },

  whyJoin: {
    kicker: "Why Participate",
    title: "Why join the wall?",
    subtitle: "Built as an open, lighthearted indie monument for everyone who loves the web.",
    features: [
      {
        title: "A Place of Your Own",
        description: "Claim a small piece of a shared digital space with your chosen color, name, and visual identity.",
        icon: "square"
      },
      {
        title: "Show What You Create",
        description: "Represent your project, business, art, portfolio, podcast, or personal identity to a global audience.",
        icon: "sparkles"
      },
      {
        title: "Be Part of Something Bigger",
        description: "Join a growing global mosaic of builders, creators, and web enthusiasts from all around the world.",
        icon: "users"
      },
      {
        title: "Easy to Share",
        description: "Give your spot its own shareable destination link and coordinates when that feature is implemented.",
        icon: "globe"
      }
    ]
  },

  pricingPreview: {
    kicker: "Transparent Economics",
    title: "Your own little piece of the internet.",
    subtitle: "Designed around affordable individual squares and larger blocks for teams and creators.",
    basePriceNote: "Proposed launch price — subject to confirmation.",
    disclaimer: "Pricing and checkout are not yet finalized. No payment is required or accepted today. Join early access to get notified first when spots open.",
    tiers: [
      {
        id: "single",
        name: "Single Square",
        squares: 1,
        dimensions: "1 × 1 square",
        tagline: "The timeless classic",
        suggestedUse: "Ideal for individuals, indie makers, or a personal digital signature.",
        proposedPrice: 1,
        features: [
          "1 permanent pixel coordinate",
          "Custom background color",
          "Display name on hover",
          "Clickable link to your site or social",
          "Shareable coordinate badge"
        ]
      },
      {
        id: "micro-tile",
        name: "Micro Tile",
        squares: 4,
        dimensions: "2 × 2 block (4 squares)",
        tagline: "High visibility & mini icon",
        suggestedUse: "Great for indie products, newsletters, small avatars, or clean pixel icons.",
        proposedPrice: 4,
        popular: true,
        features: [
          "4 combined square blocks",
          "Upload tiny pixel art or avatar",
          "Custom color or pattern",
          "Dedicated hover card preview",
          "Searchable in project directory"
        ]
      },
      {
        id: "community-block",
        name: "Community Block",
        squares: 16,
        dimensions: "4 × 4 block (16 squares)",
        tagline: "Unmissable graphic banner",
        suggestedUse: "Perfect for startups, open-source projects, and digital creators.",
        proposedPrice: 16,
        features: [
          "16 combined square area",
          "High-res logo or custom artwork",
          "Expanded hover card description",
          "Featured in launch directory",
          "Verified badge placeholder"
        ]
      },
      {
        id: "landmark-banner",
        name: "Landmark Block",
        squares: 64,
        dimensions: "8 × 8 block (64 squares)",
        tagline: "Major landmark placement",
        suggestedUse: "For companies, community sponsors, and landmark contributors.",
        proposedPrice: 64,
        features: [
          "64 connected square footprint",
          "Full custom banner or artwork",
          "Priority position choices",
          "Special mention in launch announcements",
          "Direct link & custom tooltip"
        ]
      }
    ] as PricingTier[]
  },

  faq: [
    {
      question: "What is PixelWorld?",
      answer: "PixelWorld is a modern digital pixel-wall project inspired by the classic early-internet Million Dollar Homepage. It will be a giant 1,000 × 1,000 grid of one million squares where people, creators, and businesses can claim spots to share art, links, and stories."
    },
    {
      question: "What does owning a square mean?",
      answer: "Owning a square gives you permanent placement on the public pixel wall. When live, you will be able to set your square's color, upload an image or pixel icon (for multi-square blocks), and attach your name, description, and link so visitors can click through to your project."
    },
    {
      question: "Who can participate?",
      answer: "Anyone! Whether you're an indie developer, an artist, a small business owner, a hobbyist, or just someone who wants to leave a small digital footprint, the wall is open to all who agree to community guidelines."
    },
    {
      question: "Can I feature my business or project?",
      answer: "Yes, absolutely. Business logos, product links, newsletters, portfolios, and community links are all welcome. All submitted links and graphics will undergo a human review to keep the wall safe, free from spam, and fun for all visitors."
    },
    {
      question: "How much will a square cost?",
      answer: "The proposed starting price is $1 per square (Proposed launch price — subject to confirmation). Larger blocks like 2×2 (4 squares) or 4×4 (16 squares) scale proportionally so anyone can participate at an affordable price."
    },
    {
      question: "When will the wall launch?",
      answer: "PixelWorld is currently in active pre-launch development. We are building the interactive grid engine, community guidelines, and reservation system. By joining the early access list, you will receive the exact launch date and have first pick of prime coordinates before the public opening."
    }
  ] as FaqItem[],

  finalCta: {
    headline: "The Internet Is Big Enough for Everyone. Make Your Mark.",
    supportingText: "Be part of the wall from the beginning. Join the early access list to get notified the second grid reservations open.",
    buttonText: "Join the Early Access List",
    notice: "Notice: Early access signups are currently in preview mode. No live email provider or payment processor is attached yet."
  },

  footer: {
    description: "A collaborative 1,000,000 square digital monument for the open web. An independent indie internet project.",
    copyright: "© 2026 PixelWorld. All rights reserved.",
    contactNotice: "Have questions or partnership ideas? Email us at "
  }
};
