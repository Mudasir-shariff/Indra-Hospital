"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/site";
import { QrCode, ExternalLink, Copy, Check, Camera, ShieldCheck, Sparkles, Smartphone } from "lucide-react";
import QrCameraScanner from "./QrCameraScanner";

interface QrBookingCardProps {
  variant?: "card" | "compact" | "banner";
  className?: string;
}

export default function QrBookingCard({ variant = "card", className = "" }: QrBookingCardProps) {
  const [copied, setCopied] = useState(false);
  const [showLiveScanner, setShowLiveScanner] = useState(false);

  const bookingUrl = siteData.contact.bookingUrl || "https://u.tatvacare.in/r/gPbtuE";

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (showLiveScanner) {
    return (
      <div className={`p-4 bg-white rounded-3xl border border-line shadow-soft ${className}`}>
        <QrCameraScanner onClose={() => setShowLiveScanner(false)} />
        <div className="mt-3 text-center">
          <button
            onClick={() => setShowLiveScanner(false)}
            className="text-xs font-semibold text-[#0068B0] hover:underline"
          >
            ← Back to Indira Hospital Booking QR
          </button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`p-5 rounded-2xl bg-white border border-line shadow-soft ${className}`}>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-line bg-neutral-50 flex-shrink-0 p-1 group">
            <Image
              src="/images/booking-qr.png"
              alt="Scan QR code to book appointment online at Indira Hospital"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
            {/* Subtle animated scan beam */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#0068B0] to-transparent shadow-[0_0_8px_#0068B0] animate-[scannerLaser_2.5s_easeInOut_infinite] pointer-events-none" />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0068B0] block mb-0.5">
              Online Appointment Portal
            </span>
            <h4 className="text-sm font-bold text-charcoal truncate">
              Scan QR Code to Book Online
            </h4>
            <p className="text-xs text-muted mt-0.5 font-light line-clamp-2">
              Instant appointment confirmation on TatvaCare portal.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0068B0] hover:text-[#075486]"
              >
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted/40">•</span>
              <button
                onClick={() => setShowLiveScanner(true)}
                className="inline-flex items-center gap-1 text-xs text-muted hover:text-charcoal"
              >
                <Camera className="w-3 h-3" />
                <span>Camera Scanner</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-white to-[#F2F8FD] p-6 sm:p-8 border border-[#0068B0]/20 shadow-soft overflow-hidden ${className}`}>
      {/* Decorative background watermark */}
      <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#0068B0]/5 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        
        {/* QR Code Container with Scanner Frame */}
        <div className="relative flex flex-col items-center">
          <div className="relative p-3 rounded-2xl bg-white border-2 border-[#0068B0]/30 shadow-md">
            {/* Viewfinder corner brackets */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#0068B0] rounded-tl" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#0068B0] rounded-tr" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#0068B0] rounded-bl" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#0068B0] rounded-br" />

            {/* QR Code Image */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 overflow-hidden rounded-lg bg-white">
              <Image
                src="/images/booking-qr.png"
                alt="Indira Hospital Online Appointment Booking QR Code"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                priority
              />

              {/* Glowing animated laser scan line */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#0068B0] to-transparent shadow-[0_0_10px_#0068B0] animate-[scannerLaser_2.5s_easeInOut_infinite] pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0068B0] mt-2.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Scan with any camera app</span>
          </div>
        </div>

        {/* Text and Actions */}
        <div className="flex-1 space-y-3.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0068B0]/10 text-[#0068B0] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#0068B0]" />
            Official Booking QR
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal tracking-tight">
            Scan QR Code to Book Online
          </h3>

          <p className="text-sm text-muted leading-relaxed font-light">
            Scan the QR code with your mobile camera or Google Lens to book your OPD consultation instantly. If you are already browsing on your smartphone, tap below to open the booking portal directly.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow group"
            >
              <span>Book Online (TatvaCare)</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-charcoal border border-line text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowLiveScanner(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-[#0068B0] border border-blue-200 text-xs font-semibold transition-colors"
            >
              <Camera className="w-4 h-4" />
              <span>Camera Scanner</span>
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-1 text-[11px] text-muted">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Patient Portal
            </span>
            <span>•</span>
            <span>Zero Booking Fee</span>
          </div>

        </div>

      </div>
    </div>
  );
}
