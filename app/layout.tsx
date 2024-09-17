import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import { Nunito, Cedarville_Cursive, Manrope } from "next/font/google"; // Updated import
import Footer from "@/components/footer/Footer";
import "@/styles/bg.css";

const nunito = Nunito({
  weight: ["400", "700"], // specify the weights you want to use
  subsets: ["latin"], // choose subsets like 'latin' or 'cyrillic'
});

const manrope = Manrope({
  weight: ["700", "400"], // specify the weights you want to use
  subsets: ["latin"],
  // choose subsets like 'latin' or 'cyrillic'
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sumrlabs",
  description: "Sumrlabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.className} antialiased bg-[#fff]`}>
        <div className="bgAnimation">
          <Header />
        </div>
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
