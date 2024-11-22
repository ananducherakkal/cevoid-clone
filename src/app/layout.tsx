import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/navbar/topNavbar";
import "react-slideshow-image/dist/styles.css";
import Footer from "@/components/common/footer";

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
        <Footer />
      </body>
    </html>
  );
}
