import React, { useState } from "react";
import { ShieldCheck, MessageCircle, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  trackAnalyticsEvent,
} from "../config/siteConfig";
import { NavPage } from "./Navbar";

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onEnroll }) => {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(null);

  const handleWhatsApp = () => {
    trackAnalyticsEvent("whatsapp_enquiry", { context: "footer" });
  };

  return (
    <footer className="bg-[#07101C] text-[#CBD5E1] border-t border-slate-800 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="md" variant="light" withTagline={true} />
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Structured legal education and mentorship for Pre-Law School, Bar Part I, and Bar Part II students.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-[#4D91FF] shrink-0" />
              <span>Official Bank Transfer via {PAYMENT_BANK} · WhatsApp Verification</span>
            </div>

            <div className="space-y-2 text-xs text-[#CBD5E1] pt-1">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#4D91FF] shrink-0" />
                <span>Email: {CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                <span>National Syllabus · All 7 NLS Campuses</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("programme")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Programmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Essence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("testimonials")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Student Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Programmes */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4 font-mono">
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button
                  onClick={onEnroll}
                  className="hover:text-white transition-colors cursor-pointer text-left flex flex-col"
                >
                  <span className="font-medium text-white">Bar Part I</span>
                  <span className="text-xs text-[#B99A5B] font-mono">₦300,000 · 7 Courses</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onEnroll}
                  className="hover:text-white transition-colors cursor-pointer text-left flex flex-col"
                >
                  <span className="font-medium text-white">Bar Part II</span>
                  <span className="text-xs text-[#B99A5B] font-mono">₦300,000 · 5 Courses</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onEnroll}
                  className="hover:text-white transition-colors cursor-pointer text-left flex flex-col"
                >
                  <span className="font-medium text-white">Pre-Law School</span>
                  <span className="text-xs text-[#B99A5B] font-mono">₦150,000 · Preparation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Action */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4 font-mono">
              Enrollment
            </h4>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Official payment is by direct bank transfer to {PAYMENT_BANK} ({PAYMENT_ACCOUNT_NUMBER}).
            </p>

            <button
              onClick={onEnroll}
              className="w-full py-3 px-4 bg-[#2768D8] hover:bg-[#1E56B5] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center block"
            >
              ENROLL NOW
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full py-2.5 px-4 bg-[#0A1425] hover:bg-slate-800 text-[#CBD5E1] hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Essence Mentorship. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Mentorship
            </button>
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#94A3B8]">
              Official Bank: {PAYMENT_BANK} ({PAYMENT_ACCOUNT_NUMBER})
            </span>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0A1425] border border-slate-700 rounded-2xl max-w-xl w-full p-6 text-slate-200 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-serif-display text-lg text-white font-bold">
                {activeModal === "terms" ? "Terms of Mentorship" : "Privacy Policy"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="py-4 text-xs text-[#CBD5E1] space-y-3 leading-relaxed">
              {activeModal === "terms" ? (
                <>
                  <p>
                    <strong>1. Educational Guidance Scope:</strong> Essence Mentorship provides structured legal training, academic guidance, and drafting tutorials designed for Pre-Law School, Bar Part I, and Bar Part II candidates. Our mentorship is supplementary and does not replace official Council of Legal Education directives or university/campus lectures.
                  </p>
                  <p>
                    <strong>2. Code of Integrity:</strong> All templates, study summaries, and recorded sessions provided through the programme remain intellectual property of Essence Mentorship and are licensed solely for the personal academic use of enrolled students.
                  </p>
                  <p>
                    <strong>3. Professional Ethics:</strong> In alignment with legal standards and the Rules of Professional Conduct (RPC 2023), students are held to professional standards of conduct in all peer discussions and mentorship interactions.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> Essence Mentorship collects student details (name, email address, phone number, and stage/campus) solely for the administration of mentorship, cohort communication, and payment verification.
                  </p>
                  <p>
                    <strong>2. Payment Verification:</strong> All payments are made by direct bank transfer to our official {PAYMENT_BANK} account and confirmed via our official WhatsApp channel (+2348113853838). Essence Mentorship never asks for your card PIN, OTP, or online banking passwords.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
