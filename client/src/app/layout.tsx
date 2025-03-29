import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';

import { ToastContainer } from 'react-toastify';
import Providers from "./Redux/provide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookEveM || Book your Event or Concerts with us",
  description: "BookEveM helps you to manage your Events or concert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <Providers >

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ToastContainer />

            <div className="bg-zinc-200 dark:bg-slate-950">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
