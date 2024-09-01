import { defineQuery } from "next-sanity"

export const SITEINFO_QUERY = defineQuery(`*[_type=="siteInfo"][0]`)

export const PHOTOSETS_QUERY = defineQuery(
  `*[_type=="photoSet"]{..., category->}`,
)

export const PHOTOSETS_FOR_CATEGORY_QUERY = defineQuery(
  `*[_type=="photoSet"]{..., category->}[category.slug.current==$category]`,
)

export const PHOTOSET_QUERY = defineQuery(
  `*[_type=="photoSet"&&slug.current == $slug][0]`,
)

export const CATEGORIES_QUERY = defineQuery(`*[_type=="category"]`)

export const CATEGORY_QUERY = defineQuery(
  `*[_type=="category"&&slug.current==$slug][0]`,
)

export const VIDEOS_QUERY = defineQuery(`*[_type=="video"] {
  title,
  subtitle,
  description,
  video{
    asset->
  },
  thumbnail{
    asset->
  }
}`)

export const TEASERS_QUERY = defineQuery(
  `*[_type=="teaser"]|order(_updatedAt desc)`,
)
