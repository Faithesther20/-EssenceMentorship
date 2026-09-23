import React, { useState } from "react";
import { ShieldCheck, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL, WHATSAPP_NUMBER, CONTACT_EMAIL, PROGRAMME_PRICE, trackAnalyticsEvent } from "../config/siteConfig";
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
              Structured mentorship, academic guidance, and drafting mastery for Nigerian Law School students preparing for Bar Finals.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-[#4D91FF] shrink-0" />
              <span>Direct, secure enrollment powered by Paystack</span>
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
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
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
                  The Programme
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
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Courses */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              5 Core Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>01. Criminal Litigation</li>
              <li>02. Civil Litigation</li>
              <li>03. Corporate Law Practice</li>
              <li>04. Property Law Practice</li>
              <li>05. Professional Ethics & Skills</li>
            </ul>
          </div>

          {/* Col 5: Offer & Action */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              Flagship Offer
            </h4>
            <div className="p-5 rounded-xl bg-[#0A1425] border border-slate-800 space-y-3">
              <span className="text-xs text-[#94A3B8] block">Complete 5-Course Mentorship</span>
              <div className="text-xl font-bold text-white font-sans">{PROGRAMME_PRICE}</div>
              <button
                onClick={onEnroll}
                className="w-full py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2768D8] hover:bg-[#1E56B5] rounded-xl transition-colors cursor-pointer"
              >
                Enroll Now
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-[#CBD5E1] hover:text-white pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
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
            <a
              href="https://paystack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#94A3B8] hover:text-white"
            >
              <span>Paystack Secured</span>
              <ExternalLink className="w-3 h-3" />
            </a>
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
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                ✕
              </button>
            </div>
            <div className="py-4 text-xs text-[#CBD5E1] space-y-3 leading-relaxed">
              {activeModal === "terms" ? (
                <>
                  <p>
                    <strong>1. Educational Guidance Scope:</strong> Essence Mentorship provides structured academic support, drafting tutorials, and study guidance designed for Nigerian Law School candidates. Our mentorship is supplementary and does not replace official Council of Legal Education directives or campus lectures.
                  </p>
                  <p>
                    <strong>2. Code of Integrity:</strong> All templates, study summaries, and recorded sessions provided through the programme remain intellectual property of Essence Mentorship and are licensed solely for the personal academic use of enrolled students.
                  </p>
                  <p>
                    <strong>3. Professional Ethics:</strong> In alignment with the Rules of Professional Conduct (RPC 2023), students are held to professional standards of conduct in all peer discussions and mentorship interactions.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> Essence Mentorship collects student details (name, email address, phone number, and Nigerian Law School campus) solely for the administration of mentorship, cohort communication, and payment verification.
                  </p>
                  <p>
                    <strong>2. Payment Data:</strong> All payments are processed directly through Paystack. Essence Mentorship never stores, handles, or accesses student payment card details or banking credentials.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
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
