import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/navigation";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const vazir = Vazirmatn({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vazir",
});

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
    <html lang="en">
      <title>React + Me</title>
      <body className={`${roboto.className} ${vazir.className}`}>
        <div className="container mx-auto md:px-20 lg:px-60">
          <header className="flex gap-x-16 pb-16 pt-10 items-baseline">
            <Navigation />
          </header>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
