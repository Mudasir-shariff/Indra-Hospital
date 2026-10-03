"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  ArrowRight,
  Activity
} from "lucide-react";
import { navItems } from "@/data/nav";
import { siteData } from "@/data/site";
import AppointmentModal from "./AppointmentModal";

export default function Navbar({ isHeroFloating = true }: { isHeroFloating?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHeroFloating
            ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-line py-2.5 shadow-soft px-4 sm:px-6"
            : "pt-3.5 sm:pt-5 px-3 sm:px-6 bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto transition-all duration-300 ${
            isScrolled || !isHeroFloating
              ? "px-2 sm:px-4"
              : "bg-white/95 backdrop-blur-md rounded-2xl border border-white/80 shadow-soft px-4 sm:px-6 py-2"
          } flex items-center justify-between gap-3 sm:gap-6`}
        >
          {/* Brand Logo (Left) */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-line bg-white flex-shrink-0">
              <Image
                src="/brand/indira-logo.jpg"
                alt="Indira Hospital Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-charcoal leading-none flex items-center gap-1">
                <span className="text-[#C03A21]">INDIRA</span>
                <span className="text-[#0068B0]">HOSPITAL</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-muted font-medium mt-0.5 hidden xs:block">
                Super Speciality Center
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-1 justify-center">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-2.5 py-1.5 text-xs xl:text-[13px] font-medium text-charcoal hover:text-[#0068B0] transition-colors rounded-lg whitespace-nowrap"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 text-muted group-hover:text-[#0068B0] transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                      <div className="bg-white rounded-xl shadow-lift border border-line p-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group/sub"
                          >
                            <div className="text-xs font-semibold text-charcoal group-hover/sub:text-[#0068B0]">
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-2.5 py-1.5 text-xs xl:text-[13px] font-medium text-charcoal hover:text-[#0068B0] transition-colors rounded-lg whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Quick Emergency Phone Pill */}
            <a
              href={`tel:${siteData.contact.emergency}`}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#C03A21] bg-red-50 hover:bg-red-100 border border-red-100 transition-colors flex-shrink-0 whitespace-nowrap"
              title="24/7 Emergency Line"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#C03A21]" />
              <span>24/7 Casualty</span>
            </a>

            {/* Book Appointment CTA Pill (Reference Design) */}
            <button
              onClick={() => setAppointmentModalOpen(true)}
              className="inline-flex items-center gap-2 pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full bg-[#0068B0] hover:bg-[#075486] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group flex-shrink-0 whitespace-nowrap"
            >
              <span>Book Appointment</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-charcoal hover:bg-blue-50 lg:hidden transition-colors flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A2F4A]/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-line">
                  <Image
                    src="/brand/indira-logo.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-heading font-bold text-sm text-charcoal">
                  INDIRA HOSPITAL
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-blue-50 text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Emergency Banner in Mobile Menu */}
            <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#C03A21] block">24/7 Emergency Casualty</span>
                <span className="text-xs text-charcoal font-semibold">{siteData.contact.emergency}</span>
              </div>
              <a
                href={`tel:${siteData.contact.emergency}`}
                className="p-2 rounded-lg bg-[#C03A21] text-white"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Nav Links in Mobile */}
            <div className="flex-1 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-line/50 pb-2">
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0068B0] px-2 pt-2">
                        {item.label}
                      </div>
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-sm text-charcoal hover:text-[#0068B0] font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-2 text-base font-semibold text-charcoal hover:text-[#0068B0]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-line space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAppointmentModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0068B0] text-white font-medium text-sm"
              >
                Book Appointment
              </button>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-line text-charcoal font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#0068B0]" /> Call Reception: {siteData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </>
  );
}
