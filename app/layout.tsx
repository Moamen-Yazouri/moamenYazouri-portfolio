
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { InViewProvider } from "@/providers/inViewSection/inViewSection";


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
