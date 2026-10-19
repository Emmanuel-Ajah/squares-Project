'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Send, AlertCircle, Info, RefreshCw, Sparkles } from 'lucide-react';

interface EarlyAccessFormProps {
  selectedSquares?: number;
}

export const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({ selectedSquares = 1 }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [squares, setSquares] = useState(selectedSquares);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    squares: number;
    note?: string;
  } | null>(null);

  React.useEffect(() => {
    if (selectedSquares) {
      setSquares(selectedSquares);
    }
  }, [selectedSquares]);

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) {
      errs.name = 'Please provide your name or handle.';
    }
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedData({
      name: name.trim(),
      email: email.trim(),
      squares,
      note: note.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <section id="early-access" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[880px] mx-auto">
        
        {/* The Iconic Yellow Final Banner with Confetti */}
        <div className="relative overflow-hidden bg-[#FFD23F] border-2 border-[#211A3E] rounded-[24px] shadow-[8px_8px_0_#211A3E] p-8 sm:p-14">
          
          {/* Decorative Floating Squares */}
          <span className="confetti-sq w-7 h-7 bg-[#FF3D7F] top-6 left-6 rotate-12 hidden sm:block"></span>
          <span className="confetti-sq w-5 h-5 bg-[#3D9DF6] bottom-8 left-10 -rotate-12 hidden sm:block"></span>
          <span className="confetti-sq w-6 h-6 bg-[#2EC27E] top-8 right-10 rotate-45 hidden sm:block"></span>
          <span className="confetti-sq w-5 h-5 bg-[#8B5CF6] bottom-7 right-14 -rotate-12 hidden sm:block"></span>

          {/* Banner Heading */}
          <div className="text-center max-w-[620px] mx-auto mb-8 relative z-10">
            <span className="sticker tilt-l bg-white text-[#211A3E] text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF3D7F]" /> Early Access List
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A3E] leading-tight">
              {siteConfig.finalCta.headline}
            </h2>
            <p className="text-lg font-bold text-[#211A3E]/85 mt-3">
              {siteConfig.finalCta.supportingText}
            </p>
          </div>

          {/* Upfront Honest Notice */}
          <div className="mb-6 p-4 rounded-[14px] bg-white border-2 border-[#211A3E] shadow-[3px_3px_0_#211A3E] flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#5B5477] relative z-10">
            <AlertCircle className="w-4 h-4 text-[#FF3D7F] shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>Preview Status:</strong> Submissions on this initial version are tested in local state. No live mailing database is connected yet.
            </p>
          </div>

          {submittedData ? (
            /* Honest Inspection Feedback */
            <div className="p-6 bg-white border-2 border-[#211A3E] rounded-[16px] shadow-[4px_4px_0_#211A3E] space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="sticker bg-[#2EC27E] text-[#211A3E] text-xs">
                  Validation Successful (Demo Mode)
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-['Fredoka'] font-bold text-[#5B5477] hover:text-[#211A3E] flex items-center gap-1 underline"
                >
                  <RefreshCw className="w-3 h-3" /> Edit Response
                </button>
              </div>

              <div className="p-4 bg-[#FFFBEB] border-2 border-[#211A3E] rounded-[12px] font-mono text-xs space-y-2 text-[#211A3E]">
                <div><span className="text-[#5B5477]">Name:</span> <strong>{submittedData.name}</strong></div>
                <div><span className="text-[#5B5477]">Email:</span> <strong>{submittedData.email}</strong></div>
                <div><span className="text-[#5B5477]">Desired Spots:</span> <strong>{submittedData.squares} square(s) (~${submittedData.squares * siteConfig.proposedPricePerSquare} proposed)</strong></div>
                {submittedData.note && (
                  <div><span className="text-[#5B5477]">Project / Link:</span> <span>{submittedData.note}</span></div>
                )}
              </div>

              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-[10px] text-xs text-[#5B5477] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#3D9DF6] shrink-0 mt-0.5" />
                <p>
                  Your details validated cleanly! No marketing emails will be dispatched until a production provider (such as Loops or Resend) is configured.
                </p>
              </div>
            </div>
          ) : (
            /* Clean Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="user-name" className="block text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#211A3E] mb-1">
                    Your Name or Handle *
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-[#211A3E] bg-white text-[#211A3E] font-bold text-sm focus:outline-none shadow-[2px_2px_0_#211A3E]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-bold text-[#FF3D7F]">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="user-email" className="block text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#211A3E] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-[#211A3E] bg-white text-[#211A3E] font-bold text-sm focus:outline-none shadow-[2px_2px_0_#211A3E]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-bold text-[#FF3D7F]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Spot Size */}
              <div>
                <label htmlFor="user-squares" className="block text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#211A3E] mb-1">
                  Desired Spot Size
                </label>
                <select
                  id="user-squares"
                  value={squares}
                  onChange={(e) => setSquares(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-[12px] border-2 border-[#211A3E] bg-white text-[#211A3E] font-bold text-sm focus:outline-none shadow-[2px_2px_0_#211A3E]"
                >
                  <option value={1}>1 Square (1×1) — proposed $1</option>
                  <option value={4}>Micro Tile (2×2, 4 squares) — proposed $4</option>
                  <option value={16}>Community Block (4×4, 16 squares) — proposed $16</option>
                  <option value={64}>Landmark Block (8×8, 64 squares) — proposed $64</option>
                  {![1, 4, 16, 64].includes(squares) && (
                    <option value={squares}>
                      Custom Block ({squares} squares) — proposed ${squares * siteConfig.proposedPricePerSquare}
                    </option>
                  )}
                </select>
              </div>

              {/* Note */}
              <div>
                <label htmlFor="user-note" className="block text-xs font-['Fredoka'] font-bold uppercase tracking-wider text-[#211A3E] mb-1">
                  What will you feature on your square? (Optional)
                </label>
                <textarea
                  id="user-note"
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share a link or short description of your project..."
                  className="w-full px-4 py-2.5 rounded-[12px] border-2 border-[#211A3E] bg-white text-[#211A3E] font-bold text-sm focus:outline-none shadow-[2px_2px_0_#211A3E]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-candy btn-candy-pink btn-candy-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{siteConfig.finalCta.buttonText}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
