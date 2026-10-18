import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollProgress } from "@/components/interactive/ScrollProgress";
import { CustomCursor } from "@/components/interactive/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Yelgate — AI & Full-Stack Developer | Systems Engineering",
  description:
    "Portfolio of Kunal Yelgate, Computer Science undergraduate at SGGSIE&T building practical software, developer tooling (RepoLens, GitHubAI), and backend systems.",
  keywords: [
    "Kunal Yelgate",
    "RepoLens",
    "GitHubAI",
    "TrueRecruit",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Engineering",
    "SGGSIE&T",
  ],
  authors: [{ name: "Kunal Yelgate", url: "https://github.com/kunal-yelgate" }],
  creator: "Kunal Yelgate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunalyelgate.vercel.app",
    title: "Kunal Yelgate — AI & Full-Stack Developer | Systems Engineering",
    description:
      "I build systems. I explore ideas. I ship software. Portfolio of Kunal Yelgate.",
    siteName: "Kunal Yelgate Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Yelgate — Developer Portfolio",
    description:
      "I build systems. I explore ideas. I ship software. Explore verified projects and architecture case studies.",
    creator: "@kunalyelgate",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6F0E5] text-[#171717] selection:bg-[#C8FF00] selection:text-[#171717]">
        <ScrollProgress />
        <CustomCursor />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
