import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/views/Home/Navbar";
import { Libre_Franklin, Josefin_Sans, Rancho } from "next/font/google";
import Footer from "@/views/Home/Footer";

export const metadata: Metadata = {
  title: "VibeFit",
  description: "VibeFit - A melhor comida fitness do Brasil",
};

const libre = Libre_Franklin({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-libre",
});

const josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-josefin",
});

const rancho = Rancho({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rancho",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`bg-white ${libre.variable} ${josefin.variable} ${rancho.variable}`}
    >
      <body className="bg-white font-sans">
        <Navbar />
        {children}
        <Footer />
        {modal}
      </body>
    </html>
  );
}
