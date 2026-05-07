"use client";

import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";

const links = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-heading font-700 text-xl text-[#1E1B4B]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>
            FeelReply
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors duration-150 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-gray-600 hover:text-[#6366F1] transition-colors duration-150 cursor-pointer"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Start Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-[#6366F1] transition-colors duration-150 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="text-sm font-medium bg-[#10B981] text-white px-4 py-2 rounded-lg text-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Start Free
          </a>
        </div>
      )}
    </header>
  );
}
