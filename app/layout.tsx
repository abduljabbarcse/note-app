import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteFlow",
  description: "A simple notes management app",
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
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}