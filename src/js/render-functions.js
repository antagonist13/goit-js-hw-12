export function createMarkup ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads })
{
    return`<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="description">
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${likes}</p>
</div>
<div class="img-info">
  <span class="description-text">Views</span>
  <p class="small-text">${views}</p>
</div>
<div class="img-info">
  <span class="description-text">Comments</span>
  <p class="small-text">${comments}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${downloads}</p>
</div>
</div>
</li>`
}


