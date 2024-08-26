import { SITEINFO_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"

export default async function Footer() {
  const siteInfo = await client.fetch(SITEINFO_QUERY)

  return (
    <footer>
      <p>{siteInfo?.footer}</p>
    </footer>
  )
}
