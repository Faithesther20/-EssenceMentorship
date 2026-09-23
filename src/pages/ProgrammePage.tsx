import React, { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Scale, BookOpen } from "lucide-react";
import { COURSES, Course } from "../data/courses";
import { PROGRAMME_PRICE } from "../config/siteConfig";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CourseDetailModal } from "../components/CourseDetailModal";
import campusCollaboratingImg from "../assets/images/students_collaborating_campus_1790158513605.jpg";

interface ProgrammePageProps {
  onEnroll: () => void;
}

export const ProgrammePage: React.FC<ProgrammePageProps> = ({ onEnroll }) => {
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              CURRICULUM ARCHITECTURE
            </span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            The Five Core Courses. One Unified Preparation Standard.
          </h1>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
            Detailed, synchronized instruction across every statutory requirement, procedural stage, and drafting technique tested in Nigerian Law School Bar Finals.
          </p>
        </section>

        {/* Editorial Still Life & Curriculum Overview Banner */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07101C] p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800">
            <img
              src={campusCollaboratingImg}
              alt="Nigerian Law students collaborating on legal materials and drafting assignments"
              className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B99A5B] font-mono">
              <span>COHESIVE LEARNING SYSTEM</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-white">
              Why We Do Not Teach Courses in Isolation
            </h2>
            <p>
              In practice and in Bar Finals questions, civil procedure connects with corporate governance; property transactions intersect with stamp duties and ethics; criminal trials test evidence and constitutional rights. Essence Mentorship harmonizes all 5 courses under a single strategic framework.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> All 7 Campuses
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Uniform CLE Syllabus
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4D91FF]" /> Complete Bundle: {PROGRAMME_PRICE}
              </span>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown for each of the 5 Courses */}
        <section className="space-y-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#07101C] border border-slate-800 hover:border-slate-700 transition-colors space-y-8"
            >
              {/* Top Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#4D91FF]">
                      COURSE {course.number} · {course.code}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-[#94A3B8] font-medium">Uniform National Syllabus</span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                    {course.name}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveCourseModal(course)}
                  className="px-4 py-2 bg-[#0A1425] hover:bg-slate-800 text-[#CBD5E1] hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer self-start md:self-auto border border-slate-800"
                >
                  Quick Syllabus Card
                </button>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Col 1: Why it matters */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#4D91FF] flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    Why This Course Matters
                  </span>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans">
                    {course.whyItMatters}
                  </p>
                </div>

                {/* Col 2: Core modules */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-white flex items-center gap-1.5 font-mono">
                    <Scale className="w-3.5 h-3.5 text-[#B99A5B]" />
                    Core Modules Covered
                  </span>
                  <ul className="space-y-2 text-xs text-[#CBD5E1] font-sans">
                    {course.coreFocus.slice(0, 4).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3: Drafting & Exam technique */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#B99A5B] flex items-center gap-1.5 font-mono">
                    <FileText className="w-3.5 h-3.5" />
                    Mandatory Drafting Focus
                  </span>
                  <ul className="space-y-2 text-xs text-[#CBD5E1] font-sans">
                    {course.keyDraftingRequirements.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#B99A5B] font-serif font-bold text-sm leading-none">§</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Real Cohort Note (No placeholder bracket text) */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
                <span>
                  Full cohort calendar and mentor office hours published upon enrollment.
                </span>
                <span className="font-semibold text-[#CBD5E1]">
                  Included in Flagship Mentorship Bundle
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom Offer Conversion Section */}
        <section className="p-8 sm:p-12 rounded-2xl bg-[#07101C] border border-slate-800 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A5B] font-mono">
              ONE COMPLETE PACKAGE
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              Complete Flagship Bundle — {PROGRAMME_PRICE}
            </h2>
            <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed">
              Gain full, synchronized mentorship across all 5 courses, drafting checklists, and continuous mentor question support through Bar Finals.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onEnroll}
              className="w-full sm:w-auto px-8 py-4 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2 border border-blue-400/30"
            >
              <span>ENROLL IN COMPLETE BUNDLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <WhatsAppButton label="Ask a Question" size="lg" variant="outline" />
          </div>
        </section>
      </div>

      <CourseDetailModal
        course={activeCourseModal}
        onClose={() => setActiveCourseModal(null)}
        onEnroll={onEnroll}
      />
    </div>
  );
};
