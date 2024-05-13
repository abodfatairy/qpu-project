import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <div className=' h-screen  w-screen flex flex-col overflow-x-hidden '>
          <Header />
          <div className=" flex-1 p-2">
          {children}
          </div>
          <Footer/>
              </div>
      </body>
    </html>
  );
}
