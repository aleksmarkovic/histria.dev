import "../global.css";
import LocalFont from "next/font/local";
import { Inter } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "histria.dev",
    template: "%s | histria.dev",
  },
  description: "Software engineer at upstash.com and founder of planetfall.io",
  openGraph: {
    title: "histria.dev",
    description:
      "Software engineer at upstash.com and founder of planetfall.io",
    url: "https://histria.dev",
    siteName: "histria.dev",
    images: [
      {
        url: "https://histria.dev/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
