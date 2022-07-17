import sanityClient from '@sanity/client';
import imageURLbuilder from '@sanity/image-url';

export const client=sanityClient({
    projectId:'lba4z65j',
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

});
const builder=imageURLbuilder(client);
export const urlFor=(source)=>builder.image(source);