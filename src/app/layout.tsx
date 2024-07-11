import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Put AI to work | Industrial AI",
  description: "Industrial AI landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1200px] mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
