import { defineType } from "sanity"
import { Rule } from "sanity"

const teaser = defineType({
  name: "teaser",
  type: "document",
  title: "Teaser",
  description: "A teaser which will appear on the home page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "A name for your teaser, which will be displayed as the title of the teaser",
    },

    {
      name: "image",
      title: "Image",
      description: "An image to be displayed on the teaser",
      type: "customImage",
    },

    {
      name: "link",
      title: "Link",
      description: "The url to link to the page which this teaser is for",
      type: "string",
    },
  ],
})
export default teaser
