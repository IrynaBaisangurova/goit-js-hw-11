import{i as a,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){const r="https://pixabay.com/api/",s="47181465-58855b534a7ed572abb95719a",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function y(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
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
              <p class="info">${l}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${p}</p>
            </li>
          </ul>
    </li>`).join("")}const f=document.querySelector(".form-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".input-search");n.style.display="none";f.addEventListener("submit",d);function d(o){o.preventDefault(),c.innerHTML="",n.style.display="block";const r=u.value.trim();if(r==="")return n.style.display="none",a.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});m(r).then(s=>{n.style.display="none",s.hits.length||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=y(s.hits),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),f.reset()}).catch(s=>{n.style.display="none",console.error("Error fetching images:",s)}).finally(()=>n.style.display="none"),u.value=""}
//# sourceMappingURL=index.js.map