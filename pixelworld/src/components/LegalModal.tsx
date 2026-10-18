'use client';

import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border-3 border-[#18181B] shadow-[8px_8px_0px_#18181B] p-6 sm:p-8 text-[#18181B] max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 rounded-sm border-2 border-[#18181B] hover:bg-[#F4F4F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
        >
          <X className="w-5 h-5 text-[#18181B]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="retro-sticker bg-[#FFD23F] text-[#18181B] text-xs">
            {isPrivacy ? <ShieldAlert className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
            Pre-Launch Draft Placeholder
          </span>
        </div>

        <h3 id="legal-title" className="text-2xl font-black text-[#18181B] mb-2">
          {title}
        </h3>
        
        <p className="text-xs font-mono text-zinc-500 mb-5">
          Status: In progress • To be finalized before public reservation launch
        </p>

        {/* Content Body */}
        <div className="space-y-4 text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 border-2 border-zinc-200 rounded-xs font-medium">
          {isPrivacy ? (
            <>
              <p>
                <strong>Privacy Policy (Draft Overview):</strong>
              </p>
              <p>
                PixelWorld values your privacy. We will collect only essential information required to reserve and maintain your pixel coordinates (e.g., your display name, contact email for order confirmation, and the URL and artwork you wish to showcase).
              </p>
              <p>
                We do not sell personal data, install tracking cookies for third-party ad networks, or share user details. Full, comprehensive legal terms will be published prior to public square sales.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Terms of Service & Content Guidelines (Draft Overview):</strong>
              </p>
              <p>
                PixelWorld is designed to be an open, positive, and enduring monument for the web. All user-submitted artwork, graphics, and links will undergo human moderation before rendering.
              </p>
              <p>
                Content promoting malware, gambling, adult material, hate speech, scams, or illegal acts is strictly prohibited and will be rejected with full refund upon launch. Complete formal terms will be available prior to reservations opening.
              </p>
            </>
          )}
        </div>

        {/* Action */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn-indie-secondary py-2 px-5 text-sm font-bold"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
