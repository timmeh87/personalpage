import { GalleryCollection, GalleryImage } from "./GalleryImages";


export function getImagePath(
    collection: GalleryCollection,
    image: GalleryImage
) {
    return `/profile/images/${collection.path}/${image.image}`;
}


export function getThumbnailPath(
    collection: GalleryCollection,
    image: GalleryImage
) {
    return `/profile/thumbs/${collection.path}/${image.image}`;
}