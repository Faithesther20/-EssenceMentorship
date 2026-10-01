import React, { useState } from "react";
import { Search, ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { FAQS } from "../data/faqs";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "../config/siteConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface FAQPageProps {
  onEnroll: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onEnroll }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("faq-programmes");

  const categories = ["All", "Programme", "Enrollment & Payment", "Campus & Access"];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              DIRECT CLARIFICATIONS
            </span>
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] font-sans max-w-xl mx-auto">
            Everything you need to know about our three training programmes, OPay bank transfer payments, and WhatsApp onboarding.
          </p>
        </section>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by programme, price, OPay transfer, or campus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#07101C] border border-slate-800 rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#4D91FF] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2768D8] text-white shadow-sm"
                    : "bg-[#07101C] text-[#CBD5E1] hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#07101C] border border-slate-800 text-center text-[#CBD5E1] text-xs">
              No matching questions found for "{searchQuery}". You can ask us directly on WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#07101C] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif-display text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#4D91FF]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans border-t border-slate-800 whitespace-pre-line">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions WhatsApp block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#07101C] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif-display text-lg font-bold text-white">
              Still have a specific question about your programme?
            </h4>
            <p className="text-xs text-[#CBD5E1] font-sans mt-0.5">
              Speak directly with our team on WhatsApp at {WHATSAPP_NUMBER}.
            </p>
          </div>

          <WhatsAppButton label="Chat With Our Team" size="md" variant="solid" />
        </div>
      </div>
    </div>
  );
};
