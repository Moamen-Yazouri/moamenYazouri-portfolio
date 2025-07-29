import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { InViewProvider } from "@/providers/inViewSection/inViewSection";

export const metadata = {
  title: "Moamen Al-Yazouri | React & Next.js Developer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Explore the portfolio of Moamen Al-Yazouri, a frontend developer skilled in React, Next.js, MongoDB, and AI-driven solutions. View innovative projects like FormAI, CodePilot, and a Memory Game built with modern web technologies.",
  keywords: [
    "Moamen Al-Yazouri",
    "full-stack developer",
    "React developer",
    "Next.js portfolio",
    "Gaza Sky Geeks",
    "FormAI",
    "CodePilot",
    "AI developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Firebase",
    "frontend developer",
    "backend developer",
    "developer portfolio"
  ],
  metadataBase: new URL("https://moamen-yazouri-portfolio.vercel.app/"), 
  openGraph: {
    title: "Moamen Al-Yazouri | React & Next.js Developer",
    description:
      "Discover Moamen's latest web and AI-powered projects including FormAI and CodePilot. Built with React, Next.js, and cutting-edge tools for a modern digital experience.",
    url: "https://moamen-yazouri-portfolio.vercel.app/",
    siteName: "Moamen Al-Yazouri Portfolio",
    images: ["/portfolio.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MoamenYazouri", 
    creator: "@Moamen-Yazouri",
    title: "Moamen Al-Yazouri | React & Next.js Developer",
    description:
      "View Moamen's personal portfolio showcasing AI-powered tools, modern UIs, and full-stack apps using React, TypeScript, and MongoDB.",
    images: ["/portfolio.png"],
  },
  other: {
    developer: "Moamen Al-Yazouri",
    charSet: "utf-8",
  },
};

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
