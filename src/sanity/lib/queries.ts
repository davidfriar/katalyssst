import { defineQuery } from "next-sanity"

export const SITEINFO_QUERY = defineQuery(`*[_type=="siteInfo"][0]`)

export const PHOTOSETS_QUERY = defineQuery(`*[_type=="photoSet"]`)

export const PHOTOSETS_FOR_CATEGORY_QUERY = defineQuery(
  `*[_type=="photoSet"&& category==$category]`,
)

export const PHOTOSET_QUERY = defineQuery(
  `*[_type=="photoSet"&&slug.current == $slug][0]`,
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
