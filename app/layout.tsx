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
  title: "損益分岐点計算ツール｜利益が出る販売価格を自動計算",
  description:
    "仕入れ価格・手数料・送料から損益分岐点を自動計算できる無料ツール。メルカリや物販販売で赤字回避に便利です。",
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
