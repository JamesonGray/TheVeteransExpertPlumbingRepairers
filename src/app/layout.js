import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Veterans Expert Plumbing Repaiers",
  description: "Your local plumbing experts, ready to tackle any of your plumbing needs",
  verification: {
    google: 'e8TI2IySDc4Q7Z8oR-oFfSzXezP5vacmfLI8piImwUI'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpeg" type="image/x=icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="e8TI2IySDc4Q7Z8oR-oFfSzXezP5vacmfLI8piImwUI" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
