import s from "./teaser.module.css"
import { TEASERS_QUERYResult } from "@/sanity/types"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

type Teaser = TEASERS_QUERYResult[number]

type Props = {
  teaser: Teaser
}
function Teaser({ teaser }: Props) {
  const imageUrl = teaser.image ? urlFor(teaser.image).fit("crop").url() : ""
  return (
    <Link className={s.link} href={teaser.link || ""}>
      <div className={s.teaser}>
        <Image src={imageUrl} alt="" width={300} height={300} />
        <div className={s.titleBar}> {teaser.title} </div>
      </div>
    </Link>
  )
}

export default Teaser
