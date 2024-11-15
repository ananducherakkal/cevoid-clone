import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/navbar/topNavbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="text-gray-90">
      <body className={inter.className}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
