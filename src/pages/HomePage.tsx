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
} from "lucide-react";
import { COURSES, Course } from "../data/courses";
import { MENTORS } from "../data/mentors";
import { TESTIMONIALS, Testimonial } from "../data/testimonials";
import { FAQS } from "../data/faqs";
import {
  PROGRAMME_PRICE,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  PAYSTACK_ENROLLMENT_URL,
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
  onEnroll: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToProgramme,
  onNavigateToTestimonials,
  onNavigateToFAQ,
  onEnroll,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCourseIndex, setActiveCourseIndex] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq-1");

  const handleHeroEnroll = () => {
    trackAnalyticsEvent("hero_enroll");
    onEnroll();
  };

  const handlePricingEnroll = () => {
    trackAnalyticsEvent("pricing_enroll");
    onEnroll();
  };

  const handleFinalCtaEnroll = () => {
    trackAnalyticsEvent("final_cta_enroll");
    onEnroll();
  };

  const activeCourse = COURSES[activeCourseIndex] || COURSES[0];
  const videoTestimonial =
    TESTIMONIALS.find((t) => t.type === "video") || TESTIMONIALS[0];

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
                  FOR NIGERIAN LAW SCHOOL STUDENTS
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
                Get structured mentorship across all five core courses and prepare with greater clarity, confidence and direction.
              </p>

              {/* Primary Action Cluster */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    type="button"
                    onClick={handleHeroEnroll}
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#2768D8] hover:bg-[#1E56B5] rounded-xl shadow-lg shadow-blue-950/40 active:scale-[0.98] transition-all cursor-pointer border border-blue-400/30"
                  >
                    <span>ENROLL NOW — {PROGRAMME_PRICE}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <WhatsAppButton
                    label="Ask a Question"
                    size="lg"
                    variant="outline"
                  />
                </div>

                {/* Emotional Human Micro-Moment Under CTA */}
                <p className="text-xs sm:text-sm text-[#94A3B8] font-editorial italic pt-1">
                  “Preparing for Nigerian Law School shouldn’t mean figuring everything out alone.”
                </p>
              </div>

              {/* Restrained Course List Metadata (Not floating UI cards) */}
              <div className="pt-5 border-t border-slate-800 text-xs text-[#CBD5E1] space-y-2">
                <div className="font-mono uppercase tracking-wider text-[11px] text-[#B99A5B]">
                  Complete 5-Course Syllabus
                </div>
                <p className="text-slate-300">
                  Criminal Litigation · Civil Litigation · Corporate Law Practice · Property Law Practice · Professional Ethics
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: ~46% Pure Photographic Composition (No Floating Cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Large Photographic Container: Warm tones, rich blacks, allowed to breathe */}
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
                    <span className="font-editorial italic">Bar Finals Preparation</span>
                    <span className="text-[11px] font-mono text-[#B99A5B] tracking-wider uppercase">
                      05 Core Courses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HIGH-END EDITORIAL TRANSITION — WARM PAPER SURFACE & REFINED CADENCE   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#F4F1EA] text-[#111827] border-b border-[#E5E0D5] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#657184] font-mono">
              THE REALITY OF LAW SCHOOL PREPARATION
            </span>
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#111827] leading-[1.25] text-balance">
            “You can spend hours studying and still wonder whether you’re preparing the right way.”
          </h2>

          <div className="w-16 h-[2px] bg-[#B99A5B] mx-auto my-4" />

          <p className="text-base sm:text-lg text-[#4B5563] font-editorial italic max-w-xl mx-auto leading-relaxed">
            The difference isn’t always effort. Sometimes, it’s structure.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 01 — THE CHALLENGE (IMAGE-LED EDITORIAL LAYOUT, NO GENERIC CARDS)      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large Visual Storytelling Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0A1425] group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={overwhelmImg}
                    alt="Law student at a study desk surrounded by statutes and thick law reports"
                    className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#0A1425] border-t border-slate-800 text-xs text-[#CBD5E1] flex items-center justify-between">
                  <span className="font-editorial italic">The Volume Challenge</span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">Civil & Criminal Procedure</span>
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

              {/* 4 Concise Student Realities Separated by Hairline Dividers (No Cards) */}
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
      {/* 4. 02 — THE METHOD (WARM HUMAN MENTORSHIP INTRODUCTION)                   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Mentor/Student Interaction Image */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#07101C] group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={mentorTeachingImg}
                  alt="Senior legal mentor explaining drafting nuances to young law candidates"
                  className="w-full h-full object-cover object-center filter brightness-[0.96] group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#07101C] border-t border-slate-800 text-xs text-[#CBD5E1]">
                <span className="font-semibold text-white block">Guided by Experienced Mentors</span>
                <span className="text-[11px] text-[#94A3B8]">
                  Step-by-step clarity on statutes, procedural rules, and model exam answers.
                </span>
              </div>
            </div>

            {/* Right: 5 Vertical Learning Dimensions (Clean Editorial Rows) */}
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
                    desc: "Active drafting of court processes, charges, and CAMA resolutions under timed conditions.",
                  },
                  {
                    title: "Ask",
                    desc: "A dedicated channel to ask questions and get rapid mentor guidance whenever you get stuck.",
                  },
                  {
                    title: "Improve",
                    desc: "Constructive feedback that aligns your drafting style directly with Bar Finals marking guides.",
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
      {/* 5. 03 — THE PROGRAMME (SIGNATURE EDITORIAL MODULE NAVIGATION)             */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800" id="programme-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
                03 — THE PROGRAMME
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                Five Core Courses. One Unified Standard.
              </h2>
              <p className="text-sm text-[#CBD5E1] mt-2 max-w-2xl font-sans leading-relaxed">
                Complete, synchronized instruction covering procedural mastery, statutory citations, and exam drafting for all five Bar Finals subjects.
              </p>
            </div>

            <button
              onClick={onNavigateToProgramme}
              className="text-xs font-semibold text-[#4D91FF] hover:text-[#93C5FD] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>View Full Syllabus Detail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Editorial Module Navigation: Left Index Selector + Right Active Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: 01 to 05 Module Index (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {COURSES.map((course, idx) => {
                const isActive = activeCourseIndex === idx;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveCourseIndex(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isActive
                        ? "bg-[#0A1425] border-[#2768D8] text-white shadow-lg"
                        : "bg-[#07101C] border-slate-800 text-[#CBD5E1] hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`font-mono text-sm font-semibold ${
                          isActive ? "text-[#4D91FF]" : "text-slate-500"
                        }`}
                      >
                        {course.number}
                      </span>
                      <div>
                        <h4
                          className={`font-serif-display text-base font-semibold ${
                            isActive ? "text-white" : "text-[#E2E8F0]"
                          }`}
                        >
                          {course.name}
                        </h4>
                        <span className="text-[11px] text-[#94A3B8] font-mono">
                          {course.code}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-[#4D91FF] translate-x-1"
                          : "text-slate-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Course Deep View (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0A1425] border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[#4D91FF]">
                      COURSE {activeCourse.number}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="font-mono text-xs text-[#94A3B8]">
                      {activeCourse.code}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">
                    Included in ₦200,000 Bundle
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  {activeCourse.name}
                </h3>

                <p className="text-sm text-[#D6DEEA] leading-relaxed font-sans">
                  {activeCourse.summary}
                </p>

                {/* Key Examination Drafting Focus */}
                <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B99A5B] flex items-center gap-1.5 font-mono">
                    <span className="font-serif font-bold text-sm">§</span>
                    <span>Primary Examination Drafting Focus</span>
                  </span>
                  <p className="text-xs text-[#E2E8F0] leading-relaxed">
                    {activeCourse.keyDraftingRequirements[0]}
                  </p>
                </div>

                {/* Core Focus Areas */}
                <div className="text-xs text-[#CBD5E1]">
                  <span className="font-semibold text-white block mb-1">
                    Key Examination Focus Areas:
                  </span>
                  <span>{activeCourse.coreFocus.slice(0, 3).join(" • ")}</span>
                </div>
              </div>

              {/* Action Pair */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedCourse(activeCourse)}
                  className="w-full sm:w-auto text-xs font-semibold text-[#4D91FF] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Explore Complete Module Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onEnroll}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Enroll in Programme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHAT CHANGES WHEN PREPARATION HAS STRUCTURE? (EDITORIAL PROGRESSION)   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              THE STUDY EXPERIENCE
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
              What Changes When Your Preparation Has Structure?
            </h2>
            <p className="text-sm text-[#CBD5E1] mt-2 font-sans leading-relaxed">
              Experience the shift from reactive reading to intentional, confident execution across your Bar Finals journey.
            </p>
          </div>

          {/* 4 Progression Rows with Fine Dividers (No Generic Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                before: "I'm reading everything without a plan.",
                after: "I know what deserves my attention each week.",
                tag: "Focus & Prioritization",
              },
              {
                before: "I don't know whether my answer is strong enough.",
                after: "I understand the exact approach examiners look for.",
                tag: "Exam Answer Technique",
              },
              {
                before: "I keep getting stuck on difficult procedures.",
                after: "I know where to ask and get answers that click.",
                tag: "Mentor Support",
              },
              {
                before: "I'm studying alone under intense pressure.",
                after: "I have structured support and accountability around me.",
                tag: "Mentorship & Community",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="py-5 border-b border-slate-800 space-y-3"
              >
                <span className="text-[10px] uppercase font-semibold text-[#B99A5B] tracking-wider block font-mono">
                  {item.tag}
                </span>

                <div className="space-y-2 text-xs sm:text-sm">
                  {/* Before */}
                  <div className="flex items-start gap-2.5 text-[#94A3B8]">
                    <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                    <p className="italic">Before: “{item.before}”</p>
                  </div>

                  {/* With Structure */}
                  <div className="flex items-start gap-2.5 text-white font-medium pt-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p>With structure: “{item.after}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FULL-WIDTH CINEMATIC VISUAL BREAK — CLARITY OF EXECUTION               */}
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
            The Bar Finals reward clarity of execution and procedural precision. We help you focus on the steps that actually earn marks.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. 04 — THE MENTORSHIP & SIMPLE PATHWAY                                  */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              04 — THE MENTORSHIP
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              You Shouldn’t Have to Figure Everything Out Alone.
            </h2>
            <p className="text-sm text-[#CBD5E1] font-sans">
              Five clear steps designed to transform overwhelming outlines into structured exam preparation.
            </p>
          </div>

          {/* Minimalist 5-Step Editorial Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Enroll",
                desc: "Complete your one-time ₦200,000 tuition via secure Paystack checkout.",
              },
              {
                step: "02",
                title: "Get Onboarded",
                desc: "Receive cohort access, introductory roadmap, and structured schedule.",
              },
              {
                step: "03",
                title: "Follow Programme",
                desc: "Synchronized guidance across Criminal, Civil, Corporate, Property, and Ethics.",
              },
              {
                step: "04",
                title: "Learn & Practice",
                desc: "Draft court processes, charges, and CAMA resolutions with model feedback.",
              },
              {
                step: "05",
                title: "Prepare With Clarity",
                desc: "Approach Bar Finals with structured execution and quiet confidence.",
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
      {/* 9. 05 — STUDENT STORIES (PROOF, NOT MARKETING)                            */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
                05 — STUDENT STORIES
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">
                Hear From Students Who Found Direction.
              </h2>
              <p className="text-sm text-[#CBD5E1] mt-2 max-w-2xl font-sans leading-relaxed">
                Real feedback from Nigerian Law School candidates navigating the pressure of Bar Finals preparation.
              </p>
            </div>

            <button
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
      {/* 10. 06 — ENROLLMENT & TUITION (TYPOGRAPHY & COMPOSITION DRIVEN)           */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#07101C] border-b border-slate-800" id="pricing">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              06 — TUITION & ENROLLMENT
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              One Investment. Complete Bar Finals Preparation.
            </h2>
            <p className="text-sm text-[#CBD5E1] max-w-xl mx-auto font-sans leading-relaxed">
              No fragmented fees, no surprise tier upgrades. Everything required for comprehensive Bar Finals preparation unified in one flagship programme.
            </p>
          </div>

          {/* High-End Editorial Composition: Left Inclusions + Right Price Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A1425] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl items-center">
            {/* Left: Everything in One Complete Mentorship (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-semibold block font-mono">
                  ALL-INCLUSIVE CURRICULUM
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-white mt-1">
                  Everything in One Complete Mentorship.
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#E2E8F0]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Criminal Litigation (ACJA, ACJL, charges & bail advocacy)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Civil Litigation (Pleadings, motions & High Court rules)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Corporate Law Practice (CAMA 2020 & CAC governance)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Property Law Practice (Deeds, conveyancing & Land Use Act)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Professional Ethics & Lawyering Skills (RPC 2023)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4D91FF] shrink-0 mt-0.5" />
                  <span>Direct mentorship, question support & structured revision</span>
                </div>
              </div>
            </div>

            {/* Right: Price & Paystack CTA (5 Cols) */}
            <div className="lg:col-span-5 bg-[#07101C] p-6 sm:p-8 rounded-xl border border-slate-800 text-center space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#94A3B8] block font-semibold">
                  Complete Programme
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight block mt-1">
                  {PROGRAMME_PRICE}
                </span>
                <span className="text-xs text-[#94A3B8] block mt-1">
                  One-time complete investment
                </span>
              </div>

              <button
                type="button"
                onClick={handlePricingEnroll}
                className="w-full py-4 px-6 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-lg active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 border border-blue-400/30"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
                <Lock className="w-3.5 h-3.5 text-[#4D91FF]" />
                <span>Secure payment through Paystack</span>
              </div>

              {/* Subdued WhatsApp Inquiries */}
              <div className="pt-3 border-t border-slate-800 space-y-1">
                <span className="text-xs text-[#CBD5E1] block">
                  Have a question before enrolling?
                </span>
                <WhatsAppButton
                  label="ASK US ON WHATSAPP"
                  variant="outline"
                  size="sm"
                />
                <span className="text-[10px] text-[#94A3B8] block pt-1">
                  No pressure. Ask whatever you need to know.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FAQ ACCORDION                                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#0A1425] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Still Deciding? Direct Answers to Your Questions.
            </h2>
            <p className="text-sm text-[#CBD5E1] font-sans">
              Clear information regarding curriculum synchronization, schedules, and admissions.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#07101C] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans border-t border-slate-800/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
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
      {/* 12. CINEMATIC FINAL CTA — EMOTIONAL CLOSING WITH HIGH-CONFIDENCE VISUAL   */}
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
            You already know Law School demands serious work. Give that work direction.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleFinalCtaEnroll}
              className="w-full sm:w-auto px-8 py-4 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-blue-400/30"
            >
              <span>ENROLL NOW — {PROGRAMME_PRICE}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <WhatsAppButton
              label="Ask a Question"
              variant="outline"
              size="lg"
            />
          </div>

          <div className="pt-2 text-xs text-[#94A3B8]">
            <p>Secure checkout via Paystack · WhatsApp Helpline: {WHATSAPP_NUMBER}</p>
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
        onEnroll={onEnroll}
      />
    </div>
  );
};
