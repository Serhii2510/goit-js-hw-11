import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){const o="https://pixabay.com",r="/api/",s=new URLSearchParams({key:"44423384-360ba42c67bb4e928fcac247f",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${r}?${s}`;return fetch(e).then(t=>{if(!t)throw new Error(t.status);return t.json()})}function g(i){const o=[];for(const{webformatURL:r,largeImageURL:s,tags:e,likes:t,views:l,comments:m,downloads:f}of i.hits)o.push(`
            <li class="gallery-item">
              <a class="gallery-link" href="${s}">
                 <img
                     class="gallery-image"
                     src="${r}"
                     data-source="${s}"
                     alt="${e}"
                   />
              </a>
              <div class="gallery-info">
                 <ul class="gallery-info-list">
                     <li>
                         <h3 class="gallery-info-name">Likes</h3>
                         <p class="gallery-info-text">${t}</p>
                     </li>
                     <li>
                         <h3 class="gallery-info-name">Views</h3>
                         <p class="gallery-info-text">${l}</p>
                     </li>
                     <li>
                         <h3 class="gallery-info-name">Comments</h3>
                         <p class="gallery-info-text">${m}</p>
                     </li>
                     <li>
                         <h3 class="gallery-info-name">Downloads</h3>
                         <p class="gallery-info-text">${f}</p>
                     </li>
                 </ul>
             </div>
         </li>`);return o}const c=document.querySelector(".search-images-form"),a=document.querySelector(".gallery"),u=document.querySelector(".loader");let p=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",i=>{for(i.preventDefault();a.firstChild;)a.removeChild(a.firstChild);const o=i.target.elements.input.value.trim();if(!o)return n.error({position:"topRight",backgroundColor:"red",theme:"dark",title:"Error",titleColor:"white",message:"Search field is empty",messageColor:"white"});u.classList.remove("visually-hidden"),h(o).then(r=>r.total?r:n.error({position:"topRight",backgroundColor:"red",theme:"dark",title:"Error",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:400})).then(r=>{const s=g(r);a.insertAdjacentHTML("afterbegin",s.join("")),p.refresh(),u.classList.add("visually-hidden")}).catch(r=>console.log(`Error: ${r}`)),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
