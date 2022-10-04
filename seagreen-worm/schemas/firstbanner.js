export default {
    name: 'firstbanner',
    title: 'FirstBanner',
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
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'value',
            title: 'Value',
            type: 'array',
            of: [{ type: 'val' }]
        },
        {
            name: 'user',
            title: 'User',
            type: 'array',
            of: [{ type: 'users' }]
        },

    ],
};

