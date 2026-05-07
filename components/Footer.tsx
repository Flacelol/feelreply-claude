import { MapPin } from "lucide-react";

const links = {
  Product: ["How it Works", "Features", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-xl text-[#1E1B4B]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                FeelReply
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              AI-powered Google Maps review replies. Approve on WhatsApp. Post automatically.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4
                className="font-semibold text-[#1E1B4B] text-sm mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#6366F1] transition-colors duration-150 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FeelReply. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with care for business owners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
