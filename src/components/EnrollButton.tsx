import React from "react";
import { ArrowRight } from "lucide-react";
import { trackAnalyticsEvent, AnalyticsEvent } from "../config/siteConfig";
import { ProgrammeId, PROGRAMMES } from "../data/programmes";

interface EnrollButtonProps {
  source: AnalyticsEvent;
  programmeId?: ProgrammeId;
  className?: string;
  variant?: "primary" | "secondary" | "subtle" | "dark";
  size?: "sm" | "md" | "lg";
  showPrice?: boolean;
  label?: string;
  onClick?: () => void;
  onNavigateToEnroll?: (programmeId?: ProgrammeId) => void;
}

export const EnrollButton: React.FC<EnrollButtonProps> = ({
  source,
  programmeId,
  className = "",
  variant = "primary",
  size = "md",
  showPrice = false,
  label = "ENROLL NOW",
  onClick,
  onNavigateToEnroll,
}) => {
  const programme = programmeId
    ? PROGRAMMES.find((p) => p.id === programmeId)
    : undefined;

  const handleClick = (e: React.MouseEvent) => {
    trackAnalyticsEvent(source, {
      programme: programme?.title || "all",
      target: "enroll_page",
    });

    if (onClick) {
      onClick();
      return;
    }

    if (onNavigateToEnroll) {
      e.preventDefault();
      onNavigateToEnroll(programmeId);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2768D8] focus-visible:ring-offset-2 whitespace-nowrap rounded-xl";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#2768D8] hover:bg-[#1E56B5] text-white shadow-md shadow-blue-900/30 hover:shadow-lg hover:shadow-blue-900/40 border border-blue-400/20",
    secondary:
      "bg-white hover:bg-slate-50 text-[#0B1426] border border-slate-200 shadow-sm hover:shadow",
    subtle:
      "bg-blue-950/60 hover:bg-blue-900/80 text-blue-200 border border-blue-800/60",
    dark:
      "bg-[#0B1426] hover:bg-[#07101F] text-white border border-slate-700 shadow-sm",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={label}
    >
      <span>
        {label}
        {showPrice && programme && (
          <span className="ml-1.5 opacity-90 font-mono font-normal">
            ({programme.priceFormatted})
          </span>
        )}
      </span>
      <ArrowRight
        className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </button>
  );
};
