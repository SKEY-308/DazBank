export default {
    name: 'bfeatures',
    title: 'Bfeatures',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
        {
            name: 'bfeat',
            title: 'Bfeat',
            type: 'array',
            of: [{ type: 'features' }]
        },
    ],
};
