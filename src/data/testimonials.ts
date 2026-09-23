/**
 * Student Testimonials and Real Experiences
 * Formats supported: Video testimonials (with modal player), WhatsApp screenshots/dialogue,
 * written reviews, and before/after journey stories.
 */

export type TestimonialType = "video" | "whatsapp" | "written" | "before_after";

export interface Testimonial {
  id: string;
  type: TestimonialType;
  studentName: string;
  cohort: string;
  nlsCampus: string;
  headline: string;
  content: string;
  courseHighlight?: string;
  videoDuration?: string;
  videoCaption?: string;
  whatsappMessages?: {
    sender: "student" | "mentor";
    time: string;
    text: string;
  }[];
  isPlaceholder?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-video-1",
    type: "video",
    studentName: "[Student Video Story - Cohort Candidate]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Lagos Campus",
    headline: "“Civil Litigation went from my most dreaded subject to my most structured exam.”",
    content:
      "I was completely overwhelmed by the sheer volume of Civil Litigation rules and frontloading documents. Essence Mentorship gave me an exact checklist for every mode of commencement and interlocutory application.",
    courseHighlight: "Civil Litigation",
    videoDuration: "1:42 min",
    videoCaption: "How structured drafting templates removed the fear of Bar Finals Civil Litigation.",
    isPlaceholder: true,
  },
  {
    id: "test-whatsapp-1",
    type: "whatsapp",
    studentName: "[Student WhatsApp Feedback]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Abuja (Bwari) Campus",
    headline: "“The Charge Sheet drafting session made everything click instantly.”",
    content: "Real conversation feedback following the intensive Criminal Litigation drafting session.",
    courseHighlight: "Criminal Litigation",
    whatsappMessages: [
      {
        sender: "student",
        time: "10:14 PM",
        text: "Good evening sir! I just finished the mock drafting exercise on ACJA vs CPA charge formats. For the first time since coming to Bwari, I didn't confuse the count headings! The drafting checklist is pure gold 🙏",
      },
      {
        sender: "mentor",
        time: "10:22 PM",
        text: "Well done! Always remember: check the statement of offence for statutory section first, then ensure the particulars of offence contain date, place, and exact value. Keep that muscle memory active.",
      },
      {
        sender: "student",
        time: "10:25 PM",
        text: "Understood clearly. Starting the Corporate resolutions next. Thank you so much for the feedback!",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "test-video-2",
    type: "video",
    studentName: "[Student Video Story - Cohort Candidate]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Yenagoa Campus",
    headline: "“Having someone review my property deeds before exams saved me countless marks.”",
    content:
      "In Property Law, a missing testatum or habendum clause will ruin an entire drafting question. The one-on-one feedback in Essence showed me precisely where I was losing marks.",
    courseHighlight: "Property Law Practice",
    videoDuration: "2:08 min",
    videoCaption: "Navigating conveyancing recitals, leases, and the Land Use Act with confidence.",
    isPlaceholder: true,
  },
  {
    id: "test-written-1",
    type: "written",
    studentName: "[Student Written Review - Cohort Candidate]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Enugu Campus",
    headline: "“Not just reading slides—actual guided preparation that keeps you accountable.”",
    content:
      "Nigerian Law School lectures move at lightning speed. It's so easy to accumulate weeks of unread materials without realizing you have no retention. Essence Mentorship gave my week a clear cadence: learn the topic, draft the process, get it critiqued.",
    courseHighlight: "All 5 Core Courses",
    isPlaceholder: true,
  },
  {
    id: "test-whatsapp-2",
    type: "whatsapp",
    studentName: "[Student WhatsApp Feedback]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Kano Campus",
    headline: "“Corporate Law Practice resolutions are now second nature.”",
    content: "Feedback received following the CAMA 2020 corporate governance masterclass.",
    courseHighlight: "Corporate Law Practice",
    whatsappMessages: [
      {
        sender: "student",
        time: "8:45 AM",
        text: "Mentor, that matrix distinguishing between ordinary and special business in AGM vs EGM cleared my confusion completely. Solved 4 past exam questions this morning with zero mistakes!",
      },
      {
        sender: "mentor",
        time: "9:02 AM",
        text: "Excellent work! Now tackle the alteration of share capital under CAMA 2020. Watch out for CAC registration timelines.",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "test-before-after-1",
    type: "before_after",
    studentName: "[Student Journey Story]",
    cohort: "Bar Finals Candidate",
    nlsCampus: "Port Harcourt Campus",
    headline: "From feeling 3 weeks behind to walking into exams with calm clarity.",
    content:
      "Before Essence: Drowning in hundreds of pages of unorganized handouts, reading late without retaining, and panicking when presented with past questions. After Essence: A structured 5-course schedule, standardized drafting templates, and continuous mentor clarification that turned anxiety into disciplined execution.",
    courseHighlight: "Preparation Strategy",
    isPlaceholder: true,
  },
];
