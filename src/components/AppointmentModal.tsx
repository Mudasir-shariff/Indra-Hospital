"use client";

import React, { useState } from "react";
import { X, Phone, MessageSquare, Calendar, User, Stethoscope, Clock, ShieldCheck } from "lucide-react";
import { siteData } from "@/data/site";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDept?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedDept = "Orthopaedics",
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: preselectedDept,
    doctor: "Any Available Specialist",
    date: "",
    timeSlot: "Morning (10:30 AM - 3:00 PM)",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hello Indira Hospital,\nI would like to request an appointment:\n\n• Patient Name: ${formData.name}\n• Phone: ${formData.phone}\n• Department: ${formData.department}\n• Doctor: ${formData.doctor}\n• Preferred Date: ${formData.date || "Earliest Available"}\n• Preferred Time: ${formData.timeSlot}\n${formData.notes ? `• Note: ${formData.notes}\n` : ""}\nPlease confirm my appointment.`
    );
    window.open(`https://wa.me/917996114271?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2F4A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-lift border border-line p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-muted hover:text-charcoal hover:bg-blue-50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0068B0] text-xs font-semibold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" /> Fast Confirmation
          </div>
          <h3 className="text-2xl font-bold font-heading text-charcoal">
            Book an Appointment
          </h3>
          <p className="text-sm text-muted mt-1">
            Indira Hospital — Super Speciality Ortho & Urology Center, Chintamani
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                required
                placeholder="Enter patient full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
              Mobile Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                Department *
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8] appearance-none"
                >
                  <option value="Orthopaedics">Orthopaedics & Joint Surgery</option>
                  <option value="Urology">Urology & Stone Clinic</option>
                  <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                  <option value="Oral & Maxillofacial">Oral & Maxillofacial (OMFS)</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                Preferred Doctor
              </label>
              <select
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
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
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                Time Preference
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
              >
                <option value="Morning (10:30 AM - 3:00 PM)">Morning (10:30 AM – 3:00 PM)</option>
                <option value="Evening (5:30 PM - 8:30 PM)">Evening (5:30 PM – 8:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="E.g., Knee pain, previous surgery follow-up, etc."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-[#0068B0] focus:border-transparent text-sm bg-[#FAFAF8]"
            />
            <p className="text-[11px] text-muted mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0068B0]" />
              Please do not include sensitive medical records or diagnosis in this form.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0068B0] hover:bg-[#075486] text-white font-medium text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" /> Request via WhatsApp
            </button>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-line hover:bg-blue-50 text-charcoal font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#0068B0]" /> Call Reception
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
