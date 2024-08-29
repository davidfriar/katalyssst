import { defineType, defineField, defineArrayMember } from "sanity"
import { Rule } from "sanity"

const video = {
  type: "document",
  name: "video",
  title: "Video",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of your video",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("You must have a title."),
    },
    {
      name: "subtitle",
      title: "Subitle",
      description: "A subtitle for your video, if you want one",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      description: "The video file",
      type: "file",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      description: "The image which will display before your video starts",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      description: "Some more text about your video, if you want it",
      type: "blockContent",
    },
  ],
}

export default video
