import { client } from "@/sanity/lib/client"
import { PHOTOSET_QUERY } from "@/sanity/lib/queries"
import { PHOTOSETS_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

export const dynamicParams = false

type Params = { params: { category: string } }
export async function generateStaticParams() {
  const photoSets = await client.fetch(PHOTOSETS_QUERY)
  return photoSets.map((photoSet) => ({
    category: photoSet.category,
    slug: photoSet.slug?.current,
  }))
}

export default async function Page({
  params,
}: {
  params: { photoset: string; category: string }
}) {
  const photoSet = await client.fetch(PHOTOSET_QUERY, {
    slug: params.photoset,
  })
  return (
    <ul>
      {photoSet?.photos?.map((photo) => (
        <li key={photo._key}>
          <img src={urlFor(photo).url()} />
        </li>
      ))}
    </ul>
  )
}
