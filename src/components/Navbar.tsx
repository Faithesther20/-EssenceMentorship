import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL, trackAnalyticsEvent } from "../config/siteConfig";

export type NavPage =
  | "home"
  | "programme"
  | "about"
  | "testimonials"
  | "faq"
  | "enroll"
  | "contact";

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onEnrollClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onEnrollClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "programme", label: "Programmes" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnroll = () => {
    trackAnalyticsEvent("navbar_enroll");
    setMobileMenuOpen(false);
    onEnrollClick();
  };

  const handleWhatsApp = () => {
    trackAnalyticsEvent("whatsapp_enquiry", { context: "navbar" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07101F]/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3"
          : "bg-[#0B1426]/70 backdrop-blur-sm border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 cursor-pointer"
            aria-label="Essence Mentorship - Return to Homepage"
          >
            <Logo size={isScrolled ? "sm" : "md"} variant="light" />
          </button>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap text-sm cursor-pointer ${
                    isActive
                      ? "text-white font-medium"
                      : "text-[#D6DEEA] hover:text-white font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#B99A5B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Pair (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp secondary CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#D6DEEA] hover:text-white transition-colors"
              aria-label="Ask a Question on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ask a Question</span>
            </a>

            {/* Primary CTA */}
            <button
              onClick={handleEnroll}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#2768D8] hover:bg-[#1E56B5] rounded-xl shadow-md shadow-blue-950/40 transition-all active:scale-[0.98] border border-blue-400/30 cursor-pointer"
            >
              ENROLL NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleEnroll}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#2768D8] rounded-lg shadow-sm cursor-pointer"
            >
              ENROLL
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07101F] border-b border-slate-800 px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-blue-950/60 text-blue-200 font-semibold border-l-2 border-[#2768D8]"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={handleEnroll}
              className="w-full py-3 px-4 text-center text-xs font-bold tracking-wider uppercase text-white bg-[#2768D8] hover:bg-[#1E56B5] rounded-xl shadow-md cursor-pointer"
            >
              ENROLL NOW
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full py-2.5 px-4 inline-flex items-center justify-center gap-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask a Question on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
