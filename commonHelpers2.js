var R=Object.defineProperty;var D=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>(D(t,typeof e!="symbol"?e+"":e,s),s),P=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(P(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},C=(t,e,s,a)=>(P(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);import{l as F,s as j}from"./assets/modal-feedback-b90484db.js";import{a as v}from"./assets/vendor-4357aed0.js";const m=class m{constructor(){this.filter="",this.page=1,this.perPage=8,this.totalPages=1,this.muscles="",this.bodypart="",this.equipment="",this.name=""}fetchImages(e){m.END_POINT="/api/filters";const s=m.BASE_URL+m.END_POINT,a={page:e,limit:this.perPage,totalPages:this.totalPages,filter:this.filter};return v.get(s,{params:a}).then(r=>r.data)}fetchExercises(e){m.END_POINT="/api/exercises";const s=m.BASE_URL+m.END_POINT,a={muscles:this.muscles,bodypart:this.bodypart,equipment:this.equipment,limit:this.perPage,page:e,keyword:this.keyword};return v.get(s,{params:a}).then(r=>r.data)}};w(m,"BASE_URL","https://energyflow.b.goit.study");let E=m;const n=new E,h=document.querySelector(".gallery-list"),Z=document.querySelector(".filter-list"),G=document.querySelectorAll(".filter-button"),J=document.querySelector(".exercises-title");let z=document.getElementsByClassName("active-btn");const x=document.querySelector(".page-btns");let M=window.matchMedia("(min-width: 768px)"),_=window.matchMedia("(min-width: 1440px)");const K=document.querySelector(".title-container"),p=document.querySelector(".loader"),b=document.querySelector(".form"),$=document.querySelector(".search"),k=document.querySelector(".negative-result");var l,d;class W{constructor({selector:e}){y(this,l,1);y(this,d,1);w(this,"handleClick",e=>{if(e.target.nodeName!=="LI"||e.target.classList.contains("dots"))return;const{dataset:s}=e.target;this.setPage=Number(s.page),this.createPagination(),this.callback(i(this,l))});this.ref=document.querySelector(e),this.ref.addEventListener("click",this.handleClick)}createPagination(){let e="",s="",a=i(this,l)-1,r=i(this,l)+1;if(i(this,d)===1){this.ref.innerHTML=`<li class="page-number-item active-page" data-page='1'>1</li>`;return}i(this,l)>1&&(e+=`<li class="arrow-btn" data-page='${i(this,l)-1}'>&lt;</li>`),i(this,l)>2&&i(this,d)>5&&(e+=`<li class="page-number-item" data-page='1'>1</li>`,i(this,l)>3&&(e+='<li class="dots">...</li>')),i(this,l)===i(this,d)?a-=2:i(this,l)===i(this,d)-1&&(a-=1),i(this,l)===1?r+=2:i(this,l)===2&&(r+=1);for(let c=a;c<=r;c++)c>i(this,d)||c<0||(c===0&&(c=c+1),i(this,l)===c?s="active-page":s="",e+=`<li class="page-number-item ${s}" data-page='${c}'>${c}</li>`);i(this,l)<i(this,d)-1&&i(this,d)>5&&(i(this,l)<i(this,d)-2&&(e+='<li class="dots">...</li>'),e+=`<li class="page-number-item" data-page='${i(this,d)}'>${i(this,d)}</li>`),i(this,l)<i(this,d)&&(e+=`<li class="arrow-btn" data-page='${i(this,l)+1}'>&gt;</li>`),this.ref.innerHTML=e}set totalPages(e){C(this,d,e),this.ref.innerHTML="",this.createPagination()}set setPage(e){C(this,l,e)}on(e){this.callback=e}off(){this.callback=()=>{}}}l=new WeakMap,d=new WeakMap;const u=new W({selector:".js-pagination-list"}),S=async(t=1)=>{try{const e=await n.fetchImages(t),s=X(e.results);u.totalPages=e.totalPages,z&&(h.innerHTML=s)}catch(e){console.log(e.message)}finally{p.classList.add("is-hidden")}},q=async(t=1)=>{try{const e=await n.fetchExercises(t),s=B(e.results);h.innerHTML=s,u.totalPages=e.totalPages}catch(e){console.log(e.message)}finally{p.classList.add("is-hidden")}};async function Y(){n.filter="Muscles",M.matches?n.perPage=12:n.perPage=8,S()}Y();u.on(S);Z.addEventListener("click",Q);async function Q(t){p.classList.remove("is-hidden"),k.classList.add("is-hidden"),b.classList.add("is-hidden"),n.keyword="",x.classList.remove("is-hidden"),J.textContent="Exercises",G.forEach(s=>{s.getElementsByClassName("active-btn")===t.target.getElementsByClassName("active-btn")?s.classList.add("active-btn"):s.classList.remove("active-btn")});let e=t.target.name;if(e==="muscles")n.filter="Muscles";else if(e==="body-parts")n.filter="Body parts";else if(e==="equipment")n.filter="Equipment";else return;M.matches?n.perPage=12:n.perPage=8,u.setPage=1,S()}function V({filter:t,imgUrl:e,name:s}){let a=s[0].toUpperCase()+s.slice(1),r=t[0].toUpperCase()+t.slice(1);return`<li class="gallery-item">
          <img
            class="exercises-img"
            src=${e}
            alt=${a}
          />
        <div class="muscles">
          <span class="muscles-group">${a}</span>
          <span class="muscles-group-name">${r}</span>
        </div>
      </li>`}function X(t){return t.map(V).join("")}h.addEventListener("click",ee);async function ee(t){p.classList.remove("is-hidden"),b.classList.remove("is-hidden");const e=t.target.closest(".gallery-item");if(e){const s=e.lastElementChild.firstElementChild.textContent,a=t.target.closest(".gallery-item");let r=a.querySelector(".muscles-group"),c=a.querySelector(".muscles-group-name");K.innerHTML=`<h2 class="exercises-title">
      Exercises /
      <span class="choosen-content">${s}</span>
    </h2>`,_.matches?n.perPage=9:_.matches||(n.perPage=8),n.bodypart="",n.muscles="",n.equipment="",c.innerText.toLowerCase().replace(" ","").slice(0,-1)==="bodypart"?n.bodypart=r.innerText.toLowerCase():c.innerText.toLowerCase()==="muscles"?n.muscles=r.innerText.toLowerCase():c.innerText.toLowerCase()==="equipment"&&(n.equipment=r.innerText.toLowerCase()),u.setPage=1,q(),u.on(q)}}function te({name:t,burnedCalories:e,bodyPart:s,target:a,rating:r,time:c,_id:L}){const H=t[0].toUpperCase()+t.slice(1),A=Math.round(r).toString().padEnd(2,".")+0,U=s[0].toUpperCase()+s.slice(1),O=a[0].toUpperCase()+a.slice(1);return`<li class="workout-item">
        <div class="top-wrap">
          <div class="top-wrap-right">
            <div class="workout">WORKOUT</div>
            <div class="rating">
              <span class="rating-number">${A}</span>
              <svg class="icon-star" width="13" height="13">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <button class="button" type="button" name="start" data-action="start" id="${L}">
            Start
            <svg id="${L}" class="icon-arrow" width="14" height="14">
              <use href="../img/sprite.svg#icon-arrow" id="${L}"></use>
            </svg>
          </button>
        </div>
        <div class="workout-container">
          <div class="main-icon-wrap">
            <svg class="icon-run" width="14" height="16">
              <use href="../img/sprite.svg#icon-run"></use>
            </svg>
          </div>
          <p class="workout-title single-line">${H}</p>
        </div>
        <div class="workout-info">
          <p class="workout-info-container">
            <span class="workout-info-title">Burned calories:</span>
            <span class="workout-info-value">${e} / ${c} min</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Body part:</span>
            <span class="workout-info-value">${U}</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Target:</span>
            <span class="workout-info-value">${O}</span>
          </p>
        </div>
      </li>`}function B(t){return t.map(te).join("")}b.addEventListener("submit",se);async function se(t){t.preventDefault();let e=$.value;if(!e){alert("Add search input");return}p.classList.remove("is-hidden"),x.classList.remove("is-hidden");try{n.keyword=e,u.setPage=1;const{results:s,totalPages:a}=await n.fetchExercises(1);if($.value="",s.length>0){const r=B(s);h.innerHTML=r,k.classList.add("is-hidden"),u.totalPages=a}else h.innerHTML="",k.classList.remove("is-hidden"),x.classList.add("is-hidden")}catch(s){console.log(s.message)}finally{p.classList.add("is-hidden")}}const T="favorites-exercises",o={gallery_btn:document.querySelector(".gallery-list"),exercises_container:document.querySelector(".exercise-modal-container"),exercises_wrap:document.querySelector(".modal-exercise-wrap"),close_btn:document.querySelector(".close-exercise-btn"),card_markup_modal:document.querySelector(".card-markup-modal"),modal_button:document.querySelector(".modal-button"),modal_add_favorite:document.querySelector(".modal-add-favorite"),moodal_give_rating:document.querySelector(".modal-give-rating"),body:document.querySelector("body")};let g;const ae=v.create({baseURL:"https://energyflow.b.goit.study/api"});class ie{constructor(){}getExercisesById(e){return ae.get(`/exercises/${e}`).then(s=>s.data)}}const I=new ie;try{o.gallery_btn.addEventListener("click",re)}catch(t){console.log(t)}function re(t){if(!t.target.closest(".button"))return;const e=t.target.closest(".button");if(!e)return;g=e.id,o.moodal_give_rating.setAttribute("id",`${g}`),oe(),ce(g);let s=localStorage.getItem("favorites-exercises"),a=s?JSON.parse(s):[];Array.isArray(a)||(a=[]),a.some(function(c){return c._id===g})?o.modal_add_favorite.textContent="Remove from ":o.modal_add_favorite.textContent="Add to favorites"}function oe(t){o.body.classList.add("modal"),o.exercises_container.classList.add("active"),o.exercises_wrap.classList.add("active"),o.moodal_give_rating.addEventListener("click",le),o.exercises_container.addEventListener("click",ne),o.close_btn.addEventListener("click",f),window.addEventListener("keydown",N),o.modal_add_favorite.addEventListener("click",fe)}function ne(t){t.target===o.exercises_container&&f()}function f(t){o.body.classList.remove("modal"),o.exercises_container.classList.remove("active"),o.exercises_wrap.classList.remove("active"),o.exercises_container.removeEventListener("click",f),o.close_btn.removeEventListener("click",f),window.removeEventListener("keydown",N),o.card_markup_modal.classList.add("is-hidden"),o.modal_button.classList.add("is-hidden")}function N(t){t.key==="Escape"&&f()}function le(t){o.exercises_wrap.classList.remove("active")}async function ce(t){try{const e=await I.getExercisesById(`${t}`);o.card_markup_modal.innerHTML=de(e),ge(e)}catch(e){console.log(`Error: ${e}`)}}function de(t){let e="";return e+=me(t),e+=ue(t),e+=pe(t),e+=he(t),e}function me(t){return`      <!-- дів для gif -->
      <div class="modal-gif">
          <img
            class="modal-iframe-gif"
            src="${t.gifUrl}"
            alt="Recipe video"
            width="295"
            height="295"
          />
      </div>`}function ue(t){return` <div class="modal-general-info">
       
        <div class="card-star-modal">
        <h2 class="modal-exercise-name">${t.name}</h2>
        <div class="exercise-star-modal">
            <div class="modal-exercise-rating">${t.rating}</div>
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
       `}function ge(t){const e=Math.round(t.rating);for(let s=1;s<=e;s++)document.querySelector(`.star-${s}`).classList.add("activeStar")}function pe(t){return` <!-- Teg -->
    <div class="modal-teg">
          <ul class="modal-hashtag-list">
            <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Target </span>
            <span class="modal-value">${t.target}</span> </li>

             <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Body Part </span>
             <span class="modal-value">${t.bodyPart}</span> </li>

              <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Equipment </span>
              <span class="modal-value">${t.equipment}</span> </li>

               <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Popular </span>
               <span class="modal-value">${t.popularity}</span> </li>

                <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Burned Calories </span>
                <span class="modal-value">${t.burnedCalories}/${t.time}</span> </li>
          </ul>
        </div>`}function he(t){return`<p class="modal-recipe-description">
          ${t.description}
        </p>
      </div>`}async function fe(){let t=localStorage.getItem("favorites-exercises"),e=t?JSON.parse(t):[];Array.isArray(e)||(e=[]);let s=await I.getExercisesById(`${g}`);if(o.modal_add_favorite.textContent==="Add to favorites"){const a={_id:s._id,bodyPart:s.bodyPart,equipment:s.equipment,gifUrl:s.gifUrl,name:s.name,target:s.target,description:s.description,rating:s.rating,burnedCalories:s.burnedCalories,time:s.time,popularity:s.popularity};e.push(a);const r=JSON.stringify(e);localStorage.setItem("favorites-exercises",r),o.modal_add_favorite.textContent="Remove from "}else o.modal_add_favorite.textContent="Add to favorites",ve(g)}function ve(t){const e=F(T),s=[];return e.map(a=>(a._id!==t&&s.push(a),s)),j(T,s)}const Le=document.getElementById("newsletter-form"),we=document.getElementById("email");function ye(t){t.preventDefault();const e=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,s=we.value;if(!e.test(s)){console.log("error!");return}const a={email:s};v.post("https://energyflow.b.goit.study/api/subscription",a).then(r=>{console.log(r.data),alert("You have successfully subscribed to our newsletter!")}).catch(r=>{console.error("Error sending the order:",r),alert("An error occurred. Please try again.")})}Le.addEventListener("submit",ye);const Ce=document.querySelector(".js-link-home");Ce.classList.add("link-home-favor");const Ee=document.querySelector(".js-link-home-mobail");Ee.classList.add("link-home-favor");
//# sourceMappingURL=commonHelpers2.js.map
