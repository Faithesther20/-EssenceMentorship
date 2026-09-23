import React, { useState } from "react";
import { Play, MessageCircle, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "../data/testimonials";
import { PROGRAMME_PRICE } from "../config/siteConfig";
import { VideoModal } from "../components/VideoModal";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface TestimonialsPageProps {
  onEnroll: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onEnroll }) => {
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  const filtered =
    filterType === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.type === filterType);

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              STUDENT VOICES
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Real Students. Real Experiences.
          </h1>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
            See how Essence Mentorship has supported candidates through the Nigerian Law School journey—from managing massive course outlines to mastering crucial drafting rules.
          </p>
        </section>

        {/* Interactive Filter Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-[#07101C] rounded-xl border border-slate-800 w-fit">
          {[
            { id: "all", label: "All Formats" },
            { id: "video", label: "Video Stories" },
            { id: "whatsapp", label: "WhatsApp Dialogue" },
            { id: "written", label: "Written Reviews" },
          ].map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#2768D8] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            if (item.type === "video") {
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo(item)}
                  className="group relative p-6 rounded-2xl bg-[#07101C] border border-slate-800 hover:border-slate-700 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-slate-800">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="relative z-10 w-12 h-12 rounded-full bg-[#2768D8] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                        {item.videoDuration}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-[#B99A5B] font-mono">
                        {item.courseHighlight}
                      </span>
                      <h3 className="font-serif-display text-base font-bold text-white mt-1 leading-snug">
                        {item.headline}
                      </h3>
                    </div>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans line-clamp-3">
                      {item.content}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="font-medium text-white">{item.studentName}</span>
                    <span className="text-[11px]">{item.nlsCampus}</span>
                  </div>
                </div>
              );
            }

            if (item.type === "whatsapp") {
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#07101C] border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-xs font-semibold text-white">WhatsApp Feedback</span>
                      </div>
                      <span className="text-[11px] text-[#94A3B8]">{item.courseHighlight}</span>
                    </div>

                    <div className="space-y-3 font-sans text-xs">
                      {item.whatsappMessages?.map((msg, mIdx) => (
                        <div
                          key={mIdx}
                          className={`p-3 rounded-xl max-w-[92%] ${
                            msg.sender === "student"
                              ? "bg-slate-900 text-[#CBD5E1] border border-slate-800"
                              : "bg-blue-950/70 text-blue-100 border border-blue-900/60 ml-auto"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.text}</p>
                          <span className="text-[9px] text-[#94A3B8] block text-right mt-1">
                            {msg.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-[#94A3B8]">
                    <span>{item.studentName} · {item.nlsCampus}</span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#07101C] border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-3xl font-serif text-[#B99A5B]">“</div>
                  <h3 className="font-serif-display text-base font-bold text-white leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-medium text-white">{item.studentName}</span>
                  <span>{item.nlsCampus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Campus Credibility Notice */}
        <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#CBD5E1] text-center max-w-2xl mx-auto">
          Feedback shared with permission from Nigerian Law School candidates across Abuja, Lagos, Enugu, Kano, Yenagoa, Yola, and Port Harcourt campuses.
        </div>

        {/* Bottom CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-[#07101C] border border-slate-800 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Start Your Preparation with Essence Mentorship
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans">
              Complete 5-course mentorship bundle for {PROGRAMME_PRICE}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onEnroll}
              className="px-6 py-3.5 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center gap-2 border border-blue-400/30"
            >
              <span>Enroll Now — {PROGRAMME_PRICE}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <WhatsAppButton label="Ask a Question" size="md" variant="outline" />
          </div>
        </section>
      </div>

      <VideoModal
        testimonial={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
