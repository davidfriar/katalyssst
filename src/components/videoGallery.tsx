"use client"
import { VIDEOS_QUERYResult } from "@/sanity/types"
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import Inline from "yet-another-react-lightbox/plugins/inline"
import { urlFor } from "@/sanity/lib/image"
import "yet-another-react-lightbox/styles.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"

type VideoGalleryProps = {
  videos: VIDEOS_QUERYResult
}
export default function VideoGallery({ videos }: VideoGalleryProps) {
  const slides = videos.map((video) => {
    const asset = video.video?.asset
    const thumbnailUrl = video.thumbnail
      ? urlFor(video.thumbnail).url()
      : undefined
    return {
      type: "video" as const,
      playsInline: true,
      disablePictureInPicture: true,
      poster: thumbnailUrl,
      sources: [
        {
          src: asset?.url!,
          type: asset?.mimeType!,
        },
      ],
    }
  })

  console.log(`count: ${slides.length}`)
  console.log(`slides: ${JSON.stringify(slides)}`)

  return (
    <Lightbox
      plugins={[Video, Inline, Thumbnails]}
      slides={slides}
      inline={{
        style: { width: "100%", aspectRatio: "3 / 2" },
      }}
      carousel={{ finite: true }}
    />
  )
}
