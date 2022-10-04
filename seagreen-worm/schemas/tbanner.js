export default {
    name: 'tbanner',
    title: 'Tbanner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
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
        {
            name: 'icon',
            title: 'Icon',
            type: 'array',
            of: [{ type: 'iconus' }]
        },
    ],
};
