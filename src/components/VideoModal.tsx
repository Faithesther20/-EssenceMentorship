import React, { useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Award, BookOpen } from "lucide-react";
import { Testimonial } from "../data/testimonials";

interface VideoModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ testimonial, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(42);

  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#07101C] border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#0A1425]">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">{testimonial.studentName}</span>
            <span className="text-[#94A3B8]">· {testimonial.nlsCampus}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-[#050B14] flex flex-col items-center justify-center overflow-hidden group">
          {/* Subtle Ambient Video Visualizer / Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1425] via-[#0E1A33] to-[#07101C] opacity-90" />

          {/* Central Animated Narrative Card */}
          <div className="relative z-10 max-w-md px-6 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-medium font-mono">
              <Award className="w-3.5 h-3.5 text-[#B99A5B]" />
              <span>{testimonial.courseHighlight || "Bar Finals Mentorship"}</span>
            </div>

            <p className="font-serif-display text-lg md:text-xl text-white font-medium leading-relaxed italic">
              {testimonial.headline}
            </p>

            <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans line-clamp-3">
              {testimonial.content}
            </p>

            <span className="inline-block text-[11px] text-emerald-400 font-medium">
              Verified Candidate Testimonial · {testimonial.nlsCampus}
            </span>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
            {/* Scrubber */}
            <div
              className="w-full h-1.5 bg-slate-700/80 rounded-full cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.round((clickX / rect.width) * 100);
                setProgress(Math.max(0, Math.min(100, newProgress)));
              }}
            >
              <div
                className="h-full bg-[#2768D8] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-blue-400 p-1 transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-slate-300 hover:text-white p-1 transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-[11px] tabular-nums text-[#94A3B8]">
                  {isPlaying ? "0:43" : "0:00"} / {testimonial.videoDuration || "2:10"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#94A3B8] font-sans">{testimonial.cohort}</span>
                <Maximize2 className="w-3.5 h-3.5 text-[#94A3B8] cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Caption */}
        <div className="p-4 bg-[#0A1425] border-t border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#4D91FF] shrink-0" />
            <span className="text-[#CBD5E1]">{testimonial.videoCaption || testimonial.headline}</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#CBD5E1] hover:text-white text-xs font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
