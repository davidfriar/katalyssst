import { sanityFetch } from "@/sanity/lib/client"
import { CATEGORIES_QUERY } from "@/sanity/lib/queries"
import { CATEGORY_QUERY } from "@/sanity/lib/queries"
import { PHOTOSETS_FOR_CATEGORY_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { redirect } from "next/navigation"
import { type Photo } from "react-photo-album"
import TitleBlock from "@/components/titleBlock"
import ImageGallery from "@/components/imageGallery"
import { PHOTOSETS_FOR_CATEGORY_QUERYResult } from "@/sanity/types"

export const dynamicParams = false

export async function generateStaticParams() {
  const categories = await sanityFetch({ query: CATEGORIES_QUERY })
  return categories.map((category) => {
    return { category: category?.slug?.current }
  })
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const category = await sanityFetch({
    query: CATEGORY_QUERY,
    params: {
      slug: params.category,
    },
  })
  const photoSets = await sanityFetch({
    query: PHOTOSETS_FOR_CATEGORY_QUERY,
    params: {
      category: params.category,
    },
  })
  if (photoSets.length === 1) {
    redirect(`/photography/${params.category}/${photoSets[0].slug?.current}`)
  }
  const photos = loadPhotos(photoSets, params.category)
  return (
    <>
      <TitleBlock
        title={category?.title || ""}
        subtitle={category?.subtitle || ""}
      />
      <ImageGallery photos={photos} columns={2} layout="rows" />
    </>
  )
}

function loadPhotos(
  photoSets: PHOTOSETS_FOR_CATEGORY_QUERYResult,
  category: string,
): Photo[] {
  const validPhotoSets = photoSets.filter((ps) => {
    return ps.photos && ps.photos!.length >= 1 && ps.photos![0]
  })

  return validPhotoSets.map((ps, index) => {
    const url = urlFor(ps.photos![0]).url()
    const dimensions = url.split("-")[1].split(".")[0]
    const [width, height] = dimensions.split("x").map((n) => parseInt(n))
    return {
      src: url,
      width: width,
      height: height,
      alt: ps.title,
      key: index.toString(),
      title: ps.title,
      href: `/photography/${category}/${ps.slug?.current}`,
    }
  })
}
