import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    dataset: 'production',
    projectId: 'ltc86xi3',
    apiVersion: '2022-10-05',
    useCdn: true,
    token: process.env.SANITY_PROJECT_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);