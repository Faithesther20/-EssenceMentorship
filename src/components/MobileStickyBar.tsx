import React, { useEffect, useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { PROGRAMME_PRICE, WHATSAPP_URL, trackAnalyticsEvent } from "../config/siteConfig";

interface MobileStickyBarProps {
  onEnroll: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onEnroll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled past hero threshold
      const scrolledPastHero = window.scrollY > 440;

      // Check if pricing element is in viewport
      const pricingEl = document.getElementById("pricing");
      let pricingInView = false;
      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        pricingInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(scrolledPastHero && !pricingInView);
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
        {/* Pricing context */}
        <div className="flex flex-col shrink-0">
          <span className="text-base font-bold text-white tracking-tight leading-none font-sans">
            {PROGRAMME_PRICE}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] font-medium mt-0.5 font-mono">
            Complete Programme
          </span>
        </div>

        {/* Action Pair */}
        <div className="flex items-center gap-2 grow justify-end">
          {/* WhatsApp icon */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700 bg-[#0A1425] text-emerald-400 shrink-0 active:scale-95 transition-transform"
            aria-label="Enquire via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
          </a>

          {/* Primary CTA */}
          <button
            type="button"
            onClick={handleEnrollClick}
            className="h-10 px-4 flex items-center justify-center gap-1.5 rounded-xl bg-[#2768D8] text-white font-semibold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-transform whitespace-nowrap grow max-w-[190px] border border-blue-400/30"
          >
            <span>ENROLL NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
