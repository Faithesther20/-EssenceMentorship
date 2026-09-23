import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "navy";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "light",
  size = "md",
  withTagline = false,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base tracking-[0.16em]",
    md: "text-lg tracking-[0.18em]",
    lg: "text-2xl tracking-[0.2em]",
  };

  const subtextSizes = {
    sm: "text-[9px] tracking-[0.25em]",
    md: "text-[10px] tracking-[0.28em]",
    lg: "text-xs tracking-[0.3em]",
  };

  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Essence Legal Insignia */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0f2147] to-[#07101F] border border-[#2563EB]/40 shadow-sm shrink-0`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Outer classical frame */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="6"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          {/* Subtle gold corner accents */}
          <path d="M4 12V4H12" stroke="#C8A96B" strokeWidth="1.5" />
          <path d="M44 36V44H36" stroke="#C8A96B" strokeWidth="1.5" />
          {/* Stylized 'E' blended with scales of justice and pillars */}
          <path
            d="M16 13H32M16 13V35M16 35H32M16 24H28"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Delicate scales beam across the central bar */}
          <circle cx="28" cy="24" r="2" fill="#C8A96B" />
          <path
            d="M23 17L21 21M33 17L35 21"
            stroke="#60A5FA"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M19 21C19 22.5 23 22.5 23 21M33 21C33 22.5 37 22.5 37 21"
            stroke="#60A5FA"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif-display font-bold leading-none uppercase ${textSizes[size]} ${
            isLight ? "text-white" : "text-[#0B1426]"
          }`}
        >
          Essence
        </span>
        <span
          className={`font-sans font-semibold uppercase leading-tight ${subtextSizes[size]} ${
            isLight ? "text-[#93C5FD]" : "text-[#2563EB]"
          }`}
        >
          Mentorship
        </span>
        {withTagline && (
          <span
            className={`text-[9px] font-medium tracking-normal mt-0.5 ${
              isLight ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Nigerian Law School Preparation
          </span>
        )}
      </div>
    </div>
  );
};
