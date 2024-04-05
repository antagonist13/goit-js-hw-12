import{a as v,i as p,S as L}from"./assets/vendor-B7hnfR1Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function b(e,r){const o="https://pixabay.com",a="/api/",t=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}),s=`${o}${a}?${t}`;return(await v.get(s)).data}function x({largeImageURL:e,webformatURL:r,tags:o,likes:a,views:t,comments:s,downloads:i}){return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${o}"
    />
  </a>
  <div class="description">
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${a}</p>
</div>
<div class="img-info">
  <span class="description-text">Views</span>
  <p class="small-text">${t}</p>
</div>
<div class="img-info">
  <span class="description-text">Comments</span>
  <p class="small-text">${s}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${i}</p>
</div>
</div>
</li>`}const l=document.querySelector(".gallery"),S=document.querySelector(".gallery-form"),u=document.querySelector(".search-window"),c=document.querySelector(".loader"),d=document.querySelector(".load-btn");let m,n;const w=15;let f=1;S.addEventListener("submit",async e=>{n=1,e.preventDefault(),l.innerHTML="",m=u.value;try{await h(),y()}catch(r){console.log(r)}u.value=""});d.addEventListener("click",e=>{e.preventDefault(),$()});async function $(){n+=1;try{await h()}catch(e){console.log(e)}y(),C()}async function P(){const e=b(m,n),r=await e;return f=Math.ceil(r.total/w),e}function q(e){return e.map(x).join("")}function g(){d.classList.remove("hidden")}function O(){d.classList.add("hidden")}function y(){n>=f?(O(),p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}async function h(){c.style.display="block";const e=await P(),r=e.hits;e.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"):(l.insertAdjacentHTML("beforeend",q(r)),c.style.display="none",g(),new L(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh())}function C(){const e=l.firstChild.getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
