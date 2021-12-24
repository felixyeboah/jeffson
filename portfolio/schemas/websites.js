export default {
  name: "websites",
  title: "Websites",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
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
  ],
};
