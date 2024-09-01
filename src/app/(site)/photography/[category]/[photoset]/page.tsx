import { sanityFetch } from "@/sanity/lib/client"
import { PHOTOSET_QUERY } from "@/sanity/lib/queries"
import { PHOTOSETS_QUERY } from "@/sanity/lib/queries"
import { PHOTOSET_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import ImageGallery from "@/components/imageGallery"
import { type Photo } from "react-photo-album"
import TitleBlock from "@/components/titleBlock"
export const dynamicParams = false

export async function generateStaticParams() {
  const photoSets = await sanityFetch({ query: PHOTOSETS_QUERY })
  return photoSets.map((photoSet) => ({
    category: photoSet.category?.slug?.current,
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
      <TitleBlock title={photoSet?.title!} subtitle={photoSet?.subtitle!} />
      <ImageGallery photos={photos} columns={4} lightbox layout="masonry" />
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
  return await sanityFetch({
    query: PHOTOSET_QUERY,
    params: { slug: photoset },
  })
}
