import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Scale,
  Compass,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { COURSES, Course } from "../data/courses";
import {
  PROGRAMMES,
  Programme,
  ProgrammeId,
  getProgrammeEnquiryWhatsAppUrl,
} from "../data/programmes";
import { CourseDetailModal } from "../components/CourseDetailModal";
import campusCollaboratingImg from "../assets/images/students_collaborating_campus_1790158513605.jpg";
import mentorTeachingImg from "../assets/images/mentor_teaching_students_1790158503154.jpg";

interface ProgrammePageProps {
  onEnroll: (programmeId?: ProgrammeId) => void;
}

export const ProgrammePage: React.FC<ProgrammePageProps> = ({ onEnroll }) => {
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const barPart1 = PROGRAMMES.find((p) => p.id === "bar-part-1")!;
  const barPart2 = PROGRAMMES.find((p) => p.id === "bar-part-2")!;
  const preLaw = PROGRAMMES.find((p) => p.id === "pre-law-school")!;

  const handleWhatsAppEnquiry = (programme: Programme) => {
    const url = getProgrammeEnquiryWhatsAppUrl(programme.title);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* PAGE HERO                                                                 */}
        {/* ========================================================================= */}
        <section className="max-w-3xl space-y-4 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              CURRICULUM ARCHITECTURE
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Find the Right Programme for Your Stage
          </h1>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
            Explore Essence Mentorship’s training programmes for Pre-Law School, Bar Part I and Bar Part II students.
          </p>

          {/* Quick jump anchor row */}
          <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
            <a
              href="#bar-part-1"
              className="px-3.5 py-1.5 rounded-lg bg-[#07101C] border border-slate-800 text-[#CBD5E1] hover:text-white hover:border-slate-700 transition-colors"
            >
              01 · Bar Part I (₦300,000)
            </a>
            <a
              href="#bar-part-2"
              className="px-3.5 py-1.5 rounded-lg bg-[#07101C] border border-slate-800 text-[#CBD5E1] hover:text-white hover:border-slate-700 transition-colors"
            >
              02 · Bar Part II (₦300,000)
            </a>
            <a
              href="#pre-law-school"
              className="px-3.5 py-1.5 rounded-lg bg-[#07101C] border border-slate-800 text-[#CBD5E1] hover:text-white hover:border-slate-700 transition-colors"
            >
              03 · Pre-Law School (₦150,000)
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 1. BAR PART I SECTION                                                     */}
        {/* ========================================================================= */}
        <section
          id="bar-part-1"
          className="p-8 sm:p-12 rounded-3xl bg-[#07101C] border border-slate-800 space-y-10 scroll-mt-28"
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
                  {barPart1.label}
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
                {barPart1.title}
              </h2>
              <p className="text-base text-[#D6DEEA] leading-relaxed font-sans">
                “{barPart1.shortPositioning}”
              </p>
              <p className="text-xs text-[#94A3B8] font-sans">
                Designed for foreign-trained law graduates taking Bar Part I examinations before proceeding to Bar Part II.
              </p>
            </div>

            <div className="lg:text-right shrink-0 p-5 rounded-2xl bg-[#0A1425] border border-slate-800/80 space-y-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">
                  Programme Tuition
                </span>
                <span className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                  {barPart1.priceFormatted}
                </span>
                <span className="text-xs text-emerald-400 block mt-0.5">
                  Seven core subjects included
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onEnroll("bar-part-1")}
                  className="px-6 py-3 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>{barPart1.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleWhatsAppEnquiry(barPart1)}
                  className="px-4 py-2 bg-[#040811] hover:bg-slate-900 text-[#CBD5E1] hover:text-white rounded-xl text-xs font-medium border border-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ASK A QUESTION</span>
                </button>
              </div>
            </div>
          </div>

          {/* 7 Core Courses Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold font-mono">
                Seven Core Bar Part I Subjects:
              </span>
              <span className="text-xs font-mono text-[#B99A5B]">07 Subjects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {barPart1.courses.map((courseName, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0A1425] border border-slate-800 flex items-center gap-3.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#2768D8]/20 border border-blue-500/30 flex items-center justify-center text-xs font-mono font-bold text-[#4D91FF] shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {courseName}
                    </h3>
                    <span className="text-[11px] text-[#94A3B8] block">
                      Core Examination Focus
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. BAR PART II SECTION                                                    */}
        {/* ========================================================================= */}
        <section
          id="bar-part-2"
          className="p-8 sm:p-12 rounded-3xl bg-[#07101C] border border-slate-800 space-y-12 scroll-mt-28"
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
                  {barPart2.label}
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
                {barPart2.title}
              </h2>
              <p className="text-base text-[#D6DEEA] leading-relaxed font-sans">
                “{barPart2.shortPositioning}”
              </p>
              <p className="text-xs text-[#94A3B8] font-sans">
                Synchronized across all 7 Nigerian Law School campuses with drafting clinics, model answers, and procedure mastery.
              </p>
            </div>

            <div className="lg:text-right shrink-0 p-5 rounded-2xl bg-[#0A1425] border border-slate-800/80 space-y-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">
                  Programme Tuition
                </span>
                <span className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                  {barPart2.priceFormatted}
                </span>
                <span className="text-xs text-emerald-400 block mt-0.5">
                  Five core practice courses included
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onEnroll("bar-part-2")}
                  className="px-6 py-3 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>{barPart2.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleWhatsAppEnquiry(barPart2)}
                  className="px-4 py-2 bg-[#040811] hover:bg-slate-900 text-[#CBD5E1] hover:text-white rounded-xl text-xs font-medium border border-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ASK A QUESTION</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bar Part II 5 Courses Detail List */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold font-mono block">
              Five Core Bar Part II Practice Courses:
            </span>

            <div className="space-y-6">
              {COURSES.map((course) => (
                <div
                  key={course.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0A1425] border border-slate-800 hover:border-slate-700 transition-colors space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold text-[#4D91FF]">
                          COURSE {course.number} · {course.code}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-[11px] text-[#94A3B8]">Uniform National Syllabus</span>
                      </div>
                      <h3 className="font-serif-display text-2xl font-bold text-white mt-1">
                        {course.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(course)}
                      className="px-3.5 py-1.5 bg-[#07101C] hover:bg-slate-800 text-[#CBD5E1] hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto border border-slate-800"
                    >
                      View Syllabus Breakdown
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D6DEEA] leading-relaxed font-sans">
                    {course.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B99A5B] flex items-center gap-1.5 font-mono">
                        <span className="font-serif font-bold text-sm">§</span>
                        <span>Key Examination Drafting Focus</span>
                      </span>
                      <p className="text-xs text-[#E2E8F0] leading-relaxed">
                        {course.keyDraftingRequirements[0]}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4D91FF] flex items-center gap-1.5 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Core Examination Topics</span>
                      </span>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed">
                        {course.coreFocus.slice(0, 3).join(" • ")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PRE-LAW SCHOOL SECTION                                                 */}
        {/* ========================================================================= */}
        <section
          id="pre-law-school"
          className="p-8 sm:p-12 rounded-3xl bg-[#07101C] border border-slate-800 space-y-8 scroll-mt-28"
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
                  {preLaw.label}
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
                {preLaw.title}
              </h2>
              <p className="text-base text-[#D6DEEA] leading-relaxed font-sans">
                “{preLaw.shortPositioning}”
              </p>
              <p className="text-xs text-[#94A3B8] font-sans">
                {preLaw.supportingText}
              </p>
            </div>

            <div className="lg:text-right shrink-0 p-5 rounded-2xl bg-[#0A1425] border border-slate-800/80 space-y-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">
                  Programme Tuition
                </span>
                <span className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                  {preLaw.priceFormatted}
                </span>
                <span className="text-xs text-emerald-400 block mt-0.5">
                  Early foundational preparation
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onEnroll("pre-law-school")}
                  className="px-6 py-3 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>{preLaw.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleWhatsAppEnquiry(preLaw)}
                  className="px-4 py-2 bg-[#040811] hover:bg-slate-900 text-[#CBD5E1] hover:text-white rounded-xl text-xs font-medium border border-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ASK A QUESTION</span>
                </button>
              </div>
            </div>
          </div>

          {/* Curriculum Notice */}
          <div className="p-6 rounded-2xl bg-[#0A1425] border border-slate-800 flex items-start gap-4">
            <HelpCircle className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#CBD5E1] leading-relaxed">
              <span className="font-semibold text-white block text-sm">
                Curriculum Architecture
              </span>
              <p>
                {preLaw.curriculumNote}
              </p>
              <p className="text-[#94A3B8]">
                Topics focus on foundational orientation, study methodology, navigating legal volumes, and mental readiness for the rigorous Nigerian Law School environment.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* EDITORIAL TRANSITION / GUIDING VALUES                                     */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07101C] p-6 sm:p-10 rounded-3xl border border-slate-800">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800">
            <img
              src={campusCollaboratingImg}
              alt="Nigerian Law students collaborating on legal materials and drafting assignments"
              className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B99A5B] font-mono">
              <span>UNIFIED STANDARD OF EXCELLENCE</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Why We Bring Structure to Every Stage
            </h2>
            <p>
              Whether preparing before admission, building core doctrine in Bar Part I, or executing high-stakes procedural drafts in Bar Part II, success rewards students who organize their time, prioritize syllabus weight, and practice with model answers.
            </p>
            <p>
              Essence Mentorship eliminates isolation and replaces anxiety with clear, actionable weekly benchmarks.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> All 7 Campuses Supported
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct Mentor Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4D91FF]" /> Official OPay Bank Transfer
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for detailed Bar Part II Course deep dive */}
      <CourseDetailModal
        course={activeCourseModal}
        onClose={() => setActiveCourseModal(null)}
        onEnroll={() => {
          setActiveCourseModal(null);
          onEnroll("bar-part-2");
        }}
      />
    </div>
  );
};
