import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorDot from "./components/CursorDot";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "devbyamith | Full-Stack Developer",
  description:
    "Portfolio of Amith — Full-Stack Developer specializing in React, Next.js, and Java. Building fast, scalable, and beautiful web apps.",
  keywords: ["developer", "portfolio", "React", "Next.js", "Java", "full-stack"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: "#0F172A", color: "#E2E8F0" }} suppressHydrationWarning>
        <CursorDot />
        <Navbar />
        <main style={{ paddingTop: "70px", width: "100%", overflowX: "hidden" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}