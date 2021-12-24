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
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        sortable: true,
      },
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
      name: 'gallery',
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'display',
          type: 'string',
          title: 'Display as',
          description: 'How should we display these images?',
          options: {
            list: [
              { title: 'Stacked on top of eachother', value: 'stacked' },
              { title: 'In-line', value: 'inline' },
              { title: 'Carousel', value: 'carousel' },
            ],
            layout: 'radio', // <-- defaults to 'dropdown'
          },
        },
        {
          name: 'zoom',
          type: 'boolean',
          title: 'Zoom enabled',
          description: 'Should we enable zooming of images?',
        },
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const { images, image } = selection;

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          };
        },
      },
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
    {
      name: 'challenge',
      title: 'Challenge',
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
    {
      name: 'solution',
      title: 'Solution',
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
