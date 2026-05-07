import { Bell, Sparkles, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Bell,
    color: "#6366F1",
    bg: "#EEF2FF",
    step: "01",
    title: "New Review Arrives",
    description:
      "A customer leaves a review on your Google Maps listing. FeelReply detects it instantly — 5 stars or 1 star, we catch them all.",
  },
  {
    icon: Sparkles,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    step: "02",
    title: "AI Crafts a Reply",
    description:
      "Our AI reads the review, understands the sentiment, and writes a personalised, on-brand reply that sounds like you.",
  },
  {
    icon: MessageCircle,
    color: "#25D366",
    bg: "#F0FDF4",
    step: "03",
    title: "You Get a WhatsApp Message",
    description:
      "The reply lands in your WhatsApp in seconds. Read it, edit it if you want, or just tap Accept — your call.",
  },
  {
    icon: CheckCircle,
    color: "#10B981",
    bg: "#ECFDF5",
    step: "04",
    title: "Posted to Google Maps",
    description:
      "One tap and it's live. FeelReply posts the reply to Google Maps automatically. Zero logins, zero copy-pasting.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#F5F3FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            How it works
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mt-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            From review to reply in under 30 seconds
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            No dashboards to check, no copy-pasting, no forgetting. FeelReply handles
            the entire workflow so you can focus on your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 relative"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 border-t-2 border-dashed border-gray-200 z-10" />
                )}

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: s.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.color }} />
                </div>

                <span className="text-xs font-bold text-gray-300 mb-2 block">
                  {s.step}
                </span>

                <h3
                  className="font-semibold text-[#1E1B4B] text-base mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
