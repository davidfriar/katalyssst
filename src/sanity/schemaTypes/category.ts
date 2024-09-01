import { defineType } from "sanity"
import { Rule } from "sanity"

const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "A name for your category, which will be used as the title of a category page",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description:
        "A subtitle for your category, if you want it, which will be used as the subtitle of a category page",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The end part of the url that will be used by the site for this category",
      validation: (rule: Rule) =>
        rule
          .required()
          .error(
            "You must have a slug. Just click the 'generate' button and we can fix that for you.",
          ),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
})
export default category
