import{l as v,s as f}from"./assets/modal-feedback-63a6ba4f.js";import{a as x}from"./assets/vendor-4357aed0.js";const d="/final-project/assets/sprite-7f202b5f.svg",w="/final-project/assets/dumbbell-5f5def0b.png",o=document.querySelector(".favorites-list"),m=document.querySelector(".text-wrap"),u="favorites-exercises",y=` <img
        class="img"
        src="${w}"
        alt="dumbbell"
        width="85"
        height="52"
      />

      <p class="text-er">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`;o.addEventListener("click",_);function _(e){if(e.target.dataset.action==="trash")E(e.target.id),p();else return}function E(e){const t=v(u),s=[];return t.map(i=>(i._id!==e&&s.push(i),s)),f(u,s)}function b(e){return e.map(({_id:t,bodyPart:s,name:i,target:n,burnedCalories:l,time:C})=>` <li class="list-item">
        <div class="wrap-hhhh">
          <div class="wrap-heading">
            <p class="heading">Workout</p>
            <button class="btn-trash" type="button" name="trash" trash id="${t}">
              <svg
                class="icon-trash"
                width="16"
                height="16"
                data-action="trash"
                id="${t}"
              >
                <use
                  href="${d}#icon-trash"
                  data-action="trash"
                  id="${t}"
                ></use>
              </svg>
            </button>
          </div>

          <button class="button" type="button" name="start" data-action="start" id="${t}">
            Start
            <svg class="icon-arrow" width="14" height="14" data-action="start">
              <use
                href="${d}#icon-arrow"
                data-action="start"
              ></use>
            </svg>
          </button>
        </div>

        <div class="wrap">
          <div class="wrap-icon">
            <svg class="icon-run" width="14" height="16">
              <use href="${d}#icon-run"></use>
            </svg>
          </div>

          <h3 class="item-title single-line">${i}</h3>
        </div>
        <div class="wrap-descr">
          <p class="text">Burned calories:<span>${l} / ${C} min</span></p>
          <p class="text">Body part:<span>${s}</span></p>
          <p class="text">Target:<span>${n}</span></p>
        </div>
      </li>`).join("")}function k(e){e.length===0?(m.innerHTML=y,o.innerHTML="",o.classList.add("is-hidden"),m.classList.remove("is-hidden")):(o.innerHTML=b(e),o.classList.remove("is-hidden"),m.classList.add("is-hidden"))}function p(){const e=v(u)||[];k(e)}p();const g="favorites-exercises",a={favorites_btn:document.querySelector(".favorites-list"),exercises_container:document.querySelector(".exercise-modal-container"),exercises_wrap:document.querySelector(".modal-exercise-wrap"),close_btn:document.querySelector(".close-exercise-btn"),card_markup_modal:document.querySelector(".card-markup-modal"),modal_button:document.querySelector(".modal-button"),modal_add_favorite:document.querySelector(".modal-add-favorite"),moodal_give_rating:document.querySelector(".modal-give-rating"),body:document.querySelector("body")};let r;const S=x.create({baseURL:"https://energyflow.b.goit.study/api"});class ${constructor(){}getExercisesById(t){return S.get(`/exercises/${t}`).then(s=>s.data)}}const h=new $;try{a.favorites_btn.addEventListener("click",q)}catch(e){console.log(e)}function q(e){if(!e.target.closest(".button"))return;const t=e.target.closest(".button");if(!t)return;r=t.id,a.moodal_give_rating.setAttribute("id",`${r}`),M(),B(r);let s=localStorage.getItem("favorites-exercises"),i=s?JSON.parse(s):[];Array.isArray(i)||(i=[]),i.some(function(l){return l._id===r})?a.modal_add_favorite.textContent="Remove from ":a.modal_add_favorite.textContent="Add to favorites"}function M(e){a.body.classList.add("modal"),a.exercises_container.classList.add("active"),a.exercises_wrap.classList.add("active"),a.moodal_give_rating.addEventListener("click",T),a.exercises_container.addEventListener("click",H),a.close_btn.addEventListener("click",c),window.addEventListener("keydown",L),a.modal_add_favorite.addEventListener("click",Z)}function H(e){e.target===a.exercises_container&&c()}function c(e){a.body.classList.remove("modal"),a.exercises_container.classList.remove("active"),a.exercises_wrap.classList.remove("active"),a.exercises_container.removeEventListener("click",c),a.close_btn.removeEventListener("click",c),window.removeEventListener("keydown",L),a.card_markup_modal.classList.add("is-hidden"),a.modal_button.classList.add("is-hidden")}function L(e){e.key==="Escape"&&c()}function T(e){a.exercises_wrap.classList.remove("active")}async function B(e){try{const t=await h.getExercisesById(`${e}`);a.card_markup_modal.innerHTML=I(t),R(t)}catch(t){console.log(`Error: ${t}`)}}function I(e){let t="";return t+=P(e),t+=A(e),t+=j(e),t+=O(e),t}function P(e){return`      <!-- дів для gif -->
      <div class="modal-gif">
          <img
            class="modal-iframe-gif"
            src="${e.gifUrl}"
            alt="Recipe video"
            width="295"
            height="295"
          />
      </div>`}function A(e){return` <div class="modal-general-info">
       
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
       `}function R(e){const t=Math.round(e.rating);for(let s=1;s<=t;s++)document.querySelector(`.star-${s}`).classList.add("activeStar")}function j(e){return` <!-- Teg -->
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
        </div>`}function O(e){return`<p class="modal-recipe-description">
          ${e.description}
        </p>
      </div>`}async function Z(){let e=localStorage.getItem("favorites-exercises"),t=e?JSON.parse(e):[];Array.isArray(t)||(t=[]);let s=await h.getExercisesById(`${r}`);if(a.modal_add_favorite.textContent==="Add to favorites"){const i={_id:s._id,bodyPart:s.bodyPart,equipment:s.equipment,gifUrl:s.gifUrl,name:s.name,target:s.target,description:s.description,rating:s.rating,burnedCalories:s.burnedCalories,time:s.time,popularity:s.popularity};t.push(i);const n=JSON.stringify(t);localStorage.setItem("favorites-exercises",n),a.modal_add_favorite.textContent="Remove from "}else a.modal_add_favorite.textContent="Add to favorites",D(r),p()}function D(e){const t=v(g),s=[];return t.map(i=>(i._id!==e&&s.push(i),s)),f(g,s)}const U=document.querySelector(".js-link-favor");U.classList.add("link-home-favor");const F=document.querySelector(".js-link-favor-mobail");F.classList.add("link-home-favor");
//# sourceMappingURL=commonHelpers.js.map
