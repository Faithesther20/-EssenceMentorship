import React, { useState, useEffect } from "react";
import { Navbar, NavPage } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { ScrollProgressBar } from "./components/ScrollProgressBar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgrammePage } from "./pages/ProgrammePage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { FAQPage } from "./pages/FAQPage";
import { EnrollPage } from "./pages/EnrollPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle URL hash routing or initial state if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as NavPage;
      if (
        ["home", "programme", "about", "testimonials", "faq", "enroll", "contact"].includes(
          hash
        )
      ) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (page: NavPage) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const handleEnrollClick = () => {
    navigateTo("enroll");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1426] text-white selection:bg-[#2563EB]/40 selection:text-white relative">
      {/* Scroll Progress Indicator Line across the top */}
      <ScrollProgressBar />

      {/* Fixed Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onEnrollClick={handleEnrollClick}
      />

      {/* Main Content Area with elegant transition */}
      <main
        className={`grow transition-opacity duration-200 ease-out ${
          isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        {currentPage === "home" && (
          <HomePage
            onNavigateToProgramme={() => navigateTo("programme")}
            onNavigateToTestimonials={() => navigateTo("testimonials")}
            onNavigateToFAQ={() => navigateTo("faq")}
            onEnroll={handleEnrollClick}
          />
        )}
        {currentPage === "programme" && (
          <ProgrammePage onEnroll={handleEnrollClick} />
        )}
        {currentPage === "about" && (
          <AboutPage onEnroll={handleEnrollClick} />
        )}
        {currentPage === "testimonials" && (
          <TestimonialsPage onEnroll={handleEnrollClick} />
        )}
        {currentPage === "faq" && (
          <FAQPage onEnroll={handleEnrollClick} />
        )}
        {currentPage === "enroll" && (
          <EnrollPage />
        )}
        {currentPage === "contact" && (
          <ContactPage />
        )}
      </main>

      {/* Unobtrusive Floating WhatsApp with automatic subtle expansion once per session */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Conversion Bar (hidden on desktop and on the checkout page) */}
      {currentPage !== "enroll" && (
        <MobileStickyBar onEnroll={handleEnrollClick} />
      )}

      {/* Dignified Legal Footer */}
      <Footer onNavigate={navigateTo} onEnroll={handleEnrollClick} />
    </div>
  );
}
