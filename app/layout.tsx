import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "損益分岐点計算ツール【無料】赤字ラインを計算",
description:
  "仕入れ価格・送料・販売手数料から赤字にならない販売価格を無料で自動計算。メルカリ販売やAmazon販売の価格設定に便利です。",
keywords: [
  "損益分岐点",
  "赤字ライン",
  "販売価格計算",
  "メルカリ販売",
  "Amazon販売",
  "利益計算",
],
  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  ></script>
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
