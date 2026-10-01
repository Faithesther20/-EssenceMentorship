/**
 * Central Configuration for Essence Mentorship
 * All key URLs, contact details, and payment constants are centralized here.
 */

import {
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_WHATSAPP_NUMBER,
  PAYMENT_WHATSAPP_RAW,
  PROGRAMMES,
  ProgrammeId,
  Programme,
  getPaymentProofWhatsAppUrl,
  getProgrammeEnquiryWhatsAppUrl,
} from "../data/programmes";

export {
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_WHATSAPP_NUMBER,
  PAYMENT_WHATSAPP_RAW,
  PROGRAMMES,
  getPaymentProofWhatsAppUrl,
  getProgrammeEnquiryWhatsAppUrl,
};
export type { ProgrammeId, Programme };

export const BRAND_NAME = "Essence Mentorship";
export const BRAND_TAGLINE =
  "Structured Legal Education & Mentorship for Pre-Law School, Bar Part I & Bar Part II Students";

// Official WhatsApp
export const WHATSAPP_NUMBER = PAYMENT_WHATSAPP_NUMBER;
export const WHATSAPP_RAW_NUMBER = PAYMENT_WHATSAPP_RAW;

export const WHATSAPP_ENQUIRY_MESSAGE =
  "Hello Essence Mentorship, I would like to enquire about your programmes.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_ENQUIRY_MESSAGE
)}`;

export const CONTACT_EMAIL = "enquiries@essencementorship.com";

export const NIGERIAN_LAW_SCHOOL_CAMPUSES = [
  "Abuja (Bwari Campus - Headquarters)",
  "Lagos (Victoria Island Campus)",
  "Enugu (Agobani Campus)",
  "Kano (Bagauda Campus)",
  "Yenagoa (Bayelsa Campus)",
  "Yola (Adamawa Campus)",
  "Port Harcourt (Rivers Campus)",
] as const;

export const SOCIAL_LINKS = {
  whatsapp: WHATSAPP_URL,
  linkedin: "https://linkedin.com/company/essence-mentorship",
  instagram: "https://instagram.com/essencementorship",
  twitter: "https://twitter.com/essencementor",
};

/**
 * Analytics tracking dispatcher for conversion funnels
 */
export type AnalyticsEvent =
  | "hero_enroll"
  | "navbar_enroll"
  | "pricing_enroll"
  | "final_cta_enroll"
  | "mobile_sticky_enroll"
  | "programme_enroll"
  | "whatsapp_enquiry"
  | "testimonial_view"
  | "programme_view"
  | "faq_view"
  | "contact_submit"
  | "copy_account_number"
  | "send_payment_proof";

export const trackAnalyticsEvent = (
  event: AnalyticsEvent,
  payload?: Record<string, unknown>
) => {
  if (typeof window !== "undefined") {
    const win = window as any;
    if (win.dataLayer) {
      win.dataLayer.push({
        event,
        ...payload,
        timestamp: new Date().toISOString(),
      });
    }
    window.dispatchEvent(
      new CustomEvent("essence_track", { detail: { event, ...payload } })
    );
  }
};
