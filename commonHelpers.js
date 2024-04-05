import{i as l,S as p}from"./assets/vendor-BvkBopno.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(r){const s="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${o}`;return fetch(e,{"Content-Type":"application/json"}).then(n=>n.json())}function d({largeImageURL:r,webformatURL:s,tags:i,likes:o,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${i}"
    />
  </a>
  <div class="description">
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${o}</p>
</div>
<div class="img-info">
  <span class="description-text">Views</span>
  <p class="small-text">${e}</p>
</div>
<div class="img-info">
  <span class="description-text">Comments</span>
  <p class="small-text">${t}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${n}</p>
</div>
</div>
</li>`}const m=document.querySelector(".gallery"),f=document.querySelector(".gallery-form"),c=document.querySelector(".search-window"),a=document.querySelector(".loader");f.addEventListener("submit",r=>{r.preventDefault(),a.style.display="block",g().then(s=>{const i=s.hits;i.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML=y(i),new p(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh()}).then(s=>{a.style.display="none"}).catch(s=>console.log(s)),c.value=""});function g(){return u(c.value)}function y(r){return r.map(d).join("")}
//# sourceMappingURL=commonHelpers.js.map
