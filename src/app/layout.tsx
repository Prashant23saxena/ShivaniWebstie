import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh Rastogi — Management Consultant",
  description:
    "Portfolio of Anirudh Rastogi, a management consultant focused on supply chain strategy and transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
