import s from "./teaserGallery.module.css"
import { TEASERS_QUERYResult } from "@/sanity/types"
import Teaser from "./teaser"

type Props = {
  teasers: TEASERS_QUERYResult
}
export default function TeaserGallery({ teasers }: Props) {
  return (
    <div className={s.container}>
      <ul>
        {teasers.map((teaser) => (
          <li key={teaser._id}>
            <Teaser teaser={teaser} />
          </li>
        ))}
      </ul>
    </div>
  )
}
