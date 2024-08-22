import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strix Invoice",
  description: "Create, send, and track invoices effortlessly while keeping your business organized and on track—all from one powerful app.",
};

export default function RootLayout({ children, }:
  Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
