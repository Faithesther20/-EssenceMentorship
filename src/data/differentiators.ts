/**
 * Core Pillars & Programme Differentiators
 */

export interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  studentAdvantage: string;
}

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Learn",
    tagline: "Principles Made Clear",
    description:
      "Understand complex legal doctrines and statutory provisions through structured, conceptual teaching rather than rote memorization.",
    studentAdvantage: "Move past superficial reading to deep, exam-ready comprehension of core statutory frameworks.",
  },
  {
    number: "02",
    title: "Apply",
    tagline: "Drafting & Scenarios",
    description:
      "Bridge the critical gap between theoretical knowledge and practical execution. Learn how to draft flawless legal processes and tackle multi-issue Bar Finals questions.",
    studentAdvantage: "Develop muscle memory for procedural rules, statutory requirements, and formal drafting anatomy.",
  },
  {
    number: "03",
    title: "Practice",
    tagline: "Exam Technique & Retention",
    description:
      "Strengthen retention and examination speed with targeted drills, issue-spotting exercises, and structured answer formulations using the proven IRAC approach.",
    studentAdvantage: "Overcome exam anxiety by practicing under realistic conditions with immediate feedback.",
  },
  {
    number: "04",
    title: "Get Mentored",
    tagline: "Guidance & Accountability",
    description:
      "Never study in an isolated vacuum. Ask pressing questions, clear up nagging confusion, and stay aligned with a disciplined preparation cadence alongside dedicated mentors.",
    studentAdvantage: "Direct access to mentors who understand the exact pressures and demands of Nigerian Law School.",
  },
];

export interface Differentiator {
  title: string;
  problemSolved: string;
  essenceApproach: string;
  isConfirmed: boolean;
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "All Five Core Courses in One System",
    problemSolved: "Scattering energy across disconnected tutors, disjointed notes, and conflicting methodologies.",
    essenceApproach: "A unified, synchronized learning architecture covering Criminal, Civil, Corporate, Property, and Ethics under one cohesive preparation standard.",
    isConfirmed: true,
  },
  {
    title: "Rigorous Drafting Mastery",
    problemSolved: "Losing automatic 10–15 marks per question due to missing statutory recitals, wrong testatums, or flawed charge headings.",
    essenceApproach: "Formulaic, step-by-step drafting breakdowns for every mandatory legal document across all 5 courses.",
    isConfirmed: true,
  },
  {
    title: "Structured Preparation Cadence",
    problemSolved: "Studying hard for 14 hours a day without knowing whether you are actually covering what Bar Finals examiners test.",
    essenceApproach: "A strategic roadmap that prioritizes high-yield statutory areas, core procedural steps, and recurrent Bar examination traps.",
    isConfirmed: true,
  },
  {
    title: "Dedicated Mentorship & Q&A Support",
    problemSolved: "Sitting with confusion for weeks because Law School lecture halls are too fast or overcrowded to get personal clarification.",
    essenceApproach: "Direct channel to seek clarification, review tricky legal points, and receive guidance from mentors who have passed the Bar.",
    isConfirmed: true,
  },
  {
    title: "Practical Examination Technique",
    problemSolved: "Knowing the law thoroughly in your head but failing to present it clearly on the examination paper within 3 hours.",
    essenceApproach: "Issue-spotting frameworks and concise IRAC structuring that enables examiners to award marks quickly and cleanly.",
    isConfirmed: true,
  },
];
