import { SITEINFO_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/client"
import styles from "./footer.module.css"

export default async function Footer() {
  const siteInfo = await sanityFetch({ query: SITEINFO_QUERY })

  return (
    <footer className={styles.footer}>
      <p>{siteInfo?.footer}</p>
    </footer>
  )
}
