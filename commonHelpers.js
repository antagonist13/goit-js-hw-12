import{a as l,i as p,S as u}from"./assets/vendor-B7hnfR1Z.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function d(r){const s="https://pixabay.com",i="/api/",a=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${a}`;return(await l.get(e)).data}function m({largeImageURL:r,webformatURL:s,tags:i,likes:a,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
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
  <p class="small-text">${a}</p>
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
  <p class="small-text">${o}</p>
</div>
</div>
</li>`}const f=document.querySelector(".gallery"),g=document.querySelector(".gallery-form"),c=document.querySelector(".search-window"),n=document.querySelector(".loader");g.addEventListener("submit",async r=>{r.preventDefault(),n.style.display="block";try{const i=(await y()).hits;i.length===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f.innerHTML=h(i),new u(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh(),n.style.display="none"}catch(s){console.log(s)}c.value=""});function y(){return d(c.value)}function h(r){return r.map(m).join("")}
//# sourceMappingURL=commonHelpers.js.map
