import Preview from "@/sanity/lib/playListPreview"
import { Rule } from "sanity"
const playlist = {
  name: "playlist",
  title: "Playlist",
  type: "object",
  fields: [
    {
      name: "url",
      title: "url",
      type: "string",
      validation: (rule: Rule) => rule.required().error("must have a url"),
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    components: {
      preview: Preview,
    },
  },
}
export default playlist
