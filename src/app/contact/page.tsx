"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import { siteData } from "@/data/site";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Activity, 
  Navigation, 
  MessageSquare, 
  User, 
  Calendar, 
  Stethoscope, 
  ShieldCheck, 
  ArrowUpRight,
  QrCode
} from "lucide-react";
import QrBookingCard from "@/components/QrBookingCard";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopaedics",
    doctor: "Any Available Specialist",
    date: "",
    timeSlot: "Morning (10:30 AM - 3:00 PM)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Indira Hospital,\nI would like to request an appointment:\n\n• Patient Name: ${formData.name}\n• Phone: ${formData.phone}\n• Department: ${formData.department}\n• Doctor: ${formData.doctor}\n• Date: ${formData.date || "Earliest"}\n• Time: ${formData.timeSlot}\n${formData.notes ? `• Notes: ${formData.notes}\n` : ""}\nPlease confirm.`
    );
    window.open(`https://wa.me/917996114271?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#17212B]">
      <Navbar isHeroFloating={false} />

      <SubpageHero
        category="Reach Out to Us"
        title="Contact Us & Book an Appointment"
        subtitle="Whether you need to schedule a consultation, seek emergency fracture care, or have insurance queries, our team is ready to assist you."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Official 4-Way Appointment Options from website info */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                Scheduling Guidelines
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                How to Book an Appointment
              </h2>
              <p className="text-sm text-muted mt-1 font-light">
                Booking an appointment with our specialists is simple and convenient. You can schedule your consultation by:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-line shadow-soft flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0068B0] uppercase tracking-wider">Method 01</span>
                  <h4 className="text-sm font-bold text-charcoal mt-1 mb-1">Call Reception</h4>
                  <p className="text-xs text-muted leading-relaxed">During OPD hours (10:30 AM – 3:00 PM & 5:30 PM – 8:30 PM).</p>
                </div>
                <a href={`tel:${siteData.contact.phone}`} className="text-xs font-bold text-[#0068B0] mt-3 hover:underline">
                  {siteData.contact.phone} →
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-line shadow-soft flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0068B0] uppercase tracking-wider">Method 02</span>
                  <h4 className="text-sm font-bold text-charcoal mt-1 mb-1">Visit Reception</h4>
                  <p className="text-xs text-muted leading-relaxed">Near Park, N.R. Extension, Ram Mandir Road, Chintamani.</p>
                </div>
                <span className="text-xs font-semibold text-charcoal/80 mt-3">Walk-in OPD Available</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-line shadow-soft flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0068B0] uppercase tracking-wider">Method 03</span>
                  <h4 className="text-sm font-bold text-charcoal mt-1 mb-1">Online Form</h4>
                  <p className="text-xs text-muted leading-relaxed">Submit the patient request form below for prompt WhatsApp confirmation.</p>
                </div>
                <span className="text-xs font-semibold text-[#0068B0] mt-3">Direct Form Below ↓</span>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/40 border border-[#0068B0]/30 shadow-soft flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0068B0] uppercase tracking-wider">Method 04</span>
                  <h4 className="text-sm font-bold text-charcoal mt-1 mb-1">Scan QR Code</h4>
                  <p className="text-xs text-muted leading-relaxed">Scan with your smartphone camera to book online on TatvaCare portal.</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 mt-3">Instant Portal Booking ↓</span>
              </div>
            </div>

            {/* QR Booking & Scanner Card */}
            <QrBookingCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Column: Direct Appointment Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-soft">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                  Online Scheduling
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
                  Request an Appointment
                </h2>
                <p className="text-xs sm:text-sm text-muted mt-1 font-light">
                  Fill in your details below and submit via WhatsApp for instant confirmation from our reception desk.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="text"
                      required
                      placeholder="Enter patient's full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    >
                      <option value="Orthopaedics">Orthopaedics & Joint Surgery</option>
                      <option value="Urology">Urology & Stone Clinic</option>
                      <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                      <option value="Oral & Maxillofacial">Oral & Maxillofacial (OMFS)</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Doctor (Optional)
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    >
                      <option value="Any Available Specialist">Any Available Specialist</option>
                      <option value="Dr. Venkatesh K. R. (Director & Chief Ortho)">Dr. Venkatesh K. R. (Chief Ortho)</option>
                      <option value="Dr. Shashank K. A. (Consultant Urologist)">Dr. Shashank K. A. (Urologist)</option>
                      <option value="Dr. Bindu V. (OB-GYN)">Dr. Bindu V. (OB-GYN)</option>
                      <option value="Dr. Prabhu (Ortho & Deformity)">Dr. Prabhu (Ortho & Deformity)</option>
                      <option value="Dr. Akarsh (Maxillofacial)">Dr. Akarsh (Maxillofacial)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                    >
                      <option value="Morning (10:30 AM - 3:00 PM)">Morning (10:30 AM – 3:00 PM)</option>
                      <option value="Evening (5:30 PM - 8:30 PM)">Evening (5:30 PM – 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Brief Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe symptoms briefly (e.g. Knee joint stiffness, follow-up, etc.)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] text-sm bg-[#FAFAF8]"
                  />
                  <p className="text-[11px] text-muted mt-1">
                    * Please do not submit confidential medical diagnostic files in this note field.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white font-medium text-sm transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> Request Appointment via WhatsApp
                  </button>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-line hover:bg-blue-50 text-charcoal font-medium text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#0068B0]" /> Call Reception
                  </a>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Details Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Banner */}
              <div className="p-6 rounded-3xl bg-red-50 border border-red-100 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C03A21] block mb-1">
                  24/7 Casualty & Trauma
                </span>
                <div className="text-3xl font-extrabold font-heading text-charcoal mb-1">
                  {siteData.contact.emergency}
                </div>
                <p className="text-xs text-muted">
                  Immediate emergency response line for road accidents, fractures, and acute urological emergencies.
                </p>
                <div className="pt-4">
                  <a
                    href={`tel:${siteData.contact.emergency}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C03A21] text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Casualty Now
                  </a>
                </div>
              </div>

              {/* Address & Reception */}
              <div className="p-8 rounded-3xl bg-white border border-line shadow-soft space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0] block mb-1">
                    Hospital Address
                  </span>
                  <p className="text-base font-bold text-charcoal">
                    {siteData.name} — {siteData.descriptor}
                  </p>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {siteData.contact.address},<br />
                    {siteData.contact.city} – {siteData.contact.pincode},<br />
                    {siteData.contact.state}
                  </p>
                </div>

                <div className="pt-4 border-t border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                    Reception Telephones
                  </span>
                  <div className="text-base font-bold text-charcoal">
                    {siteData.contact.phone}
                  </div>
                  <div className="text-xs text-muted mt-1">
                    Email: {siteData.contact.email}
                  </div>
                </div>

                <div className="pt-4 border-t border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                    OPD Consultation Hours
                  </span>
                  <div className="text-xs text-charcoal font-medium space-y-1">
                    <div>• <strong>Orthopaedic:</strong> 10:30 AM – 3:00 PM & 5:30 PM – 8:30 PM</div>
                    <div>• <strong>Urology:</strong> Mon–Sat 10:30 AM – 3:00 PM | Sun 10:30 AM – 8:30 PM</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2.5">
                    Official Social Channels
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={siteData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#E1306C] text-xs font-semibold border border-pink-100 transition-colors"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>@indirahospitalcmy</span>
                    </a>
                    <a
                      href={siteData.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1877F2] text-xs font-semibold border border-blue-100 transition-colors"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>Indira Hospital</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Google Map */}
          <div className="border-t border-line pt-16">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0068B0]">
                  Map Location
                </span>
                <h3 className="text-2xl font-bold font-heading text-charcoal">
                  Find Indira Hospital in Chintamani
                </h3>
              </div>
              <a
                href={siteData.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0068B0] text-white text-xs font-semibold self-start sm:self-auto"
              >
                <Navigation className="w-3.5 h-3.5" /> Navigate with Google Maps
              </a>
            </div>

            <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-line shadow-soft bg-slate-100">
              <iframe
                title="Indira Hospital Chintamani Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.452796123984!2d78.045!3d13.402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1758c5415f3cf%3A0x6bfa54687d0e408!2sChintamani%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
