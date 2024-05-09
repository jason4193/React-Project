// Function to get the URL of the image from assets
export const getImageURL = (path) =>  {
    return new URL(`/assets/${path}`, import.meta.url).href;
};