import type { Metadata } from "next"
import { inter, extenda } from "@/fonts/fonts"
import { sanityFetch } from "@/sanity/lib/client"
import { SITEINFO_QUERY } from "@/sanity/lib/queries"

const siteInfo = await sanityFetch({ query: SITEINFO_QUERY })

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
      <body className={`${inter.variable} ${extenda.variable}`}>
        {children}
      </body>
    </html>
  )
}
