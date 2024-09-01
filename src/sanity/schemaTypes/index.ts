import { type SchemaTypeDefinition } from "sanity"
import siteInfo from "./siteInfo"
import photoSet from "./photoSet"
import blockContent from "./blockContent"
import customImage from "./customImage"
import playlist from "./playlist"
import tiktok from "./tiktok"
import video from "./video"
import category from "./category"
import teaser from "./teaser"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteInfo,
    photoSet,
    customImage,
    playlist,
    tiktok,
    blockContent,
    video,
    category,
    teaser,
  ],
}
