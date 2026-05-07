import { Star } from "lucide-react";

const stats = [
  { value: "2,400+", label: "businesses using FeelReply" },
  { value: "180,000+", label: "replies posted automatically" },
  { value: "4.9", label: "average owner satisfaction", star: true },
  { value: "< 30s", label: "average approval time" },
];

export default function SocialProofBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-4">
              <div className="flex items-center gap-1">
                <span
                  className="text-2xl font-bold text-[#1E1B4B]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {s.value}
                </span>
                {s.star && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
              </div>
              <span className="text-sm text-gray-500 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
