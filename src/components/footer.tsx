import { SITEINFO_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import styles from "./footer.module.css"

export default async function Footer() {
  const siteInfo = await client.fetch(SITEINFO_QUERY)

  return (
    <footer className={styles.footer}>
      <p>{siteInfo?.footer}</p>
    </footer>
  )
}
