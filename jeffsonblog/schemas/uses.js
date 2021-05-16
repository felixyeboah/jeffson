export default {
  name: "uses",
  title: "Uses",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      title: "Lists",
      name: "lists",
      type: "array",
      of: [{ type: "string" }],
      options: {
        sortable: true,
      },
    },
  ],
};
