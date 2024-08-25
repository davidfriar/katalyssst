import { defineType, defineField, defineArrayMember } from "sanity"

const siteInfo = defineType({
  name: "siteInfo",
  type: "document",
  title: "Site Info",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "footer",
      type: "text",
      title: "Footer",
      rows: 2,
      description: "Text you want to appear at the bottom of each page.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      description: "Your name",
      title: "Author",
    },
    {
      name: "logo",
      title: "Logo",
      description: "A an awesome logo for your awesome site.",
      type: "image",
    },
  ],
})
export default siteInfo
