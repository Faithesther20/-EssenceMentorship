import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER, trackAnalyticsEvent } from "../config/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [isPillExpanded, setIsPillExpanded] = useState(false);

  useEffect(() => {
    // Check if expansion has already triggered this browser session
    const hasExpandedThisSession = sessionStorage.getItem("essence_wa_expanded");
    if (hasExpandedThisSession) return;

    let triggerTimeout: ReturnType<typeof setTimeout> | null = null;
    let autoCollapseTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollFraction = window.scrollY / scrollHeight;

      // Trigger subtly around 40% of the page
      if (scrollFraction >= 0.38 && scrollFraction <= 0.48) {
        window.removeEventListener("scroll", handleScroll);
        sessionStorage.setItem("essence_wa_expanded", "true");

        triggerTimeout = setTimeout(() => {
          setIsPillExpanded(true);

          // Collapse back gracefully after 4.5 seconds
          autoCollapseTimeout = setTimeout(() => {
            setIsPillExpanded(false);
          }, 4500);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (triggerTimeout) clearTimeout(triggerTimeout);
      if (autoCollapseTimeout) clearTimeout(autoCollapseTimeout);
    };
  }, []);

  const handleClick = () => {
    trackAnalyticsEvent("whatsapp_enquiry", { context: "floating_button" });
  };

  const handleDismissPill = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPillExpanded(false);
  };

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center gap-2 pointer-events-auto"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group relative flex items-center rounded-full bg-[#25D366] text-slate-950 shadow-lg shadow-black/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${
          isPillExpanded
            ? "px-4 py-2.5 h-[50px] md:h-[54px] gap-2.5"
            : "w-[50px] h-[50px] md:w-[54px] md:h-[54px] justify-center"
        }`}
        aria-label={`Chat with Essence Mentorship on WhatsApp at ${WHATSAPP_NUMBER}`}
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-slate-950 stroke-none shrink-0" />

        {/* Text Expansion */}
        {isPillExpanded ? (
          <div className="flex items-center gap-2 whitespace-nowrap pr-1 animate-in fade-in duration-200">
            <span className="text-xs md:text-sm font-semibold text-slate-950 font-sans tracking-tight">
              Questions? Chat with us.
            </span>
            <button
              onClick={handleDismissPill}
              className="text-slate-800 hover:text-black p-0.5 rounded cursor-pointer"
              aria-label="Dismiss label"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <span className="sr-only">Chat with us on WhatsApp</span>
        )}
      </a>
    </aside>
  );
};
