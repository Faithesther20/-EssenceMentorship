/**
 * Mentors & Instructors Data
 * In accordance with strict credibility guidelines, mentor profiles feature
 * transparent, dignified placeholders ready for administrator updates.
 */

export interface Mentor {
  id: string;
  name: string;
  displayTitle: string;
  qualification: string;
  yearOfCall: string;
  specialization: string;
  biography: string;
  linkedInUrl?: string;
  isPlaceholder: boolean;
  assignedCourse: string;
}

export const MENTORS: Mentor[] = [
  {
    id: "mentor-litigation-lead",
    name: "[Lead Litigation Mentor - Name to be supplied]",
    displayTitle: "Lead Mentor · Civil & Criminal Litigation",
    qualification: "LL.B (Hons), B.L, LL.M",
    yearOfCall: "[Year of Call to Nigerian Bar to be supplied]",
    specialization: "Civil Litigation, Criminal Procedure, Appellate Advocacy",
    biography:
      "Experienced legal practitioner with extensive Nigerian court practice. Directs our litigation modules, emphasizing procedural precision, drafting mastery, and structured IRAC exam problem resolution.",
    linkedInUrl: "https://linkedin.com",
    isPlaceholder: true,
    assignedCourse: "Civil & Criminal Litigation",
  },
  {
    id: "mentor-corporate-lead",
    name: "[Corporate Practice Mentor - Name to be supplied]",
    displayTitle: "Senior Mentor · Corporate Law Practice",
    qualification: "LL.B (Hons), B.L, ACIS",
    yearOfCall: "[Year of Call to Nigerian Bar to be supplied]",
    specialization: "CAMA 2020 Compliance, Corporate Restructuring, Capital Markets",
    biography:
      "Corporate counsel and governance specialist guiding candidates through the modern practicalities of CAMA 2020, CAC filings, regulatory compliance, and high-scoring corporate drafting formats.",
    linkedInUrl: "https://linkedin.com",
    isPlaceholder: true,
    assignedCourse: "Corporate Law Practice",
  },
  {
    id: "mentor-property-lead",
    name: "[Property & Conveyancing Mentor - Name to be supplied]",
    displayTitle: "Mentor · Property Law Practice",
    qualification: "LL.B (Hons), B.L",
    yearOfCall: "[Year of Call to Nigerian Bar to be supplied]",
    specialization: "Conveyancing, Title Perfection, Land Use Act, Wills & Probate",
    biography:
      "Conveyancing and property documentation expert. Dedicated to breaking down complex deed anatomy, consent requirements under the Land Use Act, and error-free drafting techniques for Bar Finals.",
    linkedInUrl: "https://linkedin.com",
    isPlaceholder: true,
    assignedCourse: "Property Law Practice",
  },
  {
    id: "mentor-ethics-lead",
    name: "[Professional Ethics & Skills Mentor - Name to be supplied]",
    displayTitle: "Mentor · Professional Ethics & Lawyering Skills",
    qualification: "LL.B (Hons), B.L",
    yearOfCall: "[Year of Call to Nigerian Bar to be supplied]",
    specialization: "Rules of Professional Conduct (RPC 2023), Legal Drafting & Opinion Writing",
    biography:
      "Passionate about raising ethical, well-grounded legal practitioners. Guides candidates on professional discipline, NBA standards, LPDC jurisprudence, and flawless client opinion drafting.",
    linkedInUrl: "https://linkedin.com",
    isPlaceholder: true,
    assignedCourse: "Professional Ethics & Skills",
  },
];
