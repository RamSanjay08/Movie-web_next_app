import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./clientprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App Next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientProvider>
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
      </ClientProvider>
    </html>
  );
}
