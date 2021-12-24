export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'coverImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        sortable: true,
      },
    },
    {
      title: 'Fonts',
      name: 'fonts',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'text',
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    },
  ],
};
