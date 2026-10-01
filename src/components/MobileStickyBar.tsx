import React, { useEffect, useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, trackAnalyticsEvent } from "../config/siteConfig";

interface MobileStickyBarProps {
  onEnroll: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onEnroll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled past hero threshold
      const scrolledPastHero = window.scrollY > 440;

      // Check if pricing/programme element is in viewport
      const programmesEl = document.getElementById("programmes-section");
      let inView = false;
      if (programmesEl) {
        const rect = programmesEl.getBoundingClientRect();
        inView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(scrolledPastHero && !inView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    trackAnalyticsEvent("whatsapp_enquiry", { context: "mobile_sticky_bar" });
  };

  const handleEnrollClick = () => {
    trackAnalyticsEvent("mobile_sticky_enroll");
    onEnroll();
  };

  if (!isVisible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#07101C]/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 shadow-2xl safe-area-bottom animate-in fade-in duration-200"
      style={{ maxHeight: "64px" }}
      role="region"
      aria-label="Mobile Quick Enrollment Bar"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Pricing / Programmes summary */}
        <div className="flex flex-col shrink-0">
          <span className="text-sm font-bold text-white tracking-tight leading-none font-sans">
            Three Programmes
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#B99A5B] font-medium mt-1 font-mono">
            From ₦150,000
          </span>
        </div>

        {/* Action Pair */}
        <div className="flex items-center gap-2 grow justify-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white"
            aria-label="Ask a question on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
          </a>

          <button
            onClick={handleEnrollClick}
            className="px-4 py-2 bg-[#2768D8] hover:bg-[#1E56B5] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>ENROLL NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
