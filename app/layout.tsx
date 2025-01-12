import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const fontPretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  style: "normal",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "@nyongwon",
  description: "안녕하세요, 같이 가치를 만드는 조용원 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTAG_ID}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
      <body className={`${fontPretendard.className}`}>
        <Header />
        <main className="m-[0_auto] min-h-screen max-w-[896px] p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
