import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Moosa Khalil | Full-Stack Software Engineer",
  description:
    "Portfolio of Muhammad Moosa Khalil — a results-driven Full-Stack Software Engineer specializing in React.js, Next.js, and Node.js.",
  keywords: [
    "Muhammad Moosa Khalil",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Moosa Khalil" }],
  openGraph: {
    title: "Muhammad Moosa Khalil | Full-Stack Software Engineer",
    description:
      "Building scalable web apps & real-time platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
