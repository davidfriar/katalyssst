import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { client } from "@/sanity/lib/client"
import { SITEINFO_QUERY } from "@/sanity/lib/queries"

const inter = Inter({ subsets: ["latin"] })

const siteInfo = await client.fetch(SITEINFO_QUERY)

export const metadata: Metadata = {
  title: siteInfo?.title,
  description: siteInfo?.description,
  creator: siteInfo?.author,
  keywords: siteInfo?.keywords,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
