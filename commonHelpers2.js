var N=Object.defineProperty;var A=(e,s,t)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var q=(e,s,t)=>(A(e,typeof s!="symbol"?s+"":s,t),t);import{l as U,s as O}from"./assets/modal-feedback-63a6ba4f.js";import{a as y}from"./assets/vendor-4357aed0.js";const l=class l{constructor(){this.filter="",this.page=1,this.perPage=8,this.totalPages=1,this.muscles="",this.bodypart="",this.equipment="",this.name=""}fetchImages(){l.END_POINT="/api/filters";const s=l.BASE_URL+l.END_POINT,t={page:this.page,limit:this.perPage,totalPages:this.totalPages,filter:this.filter};return y.get(s,{params:t}).then(a=>a.data)}fetchExercises(){l.END_POINT="/api/exercises";const s=l.BASE_URL+l.END_POINT,t={muscles:this.muscles,bodypart:this.bodypart,equipment:this.equipment,limit:this.perPage,page:this.page,keyword:this.keyword};return y.get(s,{params:t}).then(a=>a.data)}};q(l,"BASE_URL","https://energyflow.b.goit.study");let E=l;const i=new E,d=document.querySelector(".gallery-list"),R=document.querySelector(".filter-list"),D=document.querySelectorAll(".filter-button"),j=document.querySelector(".exercises-title");let C=document.getElementsByClassName("active-btn");const p=document.querySelector(".page-number-list"),f=document.querySelector(".page-number-list-workout"),k=document.querySelector(".page-btns");let $=window.matchMedia("(min-width: 768px)"),P=window.matchMedia("(min-width: 1440px)");const F=document.querySelector(".title-container"),u=document.querySelector(".loader"),b=document.querySelector(".form"),T=document.querySelector(".search");document.querySelector(".svg-button");const x=document.querySelector(".negative-result");async function Z(){i.filter="Muscles",i.page=1;let e,s;try{if($.matches){i.perPage=12;const a=await i.fetchImages();e=w(a.results),s=v(a.totalPages)}else{i.perPage=8;const a=await i.fetchImages();e=w(a.results),s=v(a.totalPages)}C&&(d.innerHTML=e),p.innerHTML=s,p.querySelector("li:first-child").classList.add("active-page")}catch(t){console.log(t.message)}finally{u.classList.add("is-hidden")}}Z();R.addEventListener("click",G);async function G(e){u.classList.remove("is-hidden"),x.classList.add("is-hidden"),b.classList.add("is-hidden"),i.keyword="",j.textContent="Exercises",D.forEach(r=>{r.getElementsByClassName("active-btn")===e.target.getElementsByClassName("active-btn")?r.classList.add("active-btn"):r.classList.remove("active-btn")});let s=e.target.name;if(s==="muscles")i.filter="Muscles";else if(s==="body-parts")i.filter="Body parts";else if(s==="equipment")i.filter="Equipment";else return;let t,a;$.matches?i.perPage=12:i.perPage=8,i.page=1;try{const r=await i.fetchImages();t=w(r.results),C&&(d.innerHTML=t),f.innerHTML="",a=v(r.totalPages),p.innerHTML=a,p.querySelector("li:first-child").classList.add("active-page")}catch(r){console.log(r.message)}finally{u.classList.add("is-hidden")}}function J({filter:e,imgUrl:s,name:t}){let a=t[0].toUpperCase()+t.slice(1),r=e[0].toUpperCase()+e.slice(1);return`<li class="gallery-item">
          <img
            class="exercises-img"
            src=${s}
            alt=${a}
          />
        <div class="muscles">
          <span class="muscles-group">${a}</span>
          <span class="muscles-group-name">${r}</span>
        </div>
      </li>`}function w(e){return e.map(J).join("")}p.addEventListener("click",W);async function W(e){if(e.target.classList.contains("page-number-item")){let s=document.querySelectorAll(".page-number-item"),t=e.target.textContent;s.forEach(n=>{n.getElementsByClassName("active-page")===e.target.getElementsByClassName("active-page")?n.classList.add("active-page"):n.classList.remove("active-page")}),i.page=t;const a=await i.fetchImages(),r=w(a.results);C&&(d.innerHTML=r)}else return}f.addEventListener("click",z);async function z(e){if(e.target.classList.contains("page-number-item")){let s=document.querySelectorAll(".page-number-item"),t=e.target.textContent;s.forEach(n=>{n.getElementsByClassName("active-page")===e.target.getElementsByClassName("active-page")?n.classList.add("active-page"):n.classList.remove("active-page")}),i.page=t;const a=await i.fetchExercises(),r=S(a.results);C&&(d.innerHTML=r)}else return}function K(e){return`<li class="page-number-item">${e}</li>`}function v(e){const s=[];for(let t=1;t<=e;t++)s.push(K(t));return s.join(" ")}d.addEventListener("click",Y);async function Y(e){u.classList.remove("is-hidden"),b.classList.remove("is-hidden"),i.page=1;const s=e.target.closest(".gallery-item");if(s){let t,a;const r=s.lastElementChild.firstElementChild.textContent,n=e.target.closest(".gallery-item");let c=n.querySelector(".muscles-group"),h=n.querySelector(".muscles-group-name");F.innerHTML=`<h2 class="exercises-title">
      Exercises /
      <span class="choosen-content">${r}</span>
    </h2>`,P.matches?i.perPage=9:P.matches||(i.perPage=8),i.bodypart="",i.muscles="",i.equipment="",h.innerText.toLowerCase().replace(" ","").slice(0,-1)==="bodypart"?i.bodypart=c.innerText.toLowerCase():h.innerText.toLowerCase()==="muscles"?i.muscles=c.innerText.toLowerCase():h.innerText.toLowerCase()==="equipment"&&(i.equipment=c.innerText.toLowerCase());try{const m=await i.fetchExercises();t=S(m.results),d.innerHTML=t,k.classList.remove("is-hidden"),p.innerHTML="",console.log(m.totalPages),a=v(m.totalPages),f.innerHTML=a,f.querySelector("li:first-child").classList.add("active-page")}catch(m){console.log(m.message)}finally{u.classList.add("is-hidden")}}}function Q({name:e,burnedCalories:s,bodyPart:t,target:a,rating:r,time:n,_id:c}){const h=e[0].toUpperCase()+e.slice(1),m=Math.round(r).toString().padEnd(2,".")+0,_=t[0].toUpperCase()+t.slice(1),I=a[0].toUpperCase()+a.slice(1);return`<li class="workout-item">
        <div class="top-wrap">
          <div class="top-wrap-right">
            <div class="workout">WORKOUT</div>
            <div class="rating">
              <span class="rating-number">${m}</span>
              <svg class="icon-star" width="13" height="13">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <button class="button" type="button" name="start" data-action="start" id="${c}">
            Start
            <svg id="${c}" class="icon-arrow" width="14" height="14">
              <use href="../img/sprite.svg#icon-arrow" id="${c}"></use>
            </svg>
          </button>
        </div>
        <div class="workout-container">
          <div class="main-icon-wrap">
            <svg class="icon-run" width="14" height="16">
              <use href="../img/sprite.svg#icon-run"></use>
            </svg>
          </div>
          <p class="workout-title single-line">${h}</p>
        </div>
        <div class="workout-info">
          <p class="workout-info-container">
            <span class="workout-info-title">Burned calories:</span>
            <span class="workout-info-value">${s} / ${n} min</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Body part:</span>
            <span class="workout-info-value">${_}</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Target:</span>
            <span class="workout-info-value">${I}</span>
          </p>
        </div>
      </li>`}function S(e){return e.map(Q).join("")}b.addEventListener("submit",V);async function V(e){e.preventDefault();let s=T.value;if(!s){alert("Add search input");return}u.classList.remove("is-hidden"),k.classList.remove("is-hidden");try{i.keyword=s;const{results:t,totalPages:a}=await i.fetchExercises();if(T.value="",t.length>0){const r=S(t);d.innerHTML=r,x.classList.add("is-hidden");const n=v(a);f.innerHTML=n,f.querySelector("li:first-child").classList.add("active-page")}else d.innerHTML="",x.classList.remove("is-hidden"),k.classList.add("is-hidden")}catch(t){console.log(t.message)}finally{u.classList.add("is-hidden")}}const M="favorites-exercises",o={gallery_btn:document.querySelector(".gallery-list"),exercises_container:document.querySelector(".exercise-modal-container"),exercises_wrap:document.querySelector(".modal-exercise-wrap"),close_btn:document.querySelector(".close-exercise-btn"),card_markup_modal:document.querySelector(".card-markup-modal"),modal_button:document.querySelector(".modal-button"),modal_add_favorite:document.querySelector(".modal-add-favorite"),moodal_give_rating:document.querySelector(".modal-give-rating"),body:document.querySelector("body")};let g;const X=y.create({baseURL:"https://energyflow.b.goit.study/api"});class ee{constructor(){}getExercisesById(s){return X.get(`/exercises/${s}`).then(t=>t.data)}}const B=new ee;try{o.gallery_btn.addEventListener("click",te)}catch(e){console.log(e)}function te(e){if(!e.target.closest(".button"))return;const s=e.target.closest(".button");if(!s)return;g=s.id,o.moodal_give_rating.setAttribute("id",`${g}`),se(),re(g);let t=localStorage.getItem("favorites-exercises"),a=t?JSON.parse(t):[];Array.isArray(a)||(a=[]),a.some(function(n){return n._id===g})?o.modal_add_favorite.textContent="Remove from ":o.modal_add_favorite.textContent="Add to favorites"}function se(e){o.body.classList.add("modal"),o.exercises_container.classList.add("active"),o.exercises_wrap.classList.add("active"),o.moodal_give_rating.addEventListener("click",ie),o.exercises_container.addEventListener("click",ae),o.close_btn.addEventListener("click",L),window.addEventListener("keydown",H),o.modal_add_favorite.addEventListener("click",ue)}function ae(e){e.target===o.exercises_container&&L()}function L(e){o.body.classList.remove("modal"),o.exercises_container.classList.remove("active"),o.exercises_wrap.classList.remove("active"),o.exercises_container.removeEventListener("click",L),o.close_btn.removeEventListener("click",L),window.removeEventListener("keydown",H),o.card_markup_modal.classList.add("is-hidden"),o.modal_button.classList.add("is-hidden")}function H(e){e.key==="Escape"&&L()}function ie(e){o.exercises_wrap.classList.remove("active")}async function re(e){try{const s=await B.getExercisesById(`${e}`);o.card_markup_modal.innerHTML=oe(s),ce(s)}catch(s){console.log(`Error: ${s}`)}}function oe(e){let s="";return s+=ne(e),s+=le(e),s+=de(e),s+=me(e),s}function ne(e){return`      <!-- дів для gif -->
      <div class="modal-gif">
          <img
            class="modal-iframe-gif"
            src="${e.gifUrl}"
            alt="Recipe video"
            width="295"
            height="295"
          />
      </div>`}function le(e){return` <div class="modal-general-info">
       
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
       `}function ce(e){const s=Math.round(e.rating);for(let t=1;t<=s;t++)document.querySelector(`.star-${t}`).classList.add("activeStar")}function de(e){return` <!-- Teg -->
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
        </div>`}function me(e){return`<p class="modal-recipe-description">
          ${e.description}
        </p>
      </div>`}async function ue(){let e=localStorage.getItem("favorites-exercises"),s=e?JSON.parse(e):[];Array.isArray(s)||(s=[]);let t=await B.getExercisesById(`${g}`);if(o.modal_add_favorite.textContent==="Add to favorites"){const a={_id:t._id,bodyPart:t.bodyPart,equipment:t.equipment,gifUrl:t.gifUrl,name:t.name,target:t.target,description:t.description,rating:t.rating,burnedCalories:t.burnedCalories,time:t.time,popularity:t.popularity};s.push(a);const r=JSON.stringify(s);localStorage.setItem("favorites-exercises",r),o.modal_add_favorite.textContent="Remove from "}else o.modal_add_favorite.textContent="Add to favorites",ge(g)}function ge(e){const s=U(M),t=[];return s.map(a=>(a._id!==e&&t.push(a),t)),O(M,t)}const pe=document.getElementById("newsletter-form"),fe=document.getElementById("email");function he(e){e.preventDefault();const s=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,t=fe.value;if(!s.test(t)){console.log("error!");return}const a={email:t};y.post("https://energyflow.b.goit.study/api/subscription",a).then(r=>{console.log(r.data),alert("You have successfully subscribed to our newsletter!")}).catch(r=>{console.error("Error sending the order:",r),alert("An error occurred. Please try again.")})}pe.addEventListener("submit",he);const ve=document.querySelector(".js-link-home");ve.classList.add("link-home-favor");const Le=document.querySelector(".js-link-home-mobail");Le.classList.add("link-home-favor");
//# sourceMappingURL=commonHelpers2.js.map
