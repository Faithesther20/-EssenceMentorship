/**
 * Five Core Nigerian Law School Courses
 */

export interface Course {
  id: string;
  number: string;
  name: string;
  code: string;
  summary: string;
  whyItMatters: string;
  coreFocus: string[];
  keyDraftingRequirements: string[];
  examinationTechnique: string;
  administratorNote?: string;
}

export const COURSES: Course[] = [
  {
    id: "criminal-litigation",
    number: "01",
    name: "Criminal Litigation",
    code: "CLS",
    summary:
      "Strengthen your understanding of criminal procedure, advocacy, drafting and the practical application of criminal litigation principles.",
    whyItMatters:
      "From arrest and bail to charge drafting, trial proceedings, judgment and appeals, Criminal Litigation tests precision. A procedural slip in a charge or missing statutory element costs critical Bar Finals marks.",
    coreFocus: [
      "Constitutional safeguards & pre-trial rights (Arrest, Search, Confessions, Bail)",
      "Courts with criminal jurisdiction & territorial jurisdiction rules",
      "Drafting Charges under ACJA 2015, ACJL (Lagos & states), CPC, and CPA",
      "Bail applications (Summons, Notice of Motion, Affidavit in support)",
      "Trial proceedings, pleas, trials in absentia & no-case submission",
      "Sentencing guidelines, judgments, appeals and post-conviction remedies",
    ],
    keyDraftingRequirements: [
      "Charge sheets and Information across Magistrate & High Courts",
      "Formal Applications for Bail & Affidavits of Urgency",
      "Notice of Preliminary Objection & Written Addresses",
      "Notice of Appeal containing distinct Grounds of Law",
    ],
    examinationTechnique:
      "Focus on statutory authority citations (ACJA vs ACJL distinctions), proper framing of charge counts without duplicity, and clear IRAC structure for procedural problem questions.",
    administratorNote: "Synchronized with CLE national syllabus with live interactive drafting clinics.",
  },
  {
    id: "civil-litigation",
    number: "02",
    name: "Civil Litigation",
    code: "CVL",
    summary:
      "Build clarity around civil procedure, court processes, drafting, applications and examination-focused problem solving.",
    whyItMatters:
      "Civil Litigation is widely recognized by Bar candidates as one of the heaviest courses due to distinct High Court Rules (Federal High Court vs Lagos State Civil Procedure Rules vs Abuja Rules), multiple modes of commencement, and rigorous interlocutory motions.",
    coreFocus: [
      "Choice of court, jurisdiction (subject matter & territorial), and limitation of actions",
      "Modes of commencement (Writ of Summons, Originating Summons, Originating Motion, Petition)",
      "Drafting Pleadings (Statement of Claim, Statement of Defence, Counterclaim, Reply)",
      "Interlocutory Applications (Injunctions, Summary Judgment, Default Judgment)",
      "Pre-trial conferences, Case Management, Trial procedure, and Evidence presentation",
      "Enforcement of Judgments (Sheriffs and Civil Process Act, Garnishee proceedings, Fi.Fa)",
    ],
    keyDraftingRequirements: [
      "Writ of Summons & frontloaded process packages",
      "Originating Summons supported by Affidavit and Exhibits",
      "Statement of Claim with verified legal particulars",
      "Motion on Notice with Affidavit in Support and Written Address",
      "Garnishee Order Nisi application",
    ],
    examinationTechnique:
      "Master the distinction between contentious and non-contentious commencements, understand timeline calculations strictly according to rules, and master standard drafting formats.",
    administratorNote: "Synchronized with CLE national syllabus with live interactive drafting clinics.",
  },
  {
    id: "corporate-law-practice",
    number: "03",
    name: "Corporate Law Practice",
    code: "CLP",
    summary:
      "Understand corporate transactions, company procedure, regulatory processes, drafting and practical corporate law application.",
    whyItMatters:
      "Under CAMA 2020, company regulation in Nigeria underwent substantial modernization. Bar Finals candidates must navigate corporate governance, CAC online portal realities, restructuring, and company secretary responsibilities with accuracy.",
    coreFocus: [
      "Choice of business organizations & pre-incorporation contracts",
      "Incorporation procedures & modern post-incorporation filings under CAMA 2020",
      "Corporate governance, duties of directors, removal of directors and secretaries",
      "Share capital structure, alterations, debentures, charges, and registration with CAC",
      "Company meetings (AGM, EGM), notices, drafting special and ordinary resolutions",
      "Corporate restructuring (Mergers, Schemes of Arrangement) and Winding up/Insolvency",
    ],
    keyDraftingRequirements: [
      "Memorandum & Articles of Association (Model MEMART modifications)",
      "Special and Ordinary Board & General Meeting Resolutions",
      "Notice of Statutory Meetings & Explanatory Statements",
      "Company Searches & Due Diligence Reports",
      "CAC statutory filing documents",
    ],
    examinationTechnique:
      "Learn how to spot governance breaches in problem scenarios, draft concise resolutions meeting statutory quorum and notice requirements, and cite CAMA 2020 sections accurately.",
    administratorNote: "Synchronized with CLE national syllabus with live interactive drafting clinics.",
  },
  {
    id: "property-law-practice",
    number: "04",
    name: "Property Law Practice",
    code: "PLP",
    summary:
      "Develop confidence in property transactions, conveyancing, title documentation, leases, mortgages and related procedures.",
    whyItMatters:
      "Conveyancing drafting carries strict formal rules. Missing an essential covenant, testatum, recitals error, or misinterpreting the Land Use Act 1978 (Governor's Consent requirements) routinely costs marks.",
    coreFocus: [
      "Applicable property laws (Conveyancing Act 1881 vs PCL 1959 vs Land Registration Laws)",
      "Constitutional and statutory impact of the Land Use Act 1978 (Governor's Consent)",
      "Stages of formal property transactions (Pre-contract, Contract, Post-contract, Completion)",
      "Drafting contracts of sale of land & formal Deeds of Assignment",
      "Commercial & Residential Leases, user covenants, forfeiture and determination",
      "Mortgages (Legal vs Equitable, modes of creation, enforcement of security)",
      "Wills, codicils, probate practice and letters of administration",
    ],
    keyDraftingRequirements: [
      "Formal Deed of Assignment (Recitals, Testatum, Habendum, Covenants, Execution & Attestation)",
      "Contract of Sale of Land with special conditions",
      "Deed of Legal Mortgage and Tripartite Deeds",
      "Valid formal Will containing appointment of executors and attestation clause",
    ],
    examinationTechnique:
      "Memorize deed anatomy, avoid drafting omissions, and be razor-sharp on identifying whether a transaction is governed by the Conveyancing Act or PCL.",
    administratorNote: "Synchronized with CLE national syllabus with live interactive drafting clinics.",
  },
  {
    id: "professional-ethics-skills",
    number: "05",
    name: "Professional Ethics & Skills",
    code: "PES",
    summary:
      "Strengthen your understanding of professional responsibility while developing the practical skills expected of a future legal practitioner.",
    whyItMatters:
      "Often dismissed as an 'easier' subject until Bar Finals results arrive. Professional Ethics carries mandatory ethical standards under the Rules of Professional Conduct (RPC 2023) and the Legal Practitioners Act. One ethical mistake or poorly formatted letter loses crucial marks.",
    coreFocus: [
      "The legal profession in Nigeria, regulatory bodies (LPDC, NBA, Body of Benchers, CLE)",
      "Rules of Professional Conduct for Legal Practitioners (RPC 2023 updates)",
      "Duties of counsel to court, clients, colleagues, and the public",
      "Conflict of interest, advertising, client accounts & financial discipline",
      "Professional disciplinary proceedings before the Legal Practitioners Disciplinary Committee",
      "Law office management, interview skills, negotiation, advocacy & alternative dispute resolution",
    ],
    keyDraftingRequirements: [
      "Formal Professional Legal Opinion Letters to clients",
      "Formal Demand Letters and Letters of Negotiation",
      "Bill of Charges & Remuneration documentation (Legal Practitioners Remuneration Order)",
      "Petitions and responses to the LPDC",
    ],
    examinationTechnique:
      "Master RPC rule citations, ethical problem identification, and polished, professional legal letter drafting layout.",
    administratorNote: "Synchronized with CLE national syllabus with live interactive drafting clinics.",
  },
];
