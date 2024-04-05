import{a as y,i as p,S as v}from"./assets/vendor-B7hnfR1Z.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function L(t,s){const r="https://pixabay.com",i="/api/",e=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${s}`,per_page:15}),o=`${r}${i}?${e}`;return(await y.get(o)).data}function b({largeImageURL:t,webformatURL:s,tags:r,likes:i,views:e,comments:o,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${r}"
    />
  </a>
  <div class="description">
  <div class="img-info">
  <span class="description-text">Likes</span>
  <p class="small-text">${i}</p>
</div>
<div class="img-info">
  <span class="description-text">Views</span>
  <p class="small-text">${e}</p>
</div>
<div class="img-info">
  <span class="description-text">Comments</span>
  <p class="small-text">${o}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${n}</p>
</div>
</div>
</li>`}const c=document.querySelector(".gallery"),w=document.querySelector(".gallery-form"),u=document.querySelector(".search-window"),a=document.querySelector(".loader"),l=document.querySelector(".load-btn");let m,d=1;const S=15;let f=1;w.addEventListener("submit",async t=>{t.preventDefault(),c.innerHTML="",m=u.value;try{h()}catch(s){console.log(s)}u.value=""});l.addEventListener("click",x);function x(){d+=1;try{h()}catch(t){console.log(t)}O(),C()}async function $(){const t=L(m,d),s=await t;return f=Math.ceil(s.total/S),t}function P(t){return t.map(b).join("")}function g(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}function O(){d>=f?(q(),p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}async function h(){a.style.display="block";const t=await $(),s=t.hits;t.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none"):(c.insertAdjacentHTML("beforeend",P(s)),a.style.display="none",g(),new v(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh())}function C(){const t=c.firstChild.getBoundingClientRect().height,s=window.scrollY||window.pageYOffset;scrollBy({top:s+t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
