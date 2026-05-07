"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does FeelReply connect to Google Maps?",
    a: "FeelReply connects via the Google My Business API. During onboarding you'll authorise FeelReply to access your listing — it takes about 60 seconds and only needs read/write access to reviews.",
  },
  {
    q: "Can I customise the AI's tone and style?",
    a: "Yes. On Starter and Pro plans you can define your brand voice (formal, friendly, casual) and provide example replies. The AI will mirror your style in every response.",
  },
  {
    q: "What happens if I don't approve a reply?",
    a: "Nothing gets posted. FeelReply only publishes a reply after you tap Accept. If you don't respond within 24 hours, we'll send a reminder. Replies never go live without your approval.",
  },
  {
    q: "Which WhatsApp number does FeelReply use?",
    a: "FeelReply sends messages from a dedicated WhatsApp Business number. You'll see it's clearly labelled as 'FeelReply' in your contacts. You can also configure a custom WhatsApp Business number on the Pro plan.",
  },
  {
    q: "Is there a free trial on paid plans?",
    a: "Yes — both Starter and Pro include a 14-day free trial with full access. No credit card required to start. You'll only be billed after the trial ends if you choose to continue.",
  },
  {
    q: "What languages does FeelReply support?",
    a: "FeelReply detects the language of each review automatically and replies in the same language. Currently supports English, Spanish, French, Portuguese, German, Italian, and Dutch — with more being added.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#F5F3FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mt-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Got questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-medium text-[#1E1B4B] text-sm pr-4"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
