import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "sonner";
import Footer from "@/components/layout/footer";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-8NPDTN5D1G";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unsaid – Share the Words You Couldn't Say",
  description:
    "Unsaid is a safe space to share the messages you never got to send. Write your unspoken thoughts anonymously and let your silence be heard.",
  keywords: [
    "unsaid",
    "anonymous messages",
    "unspoken words",
    "unsent letters",
    "emotional release",
    "confession platform",
    "say what you couldn't",
    "mental health",
    "healing through writing",
  ],
  authors: [{ name: "Unsaid Team" }],
  creator: "Unsaid",
  metadataBase: new URL("https://unsaidproject.vercel.app"),
  openGraph: {
    title: "Unsaid – Share the Words You Couldn't Say",
    description:
      "Unsaid lets you express the feelings you never shared. Post your message anonymously and let go.",
    url: "https://unsaidproject.vercel.app",
    siteName: "Unsaid",
    images: [
      {
        url: "https://unsaidproject.vercel.app/og-image.png", // update with actual OG image
        width: 1200,
        height: 630,
        alt: "Unsaid – Share the Words You Couldn't Say",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unsaid – Share the Words You Couldn't Say",
    description:
      "Write the message you never got to send. Unsaid is a platform to express unspoken emotions safely and anonymously.",
    images: ["https://unsaidproject.vercel.app/og-image.png"], // same as OG
    creator: "@unsaidproject", // replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
