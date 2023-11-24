import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./_components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Palestine | Save Gaza",
  description: "Free Palestine | Save Palestinians",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-20 md:pt-24">{children}</div>
      </body>
    </html>
  )
}
