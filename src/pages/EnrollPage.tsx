import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  CreditCard,
  Building,
} from "lucide-react";
import {
  PROGRAMME_PRICE,
  PAYSTACK_ENROLLMENT_URL,
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  trackAnalyticsEvent,
} from "../config/siteConfig";

export const EnrollPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "transfer">("paystack");

  const bankDetails = {
    bankName: "Guaranty Trust Bank (GTBank)",
    accountNumber: "0123456789",
    accountName: "Essence Mentorship Legal Consult",
    amount: "₦200,000",
    referenceNote: "Use your Full Name as payment reference",
  };

  const handleProceedToPaystack = () => {
    trackAnalyticsEvent("pricing_enroll", { target: "paystack_redirect" });
    window.open(PAYSTACK_ENROLLMENT_URL, "_blank", "noopener,noreferrer");
  };

  const handleCopyAccount = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppPaymentProof = () => {
    const message = `Hello Essence Mentorship, I have completed the ₦200,000 transfer for the Bar Finals Mentorship bundle and would like to submit my payment receipt for onboarding.`;
    const url = `https://wa.me/2348113853838?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#0A1425] text-[#FAF9F6] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B99A5B] font-mono">
              ENROLLMENT CHECKOUT
            </span>
            <span className="w-6 h-[1px] bg-[#B99A5B]" aria-hidden="true" />
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            You’re Almost There.
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] font-sans max-w-lg mx-auto">
            Review your programme package details below and proceed to complete your enrollment securely.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#07101C] border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-semibold text-[#B99A5B] uppercase tracking-wider block font-mono">
                Flagship Cohort
              </span>
              <h2 className="font-serif-display text-2xl font-bold text-white mt-1">
                Essence Mentorship Complete Bundle
              </h2>
              <span className="text-xs text-[#94A3B8]">
                All 5 Core Courses · Bar Finals Preparation
              </span>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-3xl font-bold text-white font-sans">
                {PROGRAMME_PRICE}
              </span>
              <span className="text-[11px] text-[#94A3B8] block mt-0.5 font-mono">
                Full programme tuition
              </span>
            </div>
          </div>

          {/* Included Features */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block font-mono">
              Package Inclusions:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#CBD5E1]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Criminal Litigation (Charges & advocacy)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Civil Litigation (Pleadings & motions)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Corporate Law Practice (CAMA 2020)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Property Law Practice (Deeds & conveyancing)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Professional Ethics & Skills (RPC 2023)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4D91FF] shrink-0" />
                <span>Direct Mentor Question Support & Onboarding</span>
              </li>
            </ul>
          </div>

          {/* Payment Method Selector */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block font-mono">
              Select Preferred Payment Method:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("paystack")}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  paymentMethod === "paystack"
                    ? "bg-[#0A1425] border-[#2768D8] text-white"
                    : "bg-[#07101C] border-slate-800 text-[#CBD5E1] hover:border-slate-700"
                }`}
              >
                <CreditCard className="w-5 h-5 text-[#4D91FF] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <span className="font-semibold block text-sm">Paystack Checkout</span>
                  <span className="text-[#94A3B8]">Debit card, USSD, Bank Transfer or Apple Pay</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("transfer")}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  paymentMethod === "transfer"
                    ? "bg-[#0A1425] border-[#2768D8] text-white"
                    : "bg-[#07101C] border-slate-800 text-[#CBD5E1] hover:border-slate-700"
                }`}
              >
                <Building className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <span className="font-semibold block text-sm">Direct Bank Transfer</span>
                  <span className="text-[#94A3B8]">Official bank account & WhatsApp verification</span>
                </div>
              </button>
            </div>
          </div>

          {/* Paystack Flow */}
          {paymentMethod === "paystack" ? (
            <div className="space-y-4 pt-2">
              <button
                type="button"
                onClick={handleProceedToPaystack}
                className="w-full py-4 px-6 bg-[#2768D8] hover:bg-[#1E56B5] text-white rounded-xl text-sm font-semibold uppercase tracking-wider shadow-lg active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 border border-blue-400/30"
              >
                <span>PROCEED TO SECURE PAYMENT — {PROGRAMME_PRICE}</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-[#94A3B8] space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-[#CBD5E1]">
                  <Lock className="w-3.5 h-3.5 text-[#4D91FF]" />
                  <span>You will be securely redirected to Paystack to complete your enrollment.</span>
                </div>
              </div>
            </div>
          ) : (
            /* Direct Bank Transfer Option */
            <div className="p-5 rounded-xl bg-[#0A1425] border border-slate-800 space-y-4 text-xs font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-semibold text-white">Essence Mentorship Bank Account</span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Verified Admissions Account
                </span>
              </div>

              <div className="space-y-2 text-[#CBD5E1]">
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Bank Name:</span>
                  <span className="font-semibold text-white">{bankDetails.bankName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Account Name:</span>
                  <span className="font-semibold text-white">{bankDetails.accountName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Account Number:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#4D91FF]">
                      {bankDetails.accountNumber}
                    </span>
                    <button
                      onClick={handleCopyAccount}
                      className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-[#CBD5E1] transition-colors"
                      title="Copy Account Number"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Exact Amount:</span>
                  <span className="font-bold text-white">{bankDetails.amount}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Reference:</span>
                  <span>{bankDetails.referenceNote}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppPaymentProof}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Send Transfer Proof on WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* WhatsApp Assistance Footer */}
          <div className="pt-4 border-t border-slate-800 text-center space-y-2">
            <span className="text-xs text-[#94A3B8]">
              Need assistance or prefer to speak with our admissions coordinator first?
            </span>
            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4D91FF] hover:text-[#93C5FD]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat with us on WhatsApp ({WHATSAPP_NUMBER})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
