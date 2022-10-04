export default {
    name: 'features',
    title: 'Features',
    type: 'document',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
    ],
};
