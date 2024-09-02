import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Strix Invoice",
  description: "Create, send, and track invoices effortlessly while keeping your business organized and on track—all from one powerful app.",
};

export default function RootLayout({ children, }:
  Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
