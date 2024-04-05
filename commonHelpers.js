import{a as h,i as u,S as v}from"./assets/vendor-B7hnfR1Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function L(t,r){const a="https://pixabay.com",o="/api/",e=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}),s=`${a}${o}?${e}`;return(await h.get(s)).data}function b({largeImageURL:t,webformatURL:r,tags:a,likes:o,views:e,comments:s,downloads:i}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${a}"
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
  <p class="small-text">${s}</p>
</div>
<div class="img-info">
  <span class="description-text">Downloads</span>
  <p class="small-text">${i}</p>
</div>
</div>
</li>`}const p=document.querySelector(".gallery"),x=document.querySelector(".gallery-form"),l=document.querySelector(".search-window"),d=document.querySelector(".loader"),n=document.querySelector(".load-btn");let m,c=1;const S=15;let f=1;x.addEventListener("submit",async t=>{t.preventDefault(),p.innerHTML="",m=l.value;try{y()}catch(r){console.log(r)}g(),l.value=""});n.addEventListener("click",$);function $(){c+=1;try{y()}catch(t){console.log(t)}O()}async function w(){const t=L(m,c),r=await t;return f=Math.ceil(r.total/S),t}function P(t){return t.map(b).join("")}function g(){n.classList.remove("hidden")}function q(){n.classList.add("hidden")}function O(){c>=f?(q(),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}async function y(){d.style.display="block";const t=await w(),r=t.hits;t.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.insertAdjacentHTML("beforeend",P(r)),d.style.display="none",new v(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
