var B=Object.defineProperty;var N=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>(N(e,typeof t!="symbol"?t+"":t,s),s);import{l as I,s as H}from"./assets/modal-feedback-2adcceae.js";import{a as y}from"./assets/vendor-4357aed0.js";const d=class d{constructor(){this.filter="",this.page=1,this.perPage=8,this.totalPages=1,this.muscles="",this.bodypart="",this.equipment="",this.name=""}fetchImages(){d.END_POINT="/api/filters";const t=d.BASE_URL+d.END_POINT,s={page:this.page,limit:this.perPage,totalPages:this.totalPages,filter:this.filter};return y.get(t,{params:s}).then(a=>a.data)}fetchExercises(){d.END_POINT="/api/exercises";const t=d.BASE_URL+d.END_POINT,s={muscles:this.muscles,bodypart:this.bodypart,equipment:this.equipment,limit:this.perPage,page:this.page,name:this.name};return y.get(t,{params:s}).then(a=>a.data)}};P(d,"BASE_URL","https://energyflow.b.goit.study");let k=d;const i=new k,g=document.querySelector(".gallery-list"),A=document.querySelector(".filter-list"),U=document.querySelectorAll(".filter-button"),O=document.querySelector(".exercises-title");let E=document.getElementsByClassName("active-btn");const p=document.querySelector(".page-number-list"),l=document.querySelector(".page-number-list-workout");let L=window.matchMedia("(min-width: 768px)"),x=window.matchMedia("(min-width: 1440px)");const D=document.querySelector(".title-container"),h=document.querySelector(".loader"),b=document.querySelector(".form");async function R(){i.filter="Muscles",i.page=1;let e,t;if(L.matches){i.perPage=12;const a=await i.fetchImages();e=w(a.results),t=C(a.totalPages)}else{i.perPage=8;const a=await i.fetchImages();e=w(a.results),t=C(a.totalPages)}E&&(g.innerHTML=e),p.innerHTML=t,p.querySelector("li:first-child").classList.add("active-page"),h.classList.add("is-hidden")}R();A.addEventListener("click",j);async function j(e){h.classList.remove("is-hidden"),O.textContent="Exercises",U.forEach(c=>{c.getElementsByClassName("active-btn")===e.target.getElementsByClassName("active-btn")?c.classList.add("active-btn"):c.classList.remove("active-btn")});let t=e.target.name;if(t==="muscles")i.filter="Muscles";else if(t==="body-parts")i.filter="Body parts";else if(t==="equipment")i.filter="Equipment";else return;let s,a;L.matches?i.perPage=12:i.perPage=8,i.page=1;const o=await i.fetchImages();s=w(o.results),E&&(g.innerHTML=s),l.innerHTML="",a=C(o.totalPages),p.innerHTML=a,p.querySelector("li:first-child").classList.add("active-page"),h.classList.add("is-hidden")}function F({filter:e,imgUrl:t,name:s}){let a=s[0].toUpperCase()+s.slice(1),o=e[0].toUpperCase()+e.slice(1);return`<li class="gallery-item">
          <img
            class="exercises-img"
            src=${t}
            alt=${a}
          />
        <div class="muscles">
          <span class="muscles-group">${a}</span>
          <span class="muscles-group-name">${o}</span>
        </div>
      </li>`}function w(e){return e.map(F).join("")}p.addEventListener("click",Z);async function Z(e){if(e.target.classList.contains("page-number-item")){let t=document.querySelectorAll(".page-number-item"),s=e.target.textContent;t.forEach(n=>{n.getElementsByClassName("active-page")===e.target.getElementsByClassName("active-page")?n.classList.add("active-page"):n.classList.remove("active-page")}),i.page=s;const a=await i.fetchImages(),o=w(a.results);E&&(g.innerHTML=o)}else return}l.addEventListener("click",G);async function G(e){if(e.target.classList.contains("page-number-item")){let t=document.querySelectorAll(".page-number-item"),s=e.target.textContent;t.forEach(n=>{n.getElementsByClassName("active-page")===e.target.getElementsByClassName("active-page")?n.classList.add("active-page"):n.classList.remove("active-page")}),i.page=s;const a=await i.fetchExercises(),o=S(a.results);E&&(g.innerHTML=o)}else return}function W(e){return`<li class="page-number-item">${e}</li>`}function C(e){const t=[];for(let s=1;s<=e;s++)t.push(W(s));return t.join(" ")}g.addEventListener("click",J);async function J(e){h.classList.remove("is-hidden"),b.classList.remove("is-hidden"),i.page=1;const t=e.target.closest(".gallery-item");if(t){let s,a;const o=t.lastElementChild.firstElementChild.textContent,n=e.target.closest(".gallery-item");let c=n.querySelector(".muscles-group"),f=n.querySelector(".muscles-group-name");D.innerHTML=`<h2 class="exercises-title">
      Exercises /
      <span class="choosen-content">${o}</span>
    </h2>`,x.matches?i.perPage=9:x.matches||(i.perPage=8),i.bodypart="",i.muscles="",i.equipment="",f.innerText.toLowerCase().replace(" ","").slice(0,-1)==="bodypart"?i.bodypart=c.innerText.toLowerCase():f.innerText.toLowerCase()==="muscles"?i.muscles=c.innerText.toLowerCase():f.innerText.toLowerCase()==="equipment"&&(i.equipment=c.innerText.toLowerCase());const m=await i.fetchExercises();s=S(m.results),g.innerHTML=s,s=S(m.results),p.innerHTML="",L.matches?L.matches?m.totalPages>21?(l.style.maxWidth="100%",l.style.margin="0 auto",l.style.justifyContent="flex-start",l.style.overflow="hidden"):l.style.justifyContent="center":x.matches&&(l.style.margin="0 auto"):m.totalPages>5&&(l.style.maxWidth="45%",l.style.margin="0 auto",l.style.justifyContent="flex-start",l.style.overflow="hidden"),a=C(m.totalPages),l.innerHTML=a,l.querySelector("li:first-child").classList.add("active-page"),h.classList.add("is-hidden")}else return}function z({name:e,burnedCalories:t,bodyPart:s,target:a,rating:o,time:n,_id:c}){const f=e[0].toUpperCase()+e.slice(1),m=Math.round(o).toString().padEnd(2,".")+0,_=s[0].toUpperCase()+s.slice(1),$=a[0].toUpperCase()+a.slice(1);return`<li class="workout-item">
        <div class="top-wrap">
          <div class="top-wrap-right">
            <div class="workout">WORKOUT</div>
            <div class="rating">
              <span class="rating-number">${m}</span>
              <svg class="icon-star" width="13" height="13">
                <use href="./img/sprite.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <button class="button" type="button" name="start" data-action="start" id="${c}">
            Start
            <svg id="${c}" class="icon-arrow" width="14" height="14">
              <use href="./img/sprite.svg#icon-arrow" id="${c}"></use>
            </svg>
          </button>
        </div>
        <div class="workout-container">
          <div class="main-icon-wrap">
            <svg class="icon-run" width="14" height="16">
              <use href="./img/sprite.svg#icon-run"></use>
            </svg>
          </div>
          <p class="workout-title single-line">${f}</p>
        </div>
        <div class="workout-info">
          <p class="workout-info-container">
            <span class="workout-info-title">Burned calories:</span>
            <span class="workout-info-value">${t} / ${n} min</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Body part:</span>
            <span class="workout-info-value">${_}</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Target:</span>
            <span class="workout-info-value">${$}</span>
          </p>
        </div>
      </li>`}function S(e){return e.map(z).join("")}b.addEventListener("submit",e=>{e.preventDefault(),b.reset()});const T="favorites-exercises",r={gallery_btn:document.querySelector(".gallery-list"),exercises_container:document.querySelector(".exercise-modal-container"),exercises_wrap:document.querySelector(".modal-exercise-wrap"),close_btn:document.querySelector(".close-exercise-btn"),card_markup_modal:document.querySelector(".card-markup-modal"),modal_button:document.querySelector(".modal-button"),modal_add_favorite:document.querySelector(".modal-add-favorite"),moodal_give_rating:document.querySelector(".modal-give-rating"),body:document.querySelector("body")};let u;const K=y.create({baseURL:"https://energyflow.b.goit.study/api"});class Y{constructor(){}getExercisesById(t){return K.get(`/exercises/${t}`).then(s=>s.data)}}const q=new Y;try{r.gallery_btn.addEventListener("click",Q)}catch(e){console.log(e)}function Q(e){if(!e.target.closest(".button"))return;const t=e.target.closest(".button");if(!t)return;u=t.id,r.moodal_give_rating.setAttribute("id",`${u}`),V(),te(u);let s=localStorage.getItem("favorites-exercises"),a=s?JSON.parse(s):[];Array.isArray(a)||(a=[]),a.some(function(n){return n._id===u})?r.modal_add_favorite.textContent="Remove from ":r.modal_add_favorite.textContent="Add to favorites"}function V(e){r.body.classList.add("modal"),r.exercises_container.classList.add("active"),r.exercises_wrap.classList.add("active"),r.moodal_give_rating.addEventListener("click",ee),r.exercises_container.addEventListener("click",X),r.close_btn.addEventListener("click",v),window.addEventListener("keydown",M),r.modal_add_favorite.addEventListener("click",le)}function X(e){e.target===r.exercises_container&&v()}function v(e){r.body.classList.remove("modal"),r.exercises_container.classList.remove("active"),r.exercises_wrap.classList.remove("active"),r.exercises_container.removeEventListener("click",v),r.close_btn.removeEventListener("click",v),window.removeEventListener("keydown",M),r.card_markup_modal.classList.add("is-hidden"),r.modal_button.classList.add("is-hidden")}function M(e){e.key==="Escape"&&v()}function ee(e){r.exercises_wrap.classList.remove("active")}async function te(e){try{const t=await q.getExercisesById(`${e}`);r.card_markup_modal.innerHTML=se(t),re(t)}catch(t){console.log(`Error: ${t}`)}}function se(e){let t="";return t+=ae(e),t+=ie(e),t+=oe(e),t+=ne(e),t}function ae(e){return`      <!-- дів для gif -->
      <div class="modal-gif">
          <img
            class="modal-iframe-gif"
            src="${e.gifUrl}"
            alt="Recipe video"
            width="295"
            height="295"
          />
      </div>`}function ie(e){return` <div class="modal-general-info">
       
        <div class="card-star-modal">
        <h2 class="modal-exercise-name">${e.name}</h2>
        <div class="exercise-star-modal">
            <div class="modal-exercise-rating">${e.rating}</div>
            <div class="modal-exercise-active">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-1">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-2">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-3">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-4">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-5">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
            </div>
        </div>
        </div>
       `}function re(e){const t=Math.round(e.rating);for(let s=1;s<=t;s++)document.querySelector(`.star-${s}`).classList.add("activeStar")}function oe(e){return` <!-- Teg -->
    <div class="modal-teg">
          <ul class="modal-hashtag-list">
            <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Target </span>
            <span class="modal-value">${e.target}</span> </li>

             <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Body Part </span>
             <span class="modal-value">${e.bodyPart}</span> </li>

              <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Equipment </span>
              <span class="modal-value">${e.equipment}</span> </li>

               <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Popular </span>
               <span class="modal-value">${e.popularity}</span> </li>

                <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Burned Calories </span>
                <span class="modal-value">${e.burnedCalories}/${e.time}</span> </li>
          </ul>
        </div>`}function ne(e){return`<p class="modal-recipe-description">
          ${e.description}
        </p>
      </div>`}async function le(){let e=localStorage.getItem("favorites-exercises"),t=e?JSON.parse(e):[];Array.isArray(t)||(t=[]);let s=await q.getExercisesById(`${u}`);if(r.modal_add_favorite.textContent==="Add to favorites"){const a={_id:s._id,bodyPart:s.bodyPart,equipment:s.equipment,gifUrl:s.gifUrl,name:s.name,target:s.target,description:s.description,rating:s.rating,burnedCalories:s.burnedCalories,time:s.time,popularity:s.popularity};t.push(a);const o=JSON.stringify(t);localStorage.setItem("favorites-exercises",o),r.modal_add_favorite.textContent="Remove from "}else r.modal_add_favorite.textContent="Add to favorites",ce(u)}function ce(e){const t=I(T),s=[];return t.map(a=>(a._id!==e&&s.push(a),s)),H(T,s)}const de=document.getElementById("newsletter-form"),me=document.getElementById("email");function ue(e){e.preventDefault();const t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,s=me.value;if(!t.test(s)){console.log("error!");return}const a={email:s};y.post("https://energyflow.b.goit.study/api/subscription",a).then(o=>{console.log(o.data),alert("You have successfully subscribed to our newsletter!")}).catch(o=>{console.error("Error sending the order:",o),alert("An error occurred. Please try again.")})}de.addEventListener("submit",ue);const pe=document.querySelector(".js-link-home");pe.classList.add("link-home-favor");const ge=document.querySelector(".js-link-home-mobail");ge.classList.add("link-home-favor");
//# sourceMappingURL=commonHelpers2.js.map
