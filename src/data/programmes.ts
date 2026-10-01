/**
 * Centralized Programmes and Payment Configuration for Essence Mentorship
 * Three Distinct Training Programmes: Bar Part I, Bar Part II, and Pre-Law School
 */

export type ProgrammeId = "bar-part-1" | "bar-part-2" | "pre-law-school";

export interface Programme {
  id: ProgrammeId;
  name: string;
  title: string;
  label: string;
  price: number;
  priceFormatted: string;
  audience: string;
  shortPositioning: string;
  supportingText: string;
  courses: string[];
  curriculumNote?: string;
  ctaText: string;
  whatsappEnquiryMessage: string;
  paymentProofMessage: string;
}

// Payment Credentials (OPay Bank Transfer)
export const PAYMENT_BANK = "OPay";
export const PAYMENT_ACCOUNT_NUMBER = "8113853838";
export const PAYMENT_ACCOUNT_NAME = "Tobechukwu Okoroma";
export const PAYMENT_WHATSAPP_NUMBER = "+2348113853838";
export const PAYMENT_WHATSAPP_RAW = "2348113853838";

export const PROGRAMMES: Programme[] = [
  {
    id: "bar-part-1",
    name: "Bar Part I",
    title: "Bar Part I Programme",
    label: "FOR BAR PART I STUDENTS",
    price: 300000,
    priceFormatted: "₦300,000",
    audience: "For graduates of foreign universities and Bar Part I candidates",
    shortPositioning:
      "Build a strong legal foundation and prepare strategically across the seven core Bar Part I subjects.",
    supportingText:
      "Structured preparation across seven foundational law courses.",
    courses: [
      "Commercial Law",
      "Land Law",
      "Constitutional Law",
      "Law of Contract",
      "Criminal Law",
      "Law of Evidence",
      "Nigerian Legal System",
    ],
    ctaText: "ENROLL IN BAR PART I",
    whatsappEnquiryMessage:
      "Hello Essence Mentorship, I would like to know more about the Bar Part I Programme.",
    paymentProofMessage:
      "Hello Essence Mentorship, I have made payment for the Bar Part I Programme and would like to send my proof of payment.",
  },
  {
    id: "bar-part-2",
    name: "Bar Part II",
    title: "Bar Part II Programme",
    label: "FOR BAR PART II STUDENTS",
    price: 300000,
    priceFormatted: "₦300,000",
    audience: "For Nigerian Law School Bar Part II / Bar Finals candidates",
    shortPositioning:
      "Structured mentorship and preparation across the five core Bar Part II courses.",
    supportingText:
      "Focused mentorship across the five core Bar Part II practice courses.",
    courses: [
      "Criminal Litigation",
      "Civil Litigation",
      "Corporate Law Practice",
      "Property Law Practice",
      "Professional Ethics & Skills",
    ],
    ctaText: "ENROLL IN BAR PART II",
    whatsappEnquiryMessage:
      "Hello Essence Mentorship, I would like to know more about the Bar Part II Programme.",
    paymentProofMessage:
      "Hello Essence Mentorship, I have made payment for the Bar Part II Programme and would like to send my proof of payment.",
  },
  {
    id: "pre-law-school",
    name: "Pre-Law School",
    title: "Pre-Law School Programme",
    label: "BEFORE LAW SCHOOL",
    price: 150000,
    priceFormatted: "₦150,000",
    audience: "For prospective students preparing before entering Law School",
    shortPositioning:
      "Prepare before Law School begins with a structured programme designed to help you strengthen your foundation, understand what lies ahead and approach the next stage with greater confidence.",
    supportingText:
      "Start preparing before Law School begins and enter the next stage with greater clarity and direction.",
    courses: [],
    curriculumNote:
      "Programme curriculum will be provided during enquiry/onboarding.",
    ctaText: "ENROLL IN PRE-LAW SCHOOL",
    whatsappEnquiryMessage:
      "Hello Essence Mentorship, I would like to know more about the Pre-Law School Programme.",
    paymentProofMessage:
      "Hello Essence Mentorship, I have made payment for the Pre-Law School Programme and would like to send my proof of payment.",
  },
];

/**
 * Generate a WhatsApp URL for payment proof submission
 */
export const getPaymentProofWhatsAppUrl = (programmeTitle: string): string => {
  const message = `Hello Essence Mentorship, I have made payment for the ${programmeTitle} and would like to send my proof of payment.`;
  return `https://wa.me/${PAYMENT_WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate a WhatsApp URL for specific programme enquiry
 */
export const getProgrammeEnquiryWhatsAppUrl = (programmeTitle: string): string => {
  const message = `Hello Essence Mentorship, I would like to know more about the ${programmeTitle}.`;
  return `https://wa.me/${PAYMENT_WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
};
