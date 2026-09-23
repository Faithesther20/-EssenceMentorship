/**
 * Frequently Asked Questions & Objection Handling
 */

export interface FAQItem {
  id: string;
  category: "Programme" | "Enrollment & Payment" | "Campus & Access";
  question: string;
  answer: string;
  isPolicyPlaceholder?: boolean;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Programme",
    question: "Is Essence Mentorship only for students who are struggling academically?",
    answer:
      "No. Essence Mentorship is built for any Nigerian Law School student who values structure, efficiency, and clarity. Whether you are aiming for top honours or feeling overwhelmed by the sheer volume of cases and statutes, our structured system ensures your preparation is strategic, disciplined, and examination-focused rather than random.",
  },
  {
    id: "faq-2",
    category: "Campus & Access",
    question: "Can I join from any Nigerian Law School campus?",
    answer:
      "Yes. The programme is designed to support students across all Nigerian Law School campuses—including Abuja (Bwari), Lagos, Enugu, Kano, Yenagoa, Yola, and Port Harcourt. Because curriculum requirements and Bar Finals examinations are centralized by the Council of Legal Education, our mentorship covers the uniform national syllabus with campus-specific nuances addressed where relevant.",
  },
  {
    id: "faq-3",
    category: "Programme",
    question: "Are sessions live, recorded, or both?",
    answer:
      "The programme combines structured instructional sessions with on-demand recorded materials and direct question-and-answer support. [Specific schedule frequency and live lecture timings to be confirmed by the administrator].",
    isPolicyPlaceholder: true,
  },
  {
    id: "faq-4",
    category: "Campus & Access",
    question: "How long will I have access to the materials and mentorship?",
    answer:
      "Enrolled students receive continuous mentorship and curriculum access through their preparation period up until the conclusion of their Bar Finals examinations. [Exact archival access duration to be specified by the administrator].",
    isPolicyPlaceholder: true,
  },
  {
    id: "faq-5",
    category: "Enrollment & Payment",
    question: "Can I pay in instalments?",
    answer:
      "The flagship enrollment price is ₦200,000 for the complete all-in-one 5-course mentorship bundle. If you require instalment options or special payment arrangements, please speak directly with our team on WhatsApp at +2348113853838 before enrolling.",
  },
  {
    id: "faq-6",
    category: "Enrollment & Payment",
    question: "What happens immediately after I make payment?",
    answer:
      "Upon successful payment via our secure Paystack checkout link, you will receive immediate automated confirmation. You will also be onboarded into the Essence Mentorship learning portal and added to our private student cohort channel where your mentorship orientation begins. [Detailed onboarding checklist to be finalized by the administrator].",
    isPolicyPlaceholder: true,
  },
  {
    id: "faq-7",
    category: "Campus & Access",
    question: "How do I access the programme resources?",
    answer:
      "All lecture resources, drafting templates, study checklists, and mentorship recordings are hosted in a dedicated, mobile-friendly student learning space accessible 24/7 on your smartphone, tablet, or laptop.",
  },
  {
    id: "faq-8",
    category: "Enrollment & Payment",
    question: "Can I speak with a mentor or team member before enrolling?",
    answer:
      "Absolutely. We encourage prospective students to reach out with any questions. You can chat with our team directly on WhatsApp (+2348113853838) to discuss your campus schedule, your specific study concerns, and how Essence Mentorship fits into your Law School routine.",
  },
  {
    id: "faq-9",
    category: "Programme",
    question: "Does the programme cover drafting for all five courses?",
    answer:
      "Yes. Drafting is one of the highest mark-yielding yet most penalized components of Bar Finals. We provide step-by-step drafting breakdowns for Criminal charges, Civil pleadings and motions, Corporate resolutions and agreements, Property deeds and contracts of sale, and Professional Ethics opinions and demand letters.",
  },
];
