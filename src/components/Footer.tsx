import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-line text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Story */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-line bg-white flex-shrink-0">
                <Image
                  src="/brand/indira-logo.jpg"
                  alt="Indira Hospital"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-tight text-charcoal leading-none">
                  <span className="text-[#C03A21]">INDIRA</span>{" "}
                  <span className="text-[#0068B0]">HOSPITAL</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-muted font-medium mt-1">
                  Super Speciality Ortho & Urology
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
              Premier 30-bed superspeciality hospital in Chintamani, Karnataka. Providing advanced surgical care in joint replacement, complex fracture trauma, and minimally invasive laser urology since 1998.
            </p>

            <div className="pt-2 text-xs text-muted space-y-1">
              <p>• <strong>Emergency 24/7:</strong> {siteData.contact.emergency}</p>
              <p>• <strong>Reception:</strong> {siteData.contact.phone}</p>
            </div>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-pink-50 hover:text-[#E1306C] text-charcoal/80 flex items-center justify-center transition-all border border-line hover:border-pink-200"
                aria-label="Follow Indira Hospital on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-blue-50 hover:text-[#1877F2] text-charcoal/80 flex items-center justify-center transition-all border border-line hover:border-blue-200"
                aria-label="Follow Indira Hospital on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-red-50 hover:text-[#EA4335] text-charcoal/80 flex items-center justify-center transition-all border border-line hover:border-red-200"
                aria-label="Email Indira Hospital"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Explore Hospital
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-[#0068B0] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0068B0] transition-colors">About Indira Hospital</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-[#0068B0] transition-colors">Our Doctors & Surgeons</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#0068B0] transition-colors">Modular OTs & Infrastructure</Link>
              </li>
              <li>
                <Link href="/patient-info" className="hover:text-[#0068B0] transition-colors">Patient Information & OPD</Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-[#0068B0] transition-colors">Insurance & Cashless TPA</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0068B0] transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Surgical Specialities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
              <li>
                <Link href="/specialities/orthopaedics" className="hover:text-[#0068B0] transition-colors">
                  Orthopaedic Surgeries Overview
                </Link>
              </li>
              <li>
                <Link href="/specialities/joint-replacement" className="hover:text-[#0068B0] transition-colors">
                  Joint Replacement (TKR & THR)
                </Link>
              </li>
              <li>
                <Link href="/specialities/trauma-fracture" className="hover:text-[#0068B0] transition-colors">
                  Trauma & Fracture Surgery
                </Link>
              </li>
              <li>
                <Link href="/specialities/arthroscopy" className="hover:text-[#0068B0] transition-colors">
                  Arthroscopy (Keyhole Joint Repair)
                </Link>
              </li>
              <li>
                <Link href="/specialities/spine-surgery" className="hover:text-[#0068B0] transition-colors">
                  Spine Surgery & Decompression
                </Link>
              </li>
              <li>
                <Link href="/specialities/urology" className="hover:text-[#0068B0] transition-colors">
                  Urology Surgeries Overview
                </Link>
              </li>
              <li>
                <Link href="/specialities/kidney-stones" className="hover:text-[#0068B0] transition-colors">
                  Kidney Stone Laser Clinic (RIRS/PCNL)
                </Link>
              </li>
              <li>
                <Link href="/specialities/prostate-surgery" className="hover:text-[#0068B0] transition-colors">
                  Prostate Surgery (TURP & Laser)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit Us */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Visit Us
            </h4>
            <p className="text-xs text-muted leading-relaxed font-light">
              Near Park, N.R. Extension,<br />
              Ram Mandir Road,<br />
              Chintamani – 563125,<br />
              Karnataka, India
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-[#0068B0] text-[11px] font-semibold">
                OPD: 10:30 AM – 3:00 PM
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Indira Hospital. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <span>Made by</span>
            <a
              href="https://opti-x.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-charcoal hover:text-[#0068B0] underline underline-offset-4 decoration-[#0068B0]/40 transition-colors"
            >
              Mudasir Shariff (opti-x.in)
            </a>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-5 sm:gap-6">
            <Link href="/privacy" className="hover:text-charcoal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-charcoal transition-colors">
              Terms of Use
            </Link>
            <Link href="/patient-info" className="hover:text-charcoal transition-colors">
              Patient Rights
            </Link>
            <Link href="/contact" className="hover:text-charcoal transition-colors">
              Emergency Directions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
