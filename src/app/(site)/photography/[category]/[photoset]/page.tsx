import { client } from "@/sanity/lib/client"
import { PHOTOSET_QUERY } from "@/sanity/lib/queries"
import { PHOTOSETS_QUERY } from "@/sanity/lib/queries"
import { PHOTOSET_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import ImageGallery from "@/components/imageGallery"
import { type Photo } from "react-photo-album"

export const dynamicParams = false

export async function generateStaticParams() {
  const photoSets = await client.fetch(PHOTOSETS_QUERY)
  return photoSets.map((photoSet) => ({
    category: photoSet.category,
    photoset: photoSet.slug?.current,
  }))
}

export default async function Page({
  params,
}: {
  params: { photoset: string; category: string }
}) {
  const photoSet = await fetchPhotos(params.photoset)
  const photos = loadPhotos(photoSet)
  return (
    <>
      <h1>{photoSet?.title}</h1>
      <h2>{photoSet?.subtitle}</h2>
      <ImageGallery photos={photos} />
    </>
  )
}

function loadPhotos(photoSet: PHOTOSET_QUERYResult): Photo[] {
  return (
    photoSet?.photos?.map((img, index) => {
      const url = urlFor(img).url()
      const dimensions = url.split("-")[1].split(".")[0]
      const [width, height] = dimensions.split("x").map((n) => parseInt(n))
      return {
        src: url,
        width: width,
        height: height,
        alt: img.alt,
        key: index.toString(),
        title: img.caption,
      }
    }) || []
  )
}

async function fetchPhotos(photoset: string) {
  return await client.fetch(PHOTOSET_QUERY, { slug: photoset })
}
