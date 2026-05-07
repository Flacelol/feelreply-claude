import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#1E1B4B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Start replying to reviews in under 5 minutes
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
          Join 2,400+ businesses that never let a Google review go unanswered.
          Set up once. Let FeelReply handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Start Free — No Credit Card
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            See How It Works
          </a>
        </div>

        <p className="text-indigo-300 text-sm mt-5">
          Free plan available · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
