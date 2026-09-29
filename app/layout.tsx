import type { Metadata } from "next";
import { Fredoka, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeModal from "./components/WelcomeModal";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "奇幻動物王國｜哺乳類動物介紹",
    template: "%s｜奇幻動物王國",
  },
  description: "用童話動畫的風格認識各種可愛的哺乳類動物",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${fredoka.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {/* 各頁最後一個區塊加上 flex-1，讓綠色背景延伸到 Footer 的弧線 */}
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <WelcomeModal />
      </body>
    </html>
  );
}
