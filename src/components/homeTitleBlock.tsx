import s from "./homeTitleBlock.module.css"
import Logo from "@/components/logo"
import { SITEINFO_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/client"

export default async function HomeTitleBlock() {
  const siteInfo = await sanityFetch({ query: SITEINFO_QUERY })
  const logoSize = 160
  return (
    <div className={s.container}>
      <Logo height={logoSize} width={logoSize} />
      <div className={s.innerContainer}>
        <h1 className={s.title}>{siteInfo?.title}</h1>
        <h2 className={s.subtitle}>{siteInfo?.subtitle}</h2>
      </div>
    </div>
  )
}
