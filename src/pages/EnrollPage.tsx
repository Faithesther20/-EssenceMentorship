import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  Building,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import {
  PROGRAMMES,
  ProgrammeId,
  Programme,
  PAYMENT_BANK,
  PAYMENT_ACCOUNT_NUMBER,
  PAYMENT_ACCOUNT_NAME,
  PAYMENT_WHATSAPP_NUMBER,
  getPaymentProofWhatsAppUrl,
  trackAnalyticsEvent,
} from "../config/siteConfig";

interface EnrollPageProps {
  initialProgrammeId?: ProgrammeId | null;
  onSelectProgramme?: (id: ProgrammeId) => void;
}

export const EnrollPage: React.FC<EnrollPageProps> = ({
  initialProgrammeId,
}) => {
  const [selectedId, setSelectedId] = useState<ProgrammeId>(
    initialProgrammeId || "bar-part-2"
  );
  const [copied, setCopied] = useState(false);
  const [hasClickedProof, setHasClickedProof] = useState(false);

  useEffect(() => {
    if (initialProgrammeId) {
      setSelectedId(initialProgrammeId);
    }
  }, [initialProgrammeId]);

  const selectedProgramme: Programme =
    PROGRAMMES.find((p) => p.id === selectedId) || PROGRAMMES[1];

  const handleCopyAccount = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PAYMENT_ACCOUNT_NUMBER);
      setCopied(true);
      trackAnalyticsEvent("copy_account_number", {
        account: PAYMENT_ACCOUNT_NUMBER,
      });
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendProof = () => {
    setHasClickedProof(true);
    trackAnalyticsEvent("send_payment_proof", {
      programme: selectedProgramme.title,
      price: selectedProgramme.priceFormatted,
    });
    const url = getPaymentProofWhatsAppUrl(selectedProgramme.title);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              DIRECT BANK TRANSFER ENROLLMENT
            </span>
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Complete Your Enrollment
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] font-sans max-w-lg mx-auto">
            Select your training programme and complete payment via direct bank transfer to our official account.
          </p>
        </div>

        {/* Programme Selection Segment: "Which programme are you enrolling for?" */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-mono font-semibold">
              STEP 0 — SELECT PROGRAMME
            </span>
            <span className="text-xs text-[#94A3B8]">Choose your training stage</span>
          </div>

          <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
            Which programme are you enrolling for?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {PROGRAMMES.map((prog) => {
              const isCurrent = prog.id === selectedId;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(prog.id);
                    setHasClickedProof(false);
                  }}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? "bg-[#0A1425] border-[#2768D8] ring-1 ring-[#2768D8] text-white shadow-lg"
                      : "bg-[#040811] border-slate-800 text-[#CBD5E1] hover:border-slate-700"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        isCurrent ? "text-[#4D91FF]" : "text-[#94A3B8]"
                      }`}
                    >
                      {prog.name}
                    </span>
                    <h3 className="font-serif-display text-base font-bold text-white mt-1">
                      {prog.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">
                      {prog.priceFormatted}
                    </span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-[#4D91FF]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Programme Summary Banner */}
        <div className="p-6 rounded-2xl bg-[#0A1425] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
              YOU ARE ENROLLING FOR
            </span>
            <h3 className="font-serif-display text-2xl font-bold text-white">
              {selectedProgramme.title}
            </h3>
            <p className="text-xs text-[#CBD5E1]">
              {selectedProgramme.shortPositioning}
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="text-xs text-[#94A3B8] block font-mono">TUITION</span>
            <span className="font-sans text-3xl font-bold text-white tracking-tight">
              {selectedProgramme.priceFormatted}
            </span>
            <span className="text-[11px] text-emerald-400 block mt-0.5">
              One-time programme investment
            </span>
          </div>
        </div>

        {/* Included Subjects / Curriculum Preview */}
        {selectedProgramme.courses.length > 0 ? (
          <div className="p-6 rounded-xl bg-[#07101C] border border-slate-800 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold font-mono block">
              Included Courses ({selectedProgramme.courses.length}):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E2E8F0]">
              {selectedProgramme.courses.map((cName, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{cName}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-[#07101C] border border-slate-800 text-xs text-[#CBD5E1] flex items-center gap-3">
            <HelpCircle className="w-4 h-4 text-[#B99A5B] shrink-0" />
            <span>
              {selectedProgramme.curriculumNote ||
                "Programme curriculum will be provided during enquiry/onboarding."}
            </span>
          </div>
        )}

        {/* STEP 1 — MAKE PAYMENT (OPay Bank Transfer) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-mono font-semibold block">
              STEP 1 — MAKE PAYMENT
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white mt-1">
              Transfer the programme fee to the official account
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
              Use your bank app or internet banking to transfer{" "}
              <strong className="text-white font-semibold">
                {selectedProgramme.priceFormatted}
              </strong>{" "}
              to the official account below:
            </p>
          </div>

          {/* Large, Trustworthy Bank Details Panel with Mobile-First Copy */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#040811] border border-slate-700/80 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2768D8]/20 border border-blue-500/40 flex items-center justify-center text-[#4D91FF]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-mono">
                  Bank Name
                </span>
                <span className="text-lg font-bold text-white tracking-wide">
                  {PAYMENT_BANK}
                </span>
              </div>
            </div>

            {/* Account Number with Prominent Copy Action */}
            <div className="p-4 rounded-xl bg-[#0A1425] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider block font-mono">
                  Account Number
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
                  {PAYMENT_ACCOUNT_NUMBER}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyAccount}
                className="px-5 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 bg-[#2768D8] hover:bg-[#1E56B5] text-white shadow-md active:scale-95 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Account Number</span>
                  </>
                )}
              </button>
            </div>

            {/* Account Name & Reference Instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-xs">
              <div>
                <span className="text-[#94A3B8] uppercase tracking-wider block font-mono text-[11px]">
                  Account Name
                </span>
                <span className="font-semibold text-white text-sm">
                  {PAYMENT_ACCOUNT_NAME}
                </span>
              </div>

              <div>
                <span className="text-[#94A3B8] uppercase tracking-wider block font-mono text-[11px]">
                  Transfer Narration / Reference
                </span>
                <span className="font-medium text-[#CBD5E1] text-xs">
                  Your Full Name + {selectedProgramme.name}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Notice */}
          <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-800/40 text-xs text-amber-200/90 leading-relaxed">
            <p>
              <strong>Notice:</strong> Please ensure that payment is made to the account displayed above ({PAYMENT_BANK} · {PAYMENT_ACCOUNT_NUMBER} · {PAYMENT_ACCOUNT_NAME}). After payment, send your receipt to our official WhatsApp number for confirmation and onboarding.
            </p>
          </div>
        </div>

        {/* STEP 2 — SEND PAYMENT PROOF */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#07101C] border border-slate-800 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-mono font-semibold block">
              STEP 2 — SEND PAYMENT PROOF
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white mt-1">
              Send your receipt to Essence Mentorship on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
              After completing your transfer, send your receipt/proof of payment to our official WhatsApp helpline at{" "}
              <strong className="text-white">{PAYMENT_WHATSAPP_NUMBER}</strong> for verification.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0A1425] border border-slate-800 text-xs text-[#CBD5E1] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                Pre-filled WhatsApp message will be sent:
              </span>
              <p className="italic text-white">
                “Hello Essence Mentorship, I have made payment for the {selectedProgramme.title} and would like to send my proof of payment.”
              </p>
            </div>

            <button
              type="button"
              onClick={handleSendProof}
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-lg active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>SEND PROOF ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {hasClickedProof && (
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 animate-in fade-in duration-300">
                <p>
                  <strong>Next step:</strong> Once your transfer is complete, send your proof of payment to our team for confirmation. Our team verifies the transaction and provides your official cohort onboarding details.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Trust & Support Clarification */}
        <div className="text-center space-y-2 text-xs text-[#94A3B8] pt-2">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4D91FF]" />
            <span>Official Essence Mentorship Enrollment Portal</span>
          </div>
          <p>
            Questions before paying? Reach our team anytime on WhatsApp: {PAYMENT_WHATSAPP_NUMBER}
          </p>
        </div>
      </div>
    </div>
  );
};
