import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import { Manrope } from "next/font/google"; // Updated import
import Footer from "@/components/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google"; // Import Google Tag Manager

const manrope = Manrope({
  weight: ["700", "400"],
  subsets: ["latin"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SUM+R | AI-Powered Clinical workflow automation",
  description: "SUM+R | AI-Powered Clinical workflow automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0EY0YGJX8K"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0EY0YGJX8K');
            `,
          }}
        />
      </head>
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-WP5FML9M" />{" "}
      {/* Replace GTM-XYZ with your actual GTM ID */}
      <body className={`${manrope.className} antialiased`}>
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const revalidate = 10;
