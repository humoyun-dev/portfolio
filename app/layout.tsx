import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme.provider";
import { StructuredData } from "@/lib/structured-data";
import { Footer } from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Humoyun.DEV | Full-Stack Software Developer",
    template: "%s | Humoyun.DEV",
  },
  description:
    "Humoyun.DEV is a passionate full-stack software developer from Tashkent, Uzbekistan, specializing in JavaScript, TypeScript, React, Next.js, Node.js, Python, and Django. Creating clean, efficient, and maintainable code solutions.",
  keywords: [
    "Humoyun.DEV",
    "Full-Stack Developer",
    "Software Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Tashkent Developer",
    "Uzbekistan Developer",
    "Redux",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Clean Code",
    "Software Engineering",
  ],
  authors: [{ name: "Humoyun.DEV" }],
  creator: "Humoyun.DEV",
  publisher: "Humoyun.DEV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://humoyun.dev"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://humoyun.dev", // Replace with your actual domain
    title: "Humoyun.DEV | Full-Stack Software Developer",
    description:
      "Passionate full-stack software developer from Tashkent, Uzbekistan. Specializing in modern web technologies including React, Next.js, Node.js, Python, and Django.",
    siteName: "Humoyun.DEV Portfolio",
    images: [
      {
        url: "/images/image1.jpeg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Humoyun.DEV - Full-Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humoyun.DEV | Full-Stack Software Developer",
    description:
      "Passionate full-stack software developer from Tashkent, Uzbekistan. Creating clean, efficient, and maintainable code solutions.",
    images: ["/images/image1.jpeg"], // Same image as OpenGraph
    creator: "@humoyundev", // Replace with your actual Twitter handle
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // Add if you use Yandex
    // bing: "your-bing-verification-code", // Add if you use Bing
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
