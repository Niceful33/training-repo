// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryMarkup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  ''
);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
