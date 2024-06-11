import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CalendlyButton from "@/components/calendly-button";
import ShinyButton from "@/components/shiny-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tax Pro Accelerator",
  description: "Tax Pro Accelerator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CalendlyButton /> */}
        <ShinyButton />
        {children}
      </body>
    </html>
  );
}
