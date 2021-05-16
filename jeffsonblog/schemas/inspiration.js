export default {
  name: "inspirations",
  title: "Inspirations",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "coverImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "from",
      title: "From",
      type: "string",
    },
    {
      name: "via",
      title: "Via",
      type: "string",
    },
    {
      name: "to",
      title: "To",
      type: "string",
    },
  ],
};
