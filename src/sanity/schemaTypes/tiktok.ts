import Preview from "@/sanity/lib/tiktokPreview"
import { Rule } from "sanity"

const tiktok = {
  name: "tiktok",
  title: "Tiktok",
  type: "object",
  fields: [
    {
      name: "url",
      title: "Url",
      type: "string",
      validation: (rule: Rule) => rule.required().error("Must have a url"),
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

export default tiktok
