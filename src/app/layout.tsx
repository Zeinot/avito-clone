import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import { auth } from "@/auth";
import NavbarServer from "@/components/layouts/NavbarServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Avito Clone",
  description: "Next Avito Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarServer />
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
