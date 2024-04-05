import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api'
import { createMarkup } from './js/render-functions'

const gallery = document.querySelector(".gallery")
const searchForm = document.querySelector(".gallery-form")
const searchInput = document.querySelector(".search-window")
const loadingIndicator = document.querySelector('.loader');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    loadingIndicator.style.display = 'block'
    imgCreating().then(el => {;
        const imgList = el.hits
        if (imgList.length === 0) {
            iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight'
        });
        }
            gallery.innerHTML = imgTemplate(imgList)
            let lightbox = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionsDelay: 250 });
            lightbox.refresh()
        }).then(data => {
            loadingIndicator.style.display = 'none'
        }).catch(error => console.log(error))
        searchInput.value = ''
    }
)
function imgCreating() {
    const img = getImages(searchInput.value)
    return img
}
function imgTemplate(arr) {
    return arr.map(createMarkup).join('');
             
}
