import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creeb | Student Apartment Booking",
  description:
    "Find the perfect student apartment near your campus. Creeb connects students with quality, affordable housing across the US.",
  keywords: ["student housing", "apartment booking", "college apartments", "student rentals"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
