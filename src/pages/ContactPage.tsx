import React, { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  NIGERIAN_LAW_SCHOOL_CAMPUSES,
  trackAnalyticsEvent,
} from "../config/siteConfig";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    campus: NIGERIAN_LAW_SCHOOL_CAMPUSES[0] as string,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or question.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    trackAnalyticsEvent("contact_submit", { campus: formData.campus });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleDirectWhatsAppWithDetails = () => {
    const text = `Hello Essence Mentorship, my name is ${formData.fullName || "[Candidate]"} (${formData.campus}). I have an enquiry: ${formData.message || "I would like to enquire about your training programmes."}`;
    const url = `https://wa.me/2348113853838?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              ADMISSIONS & ENQUIRIES
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Speak With the Essence Mentorship Team
          </h1>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
            Have questions about the syllabus, your campus timetable, or the enrollment procedure? We are here to provide clear guidance.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & WhatsApp Concierge */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-6">
              <h2 className="font-serif-display text-2xl font-bold text-white">
                Direct Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#CBD5E1] font-sans">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A1425] border border-slate-800">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp Admissions</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4D91FF] hover:text-[#93C5FD] transition-colors"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                    <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                      Fastest response for prospective candidates
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A1425] border border-slate-800">
                  <Mail className="w-5 h-5 text-[#4D91FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Official Email</span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#CBD5E1] hover:text-white transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Campus Coverage */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A1425] border border-slate-800">
                  <MapPin className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Campuses Supported</span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5">
                      Abuja (Bwari), Lagos, Enugu, Kano, Yenagoa, Yola, and Port Harcourt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#07101C] border border-slate-800">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    Enquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding Nigerian Law School preparation ({formData.campus}) has been recorded.
                  </p>
                  <p className="text-xs text-[#94A3B8]">
                    For faster guidance, you can also forward your question directly to our WhatsApp admissions desk.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsAppWithDetails}
                      className="px-5 py-2.5 bg-[#25D366] text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          campus: NIGERIAN_LAW_SCHOOL_CAMPUSES[0],
                          message: "",
                        });
                      }}
                      className="px-4 py-2 bg-slate-800 text-[#CBD5E1] text-xs rounded-xl cursor-pointer hover:bg-slate-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif-display text-xl font-bold text-white">
                    Send an Academic Enquiry
                  </h3>

                  <p className="text-xs text-[#CBD5E1]">
                    Our admissions counsellors review academic enquiries daily. For immediate assistance regarding the upcoming cohort, you may also reach us via WhatsApp.
                  </p>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CBD5E1] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adebayo Okonkwo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0A1425] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4D91FF] transition-colors"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#CBD5E1] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. adebayo@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A1425] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4D91FF] transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 block">{errors.email}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#CBD5E1] block">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +234 801 234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A1425] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4D91FF] transition-colors"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-400 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Campus Selector */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CBD5E1] block">
                      Nigerian Law School Campus
                    </label>
                    <select
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full bg-[#0A1425] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4D91FF] transition-colors cursor-pointer"
                    >
                      {NIGERIAN_LAW_SCHOOL_CAMPUSES.map((c) => (
                        <option key={c} value={c} className="bg-[#0A1425] text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#CBD5E1] block">
                      Your Message or Question *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ask about drafting sessions, lecture schedules, payment plans, or preparation strategies..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0A1425] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4D91FF] transition-colors"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 border border-blue-400/30"
                    >
                      {submitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
