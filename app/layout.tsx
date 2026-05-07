import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeelReply — AI Replies to Your Google Reviews",
  description:
    "FeelReply automatically replies to your Google Maps reviews. AI crafts the perfect response, you approve it on WhatsApp in one tap, and it posts instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
