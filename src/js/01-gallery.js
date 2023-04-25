// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createGalleryItems(galleryItems) {
    
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
    }).join('');  
}

const galleryList = document.querySelector('.gallery');
const galleryEl = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryEl);

//galleryList.addEventListener('click', onGalleryListClick);

//function onGalleryListClick(event) {

    //if (event.target.nodeName !== 'IMG') {
      //  return;
    //}

    //event.preventDefault();
//}

    new SimpleLightbox('.gallery a',
        {
            captionDelay: 250,
            captionsData: "alt",
        });

console.log(galleryItems);
