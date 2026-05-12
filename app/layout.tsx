import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { ScrollReveal } from "@/components/ScrollReveal"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "STEINGLANZ PREMIUM – Professionelle Außenflächenreinigung Baden-Württemberg",
  description:
    "STEINGLANZ PREMIUM – Professionelle Reinigung von Einfahrten, Terrassen und Balkonen in Baden-Württemberg. Ab 4€/m². Jetzt anfragen: 0176 84034915",
  openGraph: {
    title: "STEINGLANZ PREMIUM – Außenflächenreinigung",
    description:
      "Sauberkeit, die man sieht – Qualität, die bleibt. Einfahrten, Terrassen, Balkone. Baden-Württemberg.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#C9A227" />
      </head>
      <body className="font-body">
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
