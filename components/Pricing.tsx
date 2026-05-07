import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out FeelReply on your main location.",
    cta: "Get started free",
    ctaStyle: "border border-gray-200 text-[#1E1B4B] hover:bg-gray-50",
    highlight: false,
    features: [
      "1 business location",
      "20 AI replies per month",
      "WhatsApp approval flow",
      "Google Maps auto-posting",
      "Email support",
    ],
  },
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For growing businesses that can't afford to miss a review.",
    cta: "Start 14-day free trial",
    ctaStyle: "bg-[#6366F1] hover:bg-[#4F46E5] text-white",
    highlight: true,
    badge: "Most Popular",
    features: [
      "3 business locations",
      "Unlimited AI replies",
      "WhatsApp approval flow",
      "Google Maps auto-posting",
      "Custom brand tone",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For multi-location businesses that need full control and analytics.",
    cta: "Start 14-day free trial",
    ctaStyle: "bg-[#10B981] hover:bg-[#059669] text-white",
    highlight: false,
    features: [
      "Unlimited locations",
      "Unlimited AI replies",
      "WhatsApp approval flow",
      "Google Maps auto-posting",
      "Custom brand tone",
      "Analytics dashboard",
      "Custom AI prompts",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mt-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Start free and upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border relative ${
                plan.highlight
                  ? "border-[#6366F1] shadow-lg shadow-indigo-100"
                  : "border-gray-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#6366F1] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3
                  className="font-semibold text-[#1E1B4B] text-lg mb-1"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-bold text-[#1E1B4B]"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <a
                href="#"
                className={`block text-center text-sm font-semibold px-4 py-3 rounded-lg mb-6 transition-colors duration-150 cursor-pointer ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
