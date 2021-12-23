import SanityClient from '@sanity/client';
import SanityImage from '@sanity/image-url';

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: '2099-12-20',
};

const client = SanityClient(options);

export const urlFor = (source) => SanityImage(client).image(source);

export const imageBuilder = SanityImage(client);

export const previewClient = SanityClient({
  ...options,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
