import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { InViewProvider } from "@/providers/inViewSection/inViewSection";

export const metadata: Metadata = {
  title: "Moamen Al-Yazouri | React & Next.js Developer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Explore the portfolio of Moamen Al-Yazouri, a frontend developer skilled in React, Next.js, MongoDB, and AI-driven solutions. View innovative projects like FormAI, CodePilot, and a Memory Game built with modern web technologies.",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
              <InViewProvider>
                {children}
              </InViewProvider>
          </ThemeProvider>
          <Toaster richColors />
      </body>
    </html>
  );
}
