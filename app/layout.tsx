import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import Main from "@/components/MainComponents/Main";
import StoreProvider from "./StoreProvider";
import styles from './page.module.css';
import Greeting from "@/components/MainComponents/Greeting";
import InitAuth from "./InitAuth";

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
        <StoreProvider>
          <Header />
          <Main>
            <main className={`font-sour-gummy ${styles.page}`}>
              <Greeting />
              <InitAuth />
              {children}
            </main>
          </Main>
        </StoreProvider>
      </body>
    </html>
  );
}