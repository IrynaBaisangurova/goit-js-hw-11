import{i as f,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(i){const r="https://pixabay.com/api/",s="47181465-58855b534a7ed572abb95719a",o=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(i){return i.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${o}"
              width="360"
            />
          </a>
          <ul class="info-list">
            <li class="info-item">
              <h2 class="subtitle">Likes</h2>
              <p class="info">${e}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Views</h2>
              <p class="info">${t}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Comments</h2>
              <p class="info">${a}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${u}</p>
            </li>
          </ul>
    </li>`).join("")}const c=document.querySelector(".form-search"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";c.addEventListener("submit",d);function d(i){i.preventDefault(),n.innerHTML="",l.style.display="block";const r=i.target.elements.search.value;m(r).then(s=>{l.style.display="none",s.hits.length||f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=p(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),c.reset()}).catch(s=>{l.style.display="none",console.log(s)})}
//# sourceMappingURL=index.js.map
