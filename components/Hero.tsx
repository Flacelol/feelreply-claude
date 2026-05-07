import { ArrowRight, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-[#F5F3FF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-sm text-[#6366F1] font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block"></span>
              AI-powered review management
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1E1B4B] leading-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Every Google Review
              <br />
              <span className="text-[#6366F1]">Deserves a Great Reply</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              FeelReply&apos;s AI crafts the perfect response to every Google Maps review.
              You approve in one tap on WhatsApp — it posts automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-150 cursor-pointer"
              >
                Start Free — No Credit Card
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#1E1B4B] font-medium px-6 py-3 rounded-lg border border-gray-200 transition-colors duration-150 cursor-pointer"
              >
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {[
                "2-minute setup",
                "Works with any business",
                "Cancel anytime",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Product mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Google Review Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Maria Santos</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[10px] bg-[#F5F3FF] text-[#6366F1] px-2 py-0.5 rounded-full font-medium">
                      Google Maps
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  &quot;Absolutely love this place! The staff is so friendly and the food is
                  incredible. Will definitely be back!&quot;
                </p>
              </div>

              {/* AI Reply Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-[#6366F1]/20 p-5 mb-4 ml-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">AI</span>
                  </div>
                  <span className="text-xs font-medium text-[#6366F1]">FeelReply generated a response</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  &quot;Thank you so much, Maria! We&apos;re thrilled you enjoyed your visit.
                  Our team works hard to make every guest feel welcome. We look
                  forward to seeing you again soon! 😊&quot;
                </p>
              </div>

              {/* WhatsApp approval */}
              <div className="bg-[#075E54] rounded-2xl shadow-lg p-4 ml-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#25D366]">FeelReply</span>
                </div>
                <p className="text-xs text-white/80 mb-3">
                  New reply ready for <span className="text-white font-medium">Maria Santos&apos;</span> review. Tap to approve:
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#25D366] text-white text-xs font-semibold py-2 rounded-lg cursor-pointer">
                    Accept ✓
                  </button>
                  <button className="flex-1 bg-white/10 text-white text-xs font-medium py-2 rounded-lg cursor-pointer">
                    Edit
                  </button>
                </div>
              </div>

              {/* Posted badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#10B981] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                Posted to Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
