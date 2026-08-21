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
  title: "損益分岐点計算ツール【無料】黒字化に必要な販売個数を計算",

  description:
    "固定費と1個あたりの利益から、黒字化に必要な販売個数を無料で自動計算。物販・せどり・ネット販売の損益分岐点や固定費回収の目安を簡単に確認できます。",

  keywords: [
    "損益分岐点",
    "損益分岐点 計算",
    "損益分岐点 計算ツール",
    "黒字化",
    "販売個数",
    "固定費 回収",
    "物販",
    "せどり",
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
