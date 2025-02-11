import NavBar from "@/components/nav-bar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import type React from "react"; // Import React
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "IoT Monitor Blog",
  description: "IoT-driven Smart Air Quality Monitor - Blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

