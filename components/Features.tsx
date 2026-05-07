import {
  Sparkles,
  MessageCircle,
  Zap,
  MapPin,
  ShieldAlert,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "#6366F1",
    bg: "#EEF2FF",
    title: "AI-Powered Replies",
    description:
      "Context-aware responses that match your brand voice. The AI understands 5-star praise and 1-star frustrations equally well.",
  },
  {
    icon: MessageCircle,
    color: "#25D366",
    bg: "#F0FDF4",
    title: "WhatsApp Approval Flow",
    description:
      "No new app to learn. Approve, edit, or skip replies directly from WhatsApp — the app you already have on your phone.",
  },
  {
    icon: Zap,
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Instant Notifications",
    description:
      "Get notified the moment a new review lands. Never let a review sit unanswered for days again.",
  },
  {
    icon: MapPin,
    color: "#EF4444",
    bg: "#FEF2F2",
    title: "Multi-Location Support",
    description:
      "Manage reviews for all your locations from a single FeelReply account. Perfect for franchises and growing businesses.",
  },
  {
    icon: ShieldAlert,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Negative Review Handling",
    description:
      "Sensitive AI handling for low-star reviews. Apologise gracefully, offer solutions, and protect your reputation.",
  },
  {
    icon: BarChart2,
    color: "#10B981",
    bg: "#ECFDF5",
    title: "Analytics & Insights",
    description:
      "Track reply rates, response times, and review trends across all your locations in one clean dashboard.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Features
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mt-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Everything you need to master your reviews
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Built for busy business owners who know reviews matter but don&apos;t have
            time to respond to every single one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#6366F1]/30 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3
                  className="font-semibold text-[#1E1B4B] text-base mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
