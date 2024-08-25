const customImage = {
  name: "customImage",
  title: "Image",
  type: "image",
  fields: [
    {
      name: "alt",
      title: "Alt",
      type: "string",
      // validation: (Rule: any) =>
      //   Rule.required().error(
      //     "Images must have an Alt tag to make them accessible",
      //   ),
      //
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: false,
      },
    },
  ],
  options: { hotspot: true },
  sources: [],
  preview: {
    select: {
      media: "asset",
      title: "alt",
      subtitle: "caption",
    },
  },
}

export default customImage
