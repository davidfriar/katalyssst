import { client } from "@/sanity/lib/client"
import styles from "./page.module.css"
import { VIDEOS_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

export default async function VideoGraphy() {
  const videos = await client.fetch(VIDEOS_QUERY)

  return (
    <div className="styles.container">
      <h1 className={styles.title}>Videography</h1>
      <h2 className={styles.subtitle}>This is the videography page</h2>
      <ul>
        {videos.map((video, index) => {
          const thumbnailUrl = video.thumbnail
            ? urlFor(video.thumbnail).url()
            : undefined
          return (
            <li key={index}>
              <video
                src={video.video?.asset?.url}
                typeof={video.video?.asset?.mimeType}
                controls
                poster={thumbnailUrl}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
