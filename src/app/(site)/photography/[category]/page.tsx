import { client } from "@/sanity/lib/client"
import { PHOTOSETS_FOR_CATEGORY_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

export const dynamicParams = false

export async function generateStaticParams() {
  const categories = ["live", "portraits", "bts", "pressShots"] //TODO:Can we remove duplication?
  return categories.map((category) => {
    return { category }
  })
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const photoSets = await client.fetch(PHOTOSETS_FOR_CATEGORY_QUERY, {
    category: params.category,
  })
  return (
    <div>
      {photoSets.map((photoSet) => {
        const mainPhoto = photoSet.photos?.[0]
        return mainPhoto ? (
          <Link href={`${params.category}/${photoSet.slug!.current!}`}>
            <img src={urlFor(mainPhoto).url()} />
          </Link>
        ) : (
          "oops"
        )
      })}
    </div>
  )
}
