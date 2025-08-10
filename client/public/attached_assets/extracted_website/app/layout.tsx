import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Inter } from "next/font/google" // Import fonts
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script", // Define CSS variable
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter", // Define CSS variable
})

export const metadata: Metadata = {
  title: "Nils Holger - Scandinavian Interior Design",
  description: "Timeless interiors uniting Scandinavian design with functionality.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
