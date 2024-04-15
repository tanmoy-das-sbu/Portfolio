import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../src/components/component/header/Header";
import Footer from "../src/components/component/footer/Footer";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pradip Varma",
  description: "Pradip Varma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}