import{a as y,i as h,S as L}from"./assets/vendor-B7hnfR1Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function v(t,r){const a="https://pixabay.com",i="/api/",e=new URLSearchParams({key:"43176233-1ec673b2575ffa542635b4c36",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}),s=`${a}${i}?${e}`;return(await y.get(s)).data}function x({largeImageURL:t,webformatURL:r,tags:a,likes:i,views:e,comments:s,downloads:o}){return`<li class="gallery-item">
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
  <p class="small-text">${i}</p>
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
  <p class="small-text">${o}</p>
</div>
</div>
</li>`}const u=document.querySelector(".gallery"),b=document.querySelector(".gallery-form"),l=document.querySelector(".search-window"),d=document.querySelector(".loader"),n=document.querySelector(".load-btn");let p,c=1;const S=15;let m=1;b.addEventListener("submit",async t=>{t.preventDefault(),u.innerHTML="",p=l.value;try{g()}catch(r){console.log(r)}f(),l.value=""});n.addEventListener("click",$);function $(){c+=1;try{g()}catch(t){console.log(t)}O()}async function w(){const t=v(p,c),r=await t;return m=Math.ceil(r.total/S),t}function P(t){return t.map(x).join("")}function f(){n.classList.remove("hidden")}function q(){n.classList.add("hidden")}function O(){c>=m?q():f()}async function g(){d.style.display="block";const t=await w(),r=t.hits;t.hits.length===0&&h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.insertAdjacentHTML("beforeend",P(r)),d.style.display="none",new L(".gallery li a",{captionsData:"alt",captionsDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
