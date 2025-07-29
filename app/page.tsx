import Portfolio from "@/components/main/portfolio";
import { Suspense } from "react";
import LoadingPage from "./loading";
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
  metadataBase: new URL("https://moamen-yazouri-portfolio.vercel.app"), 
    openGraph: {
    title: "Moamen Al-Yazouri | React & Next.js Developer",
    description:
      "Discover Moamen's latest web and AI-powered projects including FormAI and CodePilot. Built with React, Next.js, and cutting-edge tools for a modern digital experience.",
    url: "https://moamen-yazouri-portfolio.vercel.app",
    siteName: "Moamen Al-Yazouri Portfolio",
    images: ["https://moamen-yazouri-portfolio.vercel.app/portfolio.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MoamenYazouri",
    creator: "@MoamenYazouri",
    title: "Moamen Al-Yazouri | React & Next.js Developer",
    description:
    "View Moamen's personal portfolio showcasing AI-powered tools, modern UIs, and full-stack apps using React, TypeScript, and MongoDB.",
    images: ["https://moamen-yazouri-portfolio.vercel.app/portfolio.png"],
  },
  other: {
    developer: "Moamen Al-Yazouri",
    charSet: "utf-8",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default  async function Home() {
  
  return (
    <Suspense fallback={<LoadingPage />}>
      <Portfolio/>
    </Suspense>
  );
}
