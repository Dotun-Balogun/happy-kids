import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Concert_One } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const concertOne = Concert_One({
  variable: "--font-concert-one",
  subsets: ["latin"],
  weight: "400",
}); 

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy kids",
  description: "Welcome to Happy Kids official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${concertOne.variable} flex flex-col min-h-screen antialiased`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
