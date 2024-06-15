import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Avito Clone",
  description: "Next Avito Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
