import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Play,
  ChevronDown,
  Scale,
  Sparkles,
  BookOpen,
  MessageCircle,
  Users,
  Check,
  Calendar,
  Layers,
  HelpCircle,
} from "lucide-react";
import { COURSES, Course } from "../data/courses";
import {
  PROGRAMMES,
  Programme,
  ProgrammeId,
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_WHATSAPP_NUMBER,
  getProgrammeEnquiryWhatsAppUrl,
} from "../data/programmes";
import { MENTORS } from "../data/mentors";
import { TESTIMONIALS, Testimonial } from "../data/testimonials";
import { FAQS } from "../data/faqs";
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  trackAnalyticsEvent,
} from "../config/siteConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { VideoModal } from "../components/VideoModal";
import { CourseDetailModal } from "../components/CourseDetailModal";

// Authentic editorial imagery
import heroStudentDeskImg from "../assets/images/hero_student_desk_1790158481544.jpg";
import overwhelmImg from "../assets/images/law_student_overwhelm_1790158492013.jpg";
import mentorTeachingImg from "../assets/images/mentor_teaching_students_1790158503154.jpg";
import campusCollaboratingImg from "../assets/images/students_collaborating_campus_1790158513605.jpg";
import confidentLawyerFutureImg from "../assets/images/confident_lawyer_future_1790158524961.jpg";

