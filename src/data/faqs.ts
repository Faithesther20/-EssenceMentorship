/**
 * Frequently Asked Questions & Objection Handling for Essence Mentorship
 * Covers Pre-Law School, Bar Part I, Bar Part II, OPay Transfer, and WhatsApp Verification
 */

import {
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_WHATSAPP_NUMBER,
} from "./programmes";

export interface FAQItem {
  id: string;
  category: "Programme" | "Enrollment & Payment" | "Campus & Access";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-programmes",
    category: "Programme",
    question: "What programmes does Essence Mentorship offer?",
    answer:
      "Essence Mentorship currently offers three distinct training programmes:\n\n• Pre-Law School Programme (₦150,000) — Preparation for students before entering Law School.\n• Bar Part I Programme (₦300,000) — Strategic preparation across the seven core Bar Part I subjects.\n• Bar Part II Programme (₦300,000) — Structured mentorship across the five core Bar Part II practice courses.",
  },
  {
    id: "faq-price-bar-1",
    category: "Enrollment & Payment",
    question: "How much is Bar Part I?",
    answer:
      "The Bar Part I Programme is ₦300,000. It covers all seven foundational subjects: Commercial Law, Land Law, Constitutional Law, Law of Contract, Criminal Law, Law of Evidence, and Nigerian Legal System.",
  },
  {
    id: "faq-price-bar-2",
    category: "Enrollment & Payment",
    question: "How much is Bar Part II?",
    answer:
      "The Bar Part II Programme is ₦300,000. It covers all five core practice courses: Criminal Litigation, Civil Litigation, Corporate Law Practice, Property Law Practice, and Professional Ethics & Skills.",
  },
  {
    id: "faq-price-pre-law",
    category: "Enrollment & Payment",
    question: "How much is the Pre-Law School Programme?",
    answer:
      "The Pre-Law School Programme is ₦150,000. It is designed to help prospective students strengthen their legal foundation, understand what lies ahead, and enter Nigerian Law School with greater clarity and direction.",
  },
  {
    id: "faq-how-payment",
    category: "Enrollment & Payment",
    question: "How do I make payment?",
    answer: `Payment is currently made through bank transfer to the official ${PAYMENT_BANK} account displayed during enrollment:\n\nBank: ${PAYMENT_BANK}\nAccount Number: ${PAYMENT_ACCOUNT_NUMBER}\nAccount Name: ${PAYMENT_ACCOUNT_NAME}`,
  },
  {
    id: "faq-after-payment",
    category: "Enrollment & Payment",
    question: "What happens after payment?",
    answer: `After completing your transfer, send your receipt/proof of payment through the official Essence Mentorship WhatsApp number (${PAYMENT_WHATSAPP_NUMBER}) for confirmation and onboarding.`,
  },
  {
    id: "faq-official-account",
    category: "Enrollment & Payment",
    question: "What is the official payment account?",
    answer: `Please ensure payments are made exclusively to our official account:\n\nBank: ${PAYMENT_BANK}\nAccount Number: ${PAYMENT_ACCOUNT_NUMBER}\nAccount Name: ${PAYMENT_ACCOUNT_NAME}`,
  },
  {
    id: "faq-where-send-proof",
    category: "Enrollment & Payment",
    question: "Where do I send proof of payment?",
    answer: `Send proof of payment directly to our official WhatsApp helpline at ${PAYMENT_WHATSAPP_NUMBER}. Once received, our team will verify your payment and provide your onboarding details.`,
  },
  {
    id: "faq-campus-coverage",
    category: "Campus & Access",
    question: "Can I join from any Nigerian Law School campus?",
    answer:
      "Yes. The Bar Part II Programme supports students across all Nigerian Law School campuses—including Abuja (Bwari), Lagos, Enugu, Kano, Yenagoa, Yola, and Port Harcourt. Curriculum requirements and Bar Finals examinations are centralized by the Council of Legal Education, so instruction covers the uniform national syllabus.",
  },
  {
    id: "faq-speak-mentor",
    category: "Enrollment & Payment",
    question: "Can I speak with a mentor or team member before enrolling?",
    answer: `Absolutely. We encourage prospective students to reach out with any questions. You can chat with our team directly on WhatsApp (${PAYMENT_WHATSAPP_NUMBER}) to discuss your stage, your study concerns, and which programme best aligns with your goals.`,
  },
  {
    id: "faq-struggling",
    category: "Programme",
    question: "Is Essence Mentorship only for students who are struggling academically?",
    answer:
      "No. Essence Mentorship is built for any student who values structure, efficiency, and clarity. Whether you are aiming for top honours or navigating the volume of statutory rules and procedural drafting, our structured system ensures your preparation is strategic, disciplined, and directed.",
  },
];
