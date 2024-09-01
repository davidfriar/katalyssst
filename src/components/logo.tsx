import { SITEINFO_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/client"
import Image from "next/image"
import s from "./logo.module.css"
import { urlFor } from "@/sanity/lib/image"

type LogoProps = {
  width: number
  height: number
}
export default async function Logo({ width, height }: LogoProps) {
  const siteInfo = await sanityFetch({ query: SITEINFO_QUERY })

  const src = siteInfo?.logo
    ? urlFor(siteInfo.logo).width(width).height(height).url()
    : ""

  return (
    <div className={s.logo}>
      <Image src={src} alt="" width={width} height={height} />
    </div>
  )
}
