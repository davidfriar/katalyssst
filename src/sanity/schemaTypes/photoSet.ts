import { Rule } from "sanity"

const photoSet = {
  type: "document",
  name: "photoSet",
  title: "Photo Set",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of your photo set",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("You must have a title."),
    },
    {
      name: "subtitle",
      title: "Subitle",
      description: "A subtitle for your photoset, if you want one",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      description:
        "What kind of photo set is this? This will determine which page it is listed on",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule: Rule) =>
        rule.required().error("You must choose a category"),
    },
    {
      name: "photos",
      type: "array",
      title: "Photos",
      of: [{ type: "customImage" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "description",
      title: "Description",
      description: "Some more text about your photo set, if you want it",
      type: "blockContent",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The end part of the url that will be used by the site for this photo set",
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
}

export default photoSet
