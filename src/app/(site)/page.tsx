import styles from "./page.module.css"
import HomeTitleBlock from "@/components/homeTitleBlock"
import { sanityFetch } from "@/sanity/lib/client"
import { TEASERS_QUERY } from "@/sanity/lib/queries"
import TeaserGallery from "@/components/teaserGallery"

export default async function Home() {
  const teasers = await sanityFetch({ query: TEASERS_QUERY })

  return (
    <>
      <HomeTitleBlock />
      <TeaserGallery teasers={teasers} />
    </>
  )
}
