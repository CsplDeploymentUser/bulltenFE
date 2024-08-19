import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/CommonComponents/HeaderComponents/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BullTen",
  description: "BullTen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
