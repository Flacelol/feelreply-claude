import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Owner, Brasa Steakhouse",
    avatar: "C",
    avatarBg: "from-orange-400 to-red-500",
    quote:
      "We get 40+ reviews a week across 3 locations. Before FeelReply I was replying to maybe 10% of them. Now every single review gets a thoughtful response within minutes. Our rating went from 4.2 to 4.7.",
    stars: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Manager, Le Petit Hôtel Boutique",
    avatar: "S",
    avatarBg: "from-purple-400 to-indigo-500",
    quote:
      "The WhatsApp approval flow is genius. I just tap Accept on my phone between check-ins. The AI writes better replies than I do honestly — it always hits the right tone for guests.",
    stars: 5,
  },
  {
    name: "Aisha Okonkwo",
    role: "Owner, Glow Beauty Studio",
    avatar: "A",
    avatarBg: "from-pink-400 to-rose-500",
    quote:
      "Had a difficult 2-star review last month. FeelReply crafted such a professional, empathetic response that the customer actually came back and updated their review to 4 stars. Incredible.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F3FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1B4B] mt-3"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Business owners love FeelReply
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From restaurants to hotels to salons — FeelReply works for any business with Google reviews.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1E1B4B] text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
