import React from "react";
import { ArrowRight, Scale, BookOpen, Compass, ShieldCheck } from "lucide-react";
import { MENTORS } from "../data/mentors";
import { WhatsAppButton } from "../components/WhatsAppButton";
import mentorTeachingImg from "../assets/images/mentor_teaching_students_1790158503154.jpg";

interface AboutPageProps {
  onEnroll: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onEnroll }) => {
  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              OUR MISSION & PURPOSE
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            We Believe Capable Students Shouldn’t Have to Navigate Law School Alone.
          </h1>

          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
            Every year, thousands of capable Nigerian law graduates and prospective students encounter an intense volume of doctrine, statutory distinctions, and procedural drafting demands. Essence Mentorship was founded to bring structure, calm, and strategic methodology across every stage—from Pre-Law School through Bar Part I and Bar Part II.
          </p>
        </section>

        {/* Editorial Photo & Vision Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[16/10] bg-[#07101C]">
            <img
              src={mentorTeachingImg}
              alt="Nigerian legal mentorship consultation in modern law chambers"
              className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm text-[#CBD5E1] font-sans leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4D91FF] font-mono">
                THE PROBLEM WE SOLVE
              </span>
              <h2 className="font-serif-display text-2xl font-bold text-white">
                Moving from Information Overload to Examination Precision
              </h2>
            </div>

            <p>
              In Nigerian legal training, succeeding is less about reading 16 hours a day without direction and far more about understanding exactly what examiners expect: precise statutory references, issue spotting, and disciplined procedural drafting.
            </p>

            <p>
              When students prepare in isolation, doubts fester. Misconceptions in drafting charges or civil motions go unnoticed until the examination hall. Essence Mentorship provides the feedback loop and structured timetable that eliminates guesswork.
            </p>

            <div className="p-4 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#CBD5E1]">
              <span className="font-semibold text-white block mb-1">
                Founded on Practical Experience:
              </span>
              Built by Nigerian legal practitioners who excelled through the Bar Finals system, Essence Mentorship delivers structured guidance grounded in what actually works in the examination hall.
            </div>
          </div>
        </section>

        {/* Teaching & Mentorship Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-[#4D91FF]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-xl font-bold text-white">
              Our Teaching Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans">
              We reject rote memorization without context. We teach legal practice as an interconnected system. When a candidate understands <em>why</em> a rule exists—such as why a frontloaded statement of claim requires a verifying affidavit or why an ex-parte injunction carries mandatory undertakings as to damages—they no longer struggle to remember it under exam conditions.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-[#B99A5B]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-xl font-bold text-white">
              Our Mentorship Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans">
              Mentorship is not passive broadcasting. It is active guidance, accountability, and psychological reassurance. Law School triggers intense anxiety. Having accessible mentors who have conquered the Bar and can clarify tricky doubts within hours changes a student’s entire preparation trajectory.
            </p>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#B99A5B] font-mono">
              THE FACULTY & MENTORS
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Practicing Legal Minds Dedicated to Your Preparation
            </h2>
            <p className="text-sm text-[#CBD5E1] font-sans">
              Experienced mentors guiding your preparation across Pre-Law School, Bar Part I, and Bar Part II.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENTORS.map((m) => (
              <div
                key={m.id}
                className="p-6 rounded-2xl bg-[#07101C] border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1425] border border-slate-700 flex items-center justify-center text-[#B99A5B]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-base font-bold text-white">
                      {m.name}
                    </h4>
                    <span className="text-xs text-[#4D91FF] font-medium block">
                      {m.displayTitle}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                      {m.qualification}
                    </span>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {m.biography}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-400/90 font-medium">
                  Active Faculty · Cohort Mentor
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-8 sm:p-12 rounded-2xl bg-[#07101C] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Ready to Prepare with Structure and Guidance?
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans max-w-xl">
              Choose from our three training programmes (from ₦150,000) or ask our team a question on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onEnroll}
              className="px-6 py-3.5 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center gap-2 border border-blue-400/30"
            >
              <span>Enroll Now — View Programmes</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <WhatsAppButton label="Ask a Question" size="md" variant="outline" />
          </div>
        </section>
      </div>
    </div>
  );
};
