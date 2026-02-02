import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/Providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Broroma | Global Industrial Pipe Import & Export",
    template: "%s | Broroma",
  },
  description: "Broroma is a leading industrial pipe import and export company, providing high-quality steel, carbon, and stainless steel pipes to clients worldwide. Over 25 years of excellence in the global pipe trade industry.",
  keywords: ["industrial pipes", "pipe import", "pipe export", "steel pipes", "carbon pipes", "stainless steel pipes", "global trade", "pipe supplier"],
  authors: [{ name: "Broroma" }],
  openGraph: {
    title: "Broroma | Global Industrial Pipe Import & Export",
    description: "Leading industrial pipe import and export company providing high-quality pipes worldwide.",
    url: "https://broroma.com",
    siteName: "Broroma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Broroma | Global Industrial Pipe Import & Export",
    description: "Leading industrial pipe import and export company providing high-quality pipes worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
