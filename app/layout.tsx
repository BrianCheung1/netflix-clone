import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Provider from "./Provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jesflix",
  description: "Generated by create next app",
  verification: {
    google: "S664YpT-7_myf-ca76-tavenmtnw031bDi4DJipw3Ms",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
