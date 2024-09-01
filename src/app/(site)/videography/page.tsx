import { sanityFetch } from "@/sanity/lib/client"
import styles from "./page.module.css"
import { VIDEOS_QUERY } from "@/sanity/lib/queries"
import VideoGallery from "@/components/videoGallery"
import TitleBlock from "@/components/titleBlock"

export default async function VideoGraphy() {
  const videos = await sanityFetch({ query: VIDEOS_QUERY })

  return (
    <>
      <TitleBlock title="Videography" subtitle="This is the videography page" />
      <VideoGallery videos={videos} />
    </>
  )
}
