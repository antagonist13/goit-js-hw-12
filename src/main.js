import axios from 'axios';
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
const loadBtn = document.querySelector('.load-btn')

let query;
let currentPage = 1;
const pageSize = 15
let maxPage = 1

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    gallery.innerHTML = ""
    query = searchInput.value
    try {
        mainCreating()
        
    } catch (error) {
        console.log(error)
    }
    
    searchInput.value = ''
    }
)

loadBtn.addEventListener('click', onLoaderClick)

function onLoaderClick() {
  currentPage += 1;
    try {
        mainCreating()
    } catch (error) {
        console.log(error)
    } 
    
    checkBtnStatus();
    myScroll()
}

async function imgCreating() {
    const img = getImages(query, currentPage)
    const res = await img
    maxPage = Math.ceil(res.total / pageSize);
    return img
}
function imgTemplate(arr) {
    return arr.map(createMarkup).join('');         
}
function showLoader() {
  loadBtn.classList.remove('hidden');
}
function hideLoader() {
  loadBtn.classList.add('hidden');
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
      hideLoader();
      iziToast.info({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight'
});
  } else {
    showLoader();
  }
}
async function mainCreating() {
    loadingIndicator.style.display = 'block'
        const el = await imgCreating()
        const imgList = el.hits
        if (el.hits.length === 0) {
            iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight'
            });
            loadingIndicator.style.display = 'none'
        } else {
    gallery.insertAdjacentHTML('beforeend', imgTemplate(imgList))
    loadingIndicator.style.display = 'none'
        showLoader();
    let lightbox = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionsDelay: 250 });
            lightbox.refresh()
        }
}
function myScroll() {
    const height = gallery.firstChild.getBoundingClientRect().height;
    const currentScrollY = window.scrollY || window.pageYOffset; // отримуємо поточне вертикальне положення прокрутки

    scrollBy({
        top: currentScrollY + height,
        behavior: 'smooth',
    });
}