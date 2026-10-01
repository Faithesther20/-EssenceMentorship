import React from "react";
import { X, CheckCircle2, FileText, Compass, AlertCircle } from "lucide-react";
import { Course } from "../data/courses";

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#07101C] border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-slate-800 bg-[#0A1425]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#4D91FF] bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
              COURSE {course.number} · {course.code}
            </span>
            <h3 className="font-serif-display text-xl text-white font-bold">
              {course.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Summary */}
          <div className="p-4 rounded-xl bg-[#0A1425] border border-slate-800 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#4D91FF] font-semibold font-mono">
              Course Scope & Why It Matters
            </span>
            <p className="text-[#CBD5E1] leading-relaxed font-sans">{course.whyItMatters}</p>
          </div>

          {/* Core Focus Modules */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Compass className="w-4 h-4 text-[#4D91FF]" />
              <span>Core Subject Modules & Statutory Frameworks</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {course.coreFocus.map((focus, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0A1425] border border-slate-800 text-xs text-[#CBD5E1]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drafting Requirements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <FileText className="w-4 h-4 text-[#B99A5B]" />
              <span>Mandatory Bar Finals Drafting Masterclasses</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.keyDraftingRequirements.map((draft, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/30 text-xs text-[#E2E8F0] flex items-start gap-2"
                >
                  <span className="text-[#B99A5B] font-serif font-bold text-sm">§</span>
                  <span className="leading-relaxed">{draft}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Technique Strategy */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/50 space-y-2">
            <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5 text-[#4D91FF]" />
              <span>Bar Finals Examination Technique</span>
            </span>
            <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
              {course.examinationTechnique}
            </p>
          </div>

          {course.administratorNote && (
            <div className="p-3 rounded-xl bg-[#0A1425] border border-slate-800 text-xs text-[#94A3B8]">
              {course.administratorNote}
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="sticky bottom-0 z-10 p-4 border-t border-slate-800 bg-[#0A1425] flex items-center justify-between gap-4">
          <div className="text-xs text-[#CBD5E1]">
            <span>Part of Bar Part II Programme: </span>
            <strong className="text-white font-bold font-mono">₦300,000</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onEnroll();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#2768D8] hover:bg-[#1E56B5] text-white text-xs font-semibold uppercase tracking-wider shadow-md cursor-pointer transition-colors border border-blue-400/30"
          >
            Enroll in Bar Part II
          </button>
        </div>
      </div>
    </div>
  );
};
