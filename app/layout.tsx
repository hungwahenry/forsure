import type { Metadata } from "next"
import { Geist_Mono, Figtree } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const TITLE = "forsure — find someone to do anything";
const DESCRIPTION =
  "forsure is a local hangouts app — find someone to grab coffee, play tennis, or do anything, nearby and right now.";

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  applicationName: "forsure",
  title: {
    default: TITLE,
    template: "%s — forsure",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "forsure",
    title: TITLE,
    description: DESCRIPTION,
    url: env.SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "forsure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
}

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", figtree.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
