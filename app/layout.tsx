import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alberto Vera - Portfolio",
  description: "Landing page made by Alberto Vera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
      
        <Navbar />
        <h3 className="text-gray-600">
          albervera13@gmail.com
        </h3>
        <Header />
        {children}
      </body>
    </html>
  );
}