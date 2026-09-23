/**
 * Central Configuration for Essence Mentorship
 * All key URLs, prices, and contact details are centralized here.
 */

export const BRAND_NAME = "Essence Mentorship";
export const BRAND_TAGLINE = "Structured Mentorship & Academic Support for Nigerian Law School Students";

// Flagship Offer Price
export const PROGRAMME_PRICE = "₦200,000";
export const PROGRAMME_PRICE_RAW = 200000;
export const PROGRAMME_CURRENCY = "NGN";

// Primary Conversion Goal - Paystack Enrollment URL
// Replace with the live Paystack Payment Page URL provided by the administrator
export const PAYSTACK_ENROLLMENT_URL = "https://paystack.com/pay/essence-mentorship-nls";

// Secondary Conversion Goal - WhatsApp
export const WHATSAPP_NUMBER = "+2348113853838";
export const WHATSAPP_RAW_NUMBER = "2348113853838";

export const WHATSAPP_ENQUIRY_MESSAGE = 
  "Hello Essence Mentorship, I am interested in the ₦200,000 Nigerian Law School mentorship bundle and would like to make an enquiry.";

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
  | "contact_submit";

export const trackAnalyticsEvent = (event: AnalyticsEvent, payload?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    // Dispatches to custom event and window dataLayer if configured
    const win = window as any;
    if (win.dataLayer) {
      win.dataLayer.push({ event, ...payload, timestamp: new Date().toISOString() });
    }
    // Also dispatch DOM event for any embedded pixel listeners
    window.dispatchEvent(new CustomEvent("essence_track", { detail: { event, ...payload } }));
  }
};
