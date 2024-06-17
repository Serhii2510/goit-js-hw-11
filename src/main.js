import { getImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formInput = document.querySelector('.search-images-form');
const gallery = document.querySelector('.gallery');
const loadImg = document.querySelector('.loader');

let captionDisplay = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    while (gallery.firstChild) {gallery.removeChild(gallery.firstChild)}
    
    const searchRequest = e.target.elements.input.value.trim();
    if (!searchRequest) {
        return iziToast.error({
            position: 'topRight',
            backgroundColor: 'red',
            theme: 'dark',
            title: 'Error',
            titleColor: 'white',
            message: `Search field is empty`,
            messageColor: 'white',
        });
    }

    loadImg.classList.remove('visually-hidden');

    getImages(searchRequest)
        .then(data => {
        if (!data.total) {
            return iziToast.error({
            position: 'topRight',
            backgroundColor: 'red',
            theme: 'dark',
            title: 'Error',
            titleColor: 'white',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            messageColor: 'white',
            maxWidth: 400,
            });
        }
            
        return data;
        })
        .then(data => {
            const markup = imagesTemplate(data);
            gallery.insertAdjacentHTML("afterbegin", markup.join(""));
            
            captionDisplay.refresh();
            
            loadImg.classList.add('visually-hidden');
        })
        .catch(error => console.log(`Error: ${error}`));
    
    formInput.reset();
})