import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, trackAnalyticsEvent } from "../config/siteConfig";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "outline" | "solid" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  label?: string;
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = "",
  variant = "outline",
  size = "md",
  label = "Ask a Question",
  customMessage,
}) => {
  const targetUrl = customMessage
    ? `https://wa.me/2348113853838?text=${encodeURIComponent(customMessage)}`
    : WHATSAPP_URL;

  const handleClick = () => {
    trackAnalyticsEvent("whatsapp_enquiry", { label, context: "button_click" });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap rounded-lg";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-sm gap-2",
    lg: "px-6 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    outline:
      "border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-sm",
    solid:
      "bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-semibold shadow-sm hover:shadow",
    ghost:
      "text-slate-300 hover:text-white hover:bg-slate-800/40",
    link:
      "text-slate-300 hover:text-white underline underline-offset-4 p-0",
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={`${label} via WhatsApp`}
    >
      <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};