interface HomePageProps {
  onNavigateToProgramme: () => void;
  onNavigateToTestimonials: () => void;
  onNavigateToFAQ: () => void;
  onEnroll: (programmeId?: ProgrammeId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToProgramme,
  onNavigateToTestimonials,
  onNavigateToFAQ,
  onEnroll,
}) => {
  const [selectedProgrammeIndex, setSelectedProgrammeIndex] = useState<number>(1); // default Bar Part II
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCourseIndex, setActiveCourseIndex] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq-programmes");

  const activeProgramme: Programme =
    PROGRAMMES[selectedProgrammeIndex] || PROGRAMMES[1];
  const activeCourse: Course = COURSES[activeCourseIndex] || COURSES[0];
  const videoTestimonial =
    TESTIMONIALS.find((t) => t.type === "video") || TESTIMONIALS[0];

  const handleHeroViewProgrammes = () => {
    trackAnalyticsEvent("programme_view", { source: "hero_primary" });
    const target = document.getElementById("programmes-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      onNavigateToProgramme();
    }
  };

  const handleProgrammeEnquiry = (prog: Programme) => {
    trackAnalyticsEvent("whatsapp_enquiry", {
      programme: prog.title,
      context: "programme_selector",
    });
    const url = getProgrammeEnquiryWhatsAppUrl(prog.title);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] overflow-hidden selection:bg-[#2768D8]/40 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — EDITORIAL ASYMMETRIC COMPOSITION (NO AI PILLS OR CARDS) */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT COLUMN: ~54% Typography, Restrained Eyebrow, Clear Action */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Restrained Editorial Eyebrow: No pill, no border box, clean typography */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBD5E1]">
                  FOR FUTURE & CURRENT NIGERIAN LAW SCHOOL STUDENTS
                </span>
              </div>

              {/* Master Headline: Typographic hierarchy without coating everything in bright blue */}
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.12] text-balance">
                Law School is demanding.
                <br />
                <span className="font-editorial italic font-normal text-slate-200">
                  Your preparation shouldn’t feel{" "}
                </span>
                <span className="text-[#4D91FF]">directionless.</span>
              </h1>

              {/* Supporting Editorial Copy: High legibility */}
              <p className="text-base sm:text-lg text-[#D6DEEA] leading-relaxed font-sans max-w-2xl">
                Structured legal education and mentorship for Pre-Law School, Bar Part I and Bar Part II students.
              </p>

              {/* Primary Action Cluster */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    type="button"
                    onClick={handleHeroViewProgrammes}
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#2768D8] hover:bg-[#1E56B5] rounded-xl shadow-lg shadow-blue-950/40 active:scale-[0.98] transition-all cursor-pointer border border-blue-400/30"
                  >
                    <span>VIEW PROGRAMMES</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <WhatsAppButton
                    label="Ask a Question"
                    size="lg"
                    variant="outline"
                  />
                </div>

                {/* Micro-line Under CTA */}
                <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] font-mono tracking-wide">
                  <span>Pre-Law School</span>
                  <span className="text-slate-600">·</span>
                  <span>Bar Part I</span>
                  <span className="text-slate-600">·</span>
                  <span>Bar Part II</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ~46% Pure Photographic Composition (No Floating Cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#07101C] group">
                  <div className="aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden">
                    <img
                      src={heroStudentDeskImg}
                      alt="Nigerian Law School student focused at desk with legal textbooks and study materials"
                      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  </div>

                  {/* Restrained Editorial Caption */}
                  <div className="p-4 bg-[#07101C] border-t border-slate-800/80 flex items-center justify-between text-xs text-[#CBD5E1]">
                    <span className="font-editorial italic">Nigerian Legal Education</span>
                    <span className="text-[11px] font-mono text-[#B99A5B] tracking-wider uppercase">
                      Three Distinct Pathways
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BROAD POSITIONING TRANSITION — WARM PAPER SURFACE & REFINED CADENCE   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#F4F1EA] text-[#111827] border-b border-[#E5E0D5] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#657184] font-mono">
              STRUCTURE ACROSS EVERY STAGE
            </span>
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#111827] leading-[1.25] text-balance">
            “Structured Preparation for Every Stage of the Law School Journey.”
          </h2>

          <div className="w-16 h-[2px] bg-[#B99A5B] mx-auto my-4" />

          <p className="text-base sm:text-lg text-[#4B5563] font-editorial italic max-w-2xl mx-auto leading-relaxed">
            From preparation before Law School to Bar Part I and Bar Part II, Essence Mentorship helps students study with clearer direction, stronger understanding and guided support.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIGNATURE PROGRAMMES SECTION: CHOOSE MATCHING STAGE (EDITORIAL SELECTOR) */}
      {/* ========================================================================= */}
      <section
        id="programmes-section"
        className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
                TRAINING PROGRAMMES
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight">
              Choose the Programme That Matches Your Stage
            </h2>
            <p className="text-base text-[#CBD5E1] font-sans leading-relaxed">
              Whether you’re preparing before Law School, entering Bar Part I or navigating Bar Part II, Essence Mentorship provides structured support for the stage you’re currently in.
            </p>
          </div>

          {/* EDITORIAL PROGRAMME SELECTOR (NOT generic SaaS cards!) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COLUMN: 01, 02, 03 Index Tabs (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {PROGRAMMES.map((prog, idx) => {
                const isSelected = selectedProgrammeIndex === idx;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setSelectedProgrammeIndex(idx)}
                    className={`w-full p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? "bg-[#0A1425] border-[#2768D8] text-white shadow-xl ring-1 ring-[#2768D8]/50"
                        : "bg-[#040811] border-slate-800 text-[#CBD5E1] hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-base font-bold ${
                          isSelected ? "text-[#4D91FF]" : "text-slate-600"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-widest block font-semibold ${
                            isSelected ? "text-[#B99A5B]" : "text-[#94A3B8]"
                          }`}
                        >
                          {prog.label}
                        </span>
                        <h3 className="font-serif-display text-lg font-bold text-white mt-0.5">
                          {prog.name}
                        </h3>
                        <span className="text-xs text-[#94A3B8] font-mono">
                          {prog.priceFormatted}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#4D91FF] translate-x-1"
                          : "text-slate-600"
                      }`}
                    />
                  </button>
                );
              })}

              <div className="pt-2 text-xs text-[#94A3B8]">
                <span>Official payment via {PAYMENT_BANK} bank transfer. Proof verified via WhatsApp.</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Active Programme Detailed Showcase (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0A1425] border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Badge & Price Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-mono font-semibold">
                      {activeProgramme.label}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                      {activeProgramme.title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
                      {activeProgramme.priceFormatted}
                    </span>
                    <span className="text-[11px] text-emerald-400 block font-sans">
                      One-time tuition
                    </span>
                  </div>
                </div>

                {/* Supporting description */}
                <p className="text-sm text-[#D6DEEA] leading-relaxed font-sans">
                  {activeProgramme.shortPositioning}
                </p>

                {/* Course list or Curriculum note */}
                {activeProgramme.courses.length > 0 ? (
                  <div className="space-y-3 pt-1">
                    <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold font-mono block">
                      Included Subjects ({activeProgramme.courses.length}):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CBD5E1]">
                      {activeProgramme.courses.map((courseItem, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-[#07101C] border border-slate-800/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-medium text-slate-200">
                            {courseItem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#CBD5E1] flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">
                        Curriculum Notice
                      </span>
                      <p className="text-[#94A3B8] mt-0.5">
                        {activeProgramme.curriculumNote}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Cluster for Active Programme */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onEnroll(activeProgramme.id)}
                  className="px-6 py-3.5 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>{activeProgramme.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleProgrammeEnquiry(activeProgramme)}
                  className="px-4 py-3 bg-[#07101C] hover:bg-slate-800 text-[#CBD5E1] hover:text-white rounded-xl text-xs font-medium border border-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ASK A QUESTION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 01 — THE CHALLENGE (IMAGE-LED EDITORIAL LAYOUT, NO GENERIC CARDS)      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Visual Storytelling Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#07101C] group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={overwhelmImg}
                    alt="Law student at a study desk surrounded by statutes and thick law reports"
                    className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#07101C] border-t border-slate-800 text-xs text-[#CBD5E1] flex items-center justify-between">
                  <span className="font-editorial italic">The Volume Challenge</span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">Statutes & Procedure</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Typography with Hairline Dividers */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
                  01 — THE CHALLENGE
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                  More Reading Doesn’t Always Mean Better Preparation.
                </h2>
              </div>

              {/* 4 Concise Student Realities Separated by Hairline Dividers */}
              <div className="space-y-4 pt-2">
                {[
                  "I don't know what to prioritize.",
                  "I understand the topic but struggle to structure the answer.",
                  "I keep wondering if I'm preparing the right way.",
                  "There's too much to cover and too little time.",
                ].map((thought, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 py-3.5 border-b border-slate-800 text-sm text-[#E2E8F0]"
                  >
                    <span className="font-mono text-xs font-semibold text-[#B99A5B] shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="font-sans italic">“{thought}”</p>
                  </div>
                ))}
              </div>

              {/* Resolution Tagline */}
              <div className="pt-2">
                <p className="font-serif-display text-base sm:text-lg text-white font-medium">
                  That’s where structure changes everything.
                </p>
                <button
                  type="button"
                  onClick={onNavigateToProgramme}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#4D91FF] hover:text-[#93C5FD] transition-colors cursor-pointer"
                >
                  <span>SEE HOW ESSENCE BRINGS STRUCTURE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 02 — THE METHOD (WARM HUMAN MENTORSHIP INTRODUCTION)                   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Mentor/Student Interaction Image */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0A1425] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={mentorTeachingImg}
                  alt="Senior legal mentor explaining drafting nuances to young law candidates"
                  className="w-full h-full object-cover object-center filter brightness-[0.96] group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#0A1425] border-t border-slate-800 text-xs text-[#CBD5E1]">
                <span className="font-semibold text-white block">Guided by Experienced Mentors</span>
                <span className="text-[11px] text-[#94A3B8]">
                  Step-by-step clarity on statutes, procedural rules, and model exam answers.
                </span>
              </div>
            </div>

            {/* Right: 5 Vertical Learning Dimensions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
                  02 — THE METHOD
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                  Good Preparation Becomes Easier When You Know What You’re Working Toward.
                </h2>
              </div>

              {/* 5 Vertical Phases */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Learn",
                    desc: "Master foundational principles and statutory nuances before memorizing procedures.",
                  },
                  {
                    title: "Understand",
                    desc: "Grasp why rules exist so complex examination scenarios become predictable.",
                  },
                  {
                    title: "Practice",
                    desc: "Active drafting of court processes, charges, and resolutions under timed conditions.",
                  },
                  {
                    title: "Ask",
                    desc: "A dedicated channel to ask questions and get rapid mentor guidance whenever you get stuck.",
                  },
                  {
                    title: "Improve",
                    desc: "Constructive feedback that aligns your drafting style directly with Bar marking guides.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 py-3 border-b border-slate-800/80"
                  >
                    <span className="font-mono text-xs font-semibold text-[#B99A5B] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#CBD5E1] mt-0.5 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL-WIDTH CINEMATIC VISUAL BREAK — CLARITY OF EXECUTION               */}
      {/* ========================================================================= */}
      <section className="relative py-28 md:py-36 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={campusCollaboratingImg}
            alt="Young ambitious African law students collaborating purposefully along campus colonnade"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1425]/95 via-[#0A1425]/75 to-[#0A1425]/95" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
            A GUIDING PRINCIPLE
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
            “You don’t need more confusion added to your preparation. You need clarity about what comes next.”
          </h2>

          <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed font-sans max-w-2xl mx-auto">
            Legal examinations reward clarity of execution and procedural precision. We help you focus on the steps that actually earn marks.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW IT WORKS TIMELINE (NEW 5-STEP STRUCTURED FLOW)                     */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              THE ONBOARDING PROCESS
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              How It Works
            </h2>
            <p className="text-sm text-[#CBD5E1] font-sans">
              Five straightforward steps from programme selection to active mentorship.
            </p>
          </div>

          {/* Minimalist 5-Step Editorial Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Choose Your Programme",
                desc: "Select Pre-Law School, Bar Part I or Bar Part II.",
              },
              {
                step: "02",
                title: "Make Payment",
                desc: `Transfer the programme fee to the official ${PAYMENT_BANK} account.`,
              },
              {
                step: "03",
                title: "Send Payment Proof",
                desc: `Send your receipt through the official Essence Mentorship WhatsApp number (${PAYMENT_WHATSAPP_NUMBER}).`,
              },
              {
                step: "04",
                title: "Get Confirmed",
                desc: "The team verifies your payment.",
              },
              {
                step: "05",
                title: "Get Onboarded",
                desc: "Receive the information needed to begin your programme.",
              },
            ].map((stepItem) => (
              <div
                key={stepItem.step}
                className="py-5 border-t border-slate-800 space-y-3 text-left"
              >
                <div className="font-mono font-bold text-base text-[#B99A5B]">
                  {stepItem.step}
                </div>
                <h3 className="font-serif-display text-base font-bold text-white tracking-wide">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. 03 — STUDENT STORIES (PROOF, NOT MARKETING)                            */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
                03 — STUDENT STORIES
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                Hear From Students Who Found Direction.
              </h2>
              <p className="text-sm text-[#CBD5E1] mt-2 max-w-2xl font-sans leading-relaxed">
                Real feedback from candidates navigating the pressure of law preparation and Bar examinations.
              </p>
            </div>

            <button
              type="button"
              onClick={onNavigateToTestimonials}
              className="text-xs font-semibold text-[#4D91FF] hover:text-[#93C5FD] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>View All Student Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Featured Testimonial Split: Video Thumbnail on Left, Large Quote on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07101C] p-6 sm:p-10 rounded-2xl border border-slate-800">
            {/* Left: Video Thumbnail */}
            <div
              onClick={() => setActiveVideo(videoTestimonial)}
              className="lg:col-span-6 relative aspect-video rounded-xl bg-slate-900 overflow-hidden border border-slate-800 cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#2768D8] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xl">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 text-[11px] font-mono text-white bg-black/70 px-2 py-0.5 rounded">
                {videoTestimonial.videoDuration || "0:58"}
              </span>
            </div>

            {/* Right: Large Editorial Quote */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-3xl font-serif text-[#B99A5B] block leading-none">“</span>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white leading-snug">
                {videoTestimonial.headline}
              </h3>
              <p className="text-sm text-[#D6DEEA] leading-relaxed font-sans">
                {videoTestimonial.content}
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
                <span className="font-semibold text-white">{videoTestimonial.studentName}</span>
                <span>{videoTestimonial.nlsCampus}</span>
              </div>
            </div>
          </div>

          {/* Horizontal Row of Additional Real Student Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.filter((t) => t.type === "whatsapp").slice(0, 2).map((w) => (
              <div
                key={w.id}
                className="p-6 rounded-2xl bg-[#07101C] border border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-white">WhatsApp Feedback</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8]">{w.courseHighlight}</span>
                </div>

                <div className="space-y-2.5 font-sans text-xs">
                  {w.whatsappMessages?.map((msg, mIdx) => (
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

                <div className="pt-2 border-t border-slate-800 text-[11px] text-[#94A3B8]">
                  <span>{w.studentName} · {w.nlsCampus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FAQ ACCORDION                                                          */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#CBD5E1] font-sans">
              Direct information regarding our three training programmes, bank transfer payment, and WhatsApp verification.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#0A1425] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans border-t border-slate-800/80 whitespace-pre-line">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onNavigateToFAQ}
              className="text-xs font-semibold text-[#4D91FF] hover:text-[#93C5FD] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CINEMATIC FINAL CTA — EMOTIONAL CLOSING WITH HIGH-CONFIDENCE VISUAL   */}
      {/* ========================================================================= */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[#040811]">
        <div className="absolute inset-0 z-0">
          <img
            src={confidentLawyerFutureImg}
            alt="Poised young African legal professional outside a contemporary court building"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.2]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040811] via-[#040811]/85 to-[#07101C]/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] block font-mono">
            YOUR PREPARATION MATTERS
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2] text-balance">
            Walk Into Your Preparation With More Than Hope.{" "}
            <span className="text-[#4D91FF]">Walk In With Structure.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed font-sans max-w-2xl mx-auto">
            You already know legal education demands serious work. Give that work direction across Pre-Law School, Bar Part I, and Bar Part II.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleHeroViewProgrammes}
              className="w-full sm:w-auto px-8 py-4 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-blue-400/30"
            >
              <span>CHOOSE YOUR PROGRAMME</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <WhatsAppButton
              label="Ask a Question"
              variant="outline"
              size="lg"
            />
          </div>

          <div className="pt-2 text-xs text-[#94A3B8]">
            <p>
              Official Bank Transfer via {PAYMENT_BANK} ({PAYMENT_ACCOUNT_NUMBER}) · WhatsApp Helpline: {WHATSAPP_NUMBER}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <VideoModal
        testimonial={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={() => onEnroll("bar-part-2")}
      />
    </div>
  );
};
