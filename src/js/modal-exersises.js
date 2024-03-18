import axiosInstance from 'axios';
import { saveToLS, loadFromLS } from './localStorage';
import { restoreData } from './favorites-block';

const keyLS = 'favorites-exercises';
const refs = {
  favorites_btn: document.querySelector('.favorites-list'),
  exercises_container: document.querySelector('.exercise-modal-container'),
  exercises_wrap: document.querySelector('.modal-exercise-wrap'),
  close_btn: document.querySelector('.close-exercise-btn'),
  card_markup_modal: document.querySelector('.card-markup-modal'),
  modal_button: document.querySelector('.modal-button'),
  modal_add_favorite: document.querySelector('.modal-add-favorite'),
  moodal_give_rating: document.querySelector('.modal-give-rating'),
  body: document.querySelector('body'),
};

let idExercises;

const axios = axiosInstance.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});
class goitGlobalAPI {
  constructor() {}
  getExercisesById(id) {
    return axios.get(`/exercises/${id}`).then(response => response.data);
  }
}
const modalExercisesApi = new goitGlobalAPI();

try {
  refs.favorites_btn.addEventListener('click', openModalExercises);
} catch (error) {
  console.log(error);
}

function openModalExercises(e) {
  if (!e.target.closest('.button')) {
    return;
  }

  const clickedExercises = e.target.closest('.button');
  if (!clickedExercises) return;

  idExercises = clickedExercises.id;

  refs.moodal_give_rating.setAttribute('id', `${idExercises}`);

  openExercises();

  catchExercises(idExercises);

  let localStorageData = localStorage.getItem('favorites-exercises');
  let localStorageArr = localStorageData ? JSON.parse(localStorageData) : [];

  if (!Array.isArray(localStorageArr)) {
    localStorageArr = [];
  }

  let isElementPresent = localStorageArr.some(function (exercise) {
    return exercise._id === idExercises;
  });

  if (isElementPresent) {
    refs.modal_add_favorite.textContent = 'Remove from ';
  } else {
    refs.modal_add_favorite.textContent = 'Add to favorites';
  }
}

function openExercises(e) {
  refs.body.classList.add('modal');

  refs.exercises_container.classList.add('active');
  refs.exercises_wrap.classList.add('active');

  refs.moodal_give_rating.addEventListener('click', hideModalExercises);
  refs.exercises_container.addEventListener(
    'click',
    closeModalExercisesOnClick
  );
  refs.close_btn.addEventListener('click', closeModalExercises);
  window.addEventListener('keydown', closeModalExercisesOnEsc);

  refs.modal_add_favorite.addEventListener('click', addToFavorite);
}

function closeModalExercisesOnClick(e) {
  if (e.target === refs.exercises_container) {
    closeModalExercises(e);
  }
}

function closeModalExercises(e) {
  refs.body.classList.remove('modal');
  refs.exercises_container.classList.remove('active');
  refs.exercises_wrap.classList.remove('active');

  refs.exercises_container.removeEventListener('click', closeModalExercises);
  refs.close_btn.removeEventListener('click', closeModalExercises);
  window.removeEventListener('keydown', closeModalExercisesOnEsc);

  refs.card_markup_modal.classList.add('is-hidden');
  refs.modal_button.classList.add('is-hidden');
}

function closeModalExercisesOnEsc(e) {
  if (e.key === 'Escape') {
    closeModalExercises(e);
  }
}

function hideModalExercises(e) {
  refs.exercises_wrap.classList.remove('active');
}

async function catchExercises(idExercises) {
  try {
    const data = await modalExercisesApi.getExercisesById(`${idExercises}`);
    refs.card_markup_modal.innerHTML = markupExercises(data);
    starRend(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function markupExercises(exerciseArr) {
  let markup = ``;

  markup += markupGIF(exerciseArr);
  markup += markupStarAndTitle(exerciseArr);
  markup += markupCharacteristics(exerciseArr);
  markup += markupDescription(exerciseArr);

  return markup;
}

function markupGIF(exerciseArr) {
  return `      <!-- дів для gif -->
      <div class="modal-gif">
          <img
            class="modal-iframe-gif"
            src="${exerciseArr.gifUrl}"
            alt="Recipe video"
            width="295"
            height="295"
          />
      </div>`;
}

function markupStarAndTitle(exerciseArr) {
  return ` <div class="modal-general-info">
       
        <div class="card-star-modal">
        <h2 class="modal-exercise-name">${exerciseArr.name}</h2>
        <div class="exercise-star-modal">
            <div class="modal-exercise-rating">${exerciseArr.rating}</div>
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
       `;
}

function starRend(exerciseArr) {
  const starInt = Math.round(exerciseArr.rating);

  for (let i = 1; i <= starInt; i++) {
    const star = document.querySelector(`.star-${i}`);
    star.classList.add('activeStar');
  }
}

function markupCharacteristics(exerciseArr) {
  const markupTag = ` <!-- Teg -->
    <div class="modal-teg">
          <ul class="modal-hashtag-list">
            <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Target </span>
            <span class="modal-value">${exerciseArr.target}</span> </li>

             <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Body Part </span>
             <span class="modal-value">${exerciseArr.bodyPart}</span> </li>

              <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Equipment </span>
              <span class="modal-value">${exerciseArr.equipment}</span> </li>

               <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Popular </span>
               <span class="modal-value">${exerciseArr.popularity}</span> </li>

                <li class="modal-name-characteristics"> <span class = "modal-characteristics"> Burned Calories </span>
                <span class="modal-value">${exerciseArr.burnedCalories}/${exerciseArr.time}</span> </li>
          </ul>
        </div>`;

  return markupTag;
}

function markupDescription(exerciseArr) {
  return `<p class="modal-recipe-description">
          ${exerciseArr.description}
        </p>
      </div>`;
}

async function addToFavorite() {
  let localStorageData = localStorage.getItem('favorites-exercises');
  let localStorageArr = localStorageData ? JSON.parse(localStorageData) : [];

  if (!Array.isArray(localStorageArr)) {
    localStorageArr = [];
  }

  let data_favorites = await modalExercisesApi.getExercisesById(
    `${idExercises}`
  );
  if (refs.modal_add_favorite.textContent === 'Add to favorites') {
    const info = {
      _id: data_favorites._id,
      bodyPart: data_favorites.bodyPart,
      equipment: data_favorites.equipment,
      gifUrl: data_favorites.gifUrl,
      name: data_favorites.name,
      target: data_favorites.target,
      description: data_favorites.description,
      rating: data_favorites.rating,
      burnedCalories: data_favorites.burnedCalories,
      time: data_favorites.time,
      popularity: data_favorites.popularity,
    };

    localStorageArr.push(info);
    const jsonString = JSON.stringify(localStorageArr);

    localStorage.setItem('favorites-exercises', jsonString);
    refs.modal_add_favorite.textContent = 'Remove from ';
  } else {
    refs.modal_add_favorite.textContent = 'Add to favorites';
    deleteExercise(idExercises);
    restoreData();
  }
}

function deleteExercise(id) {
  const exercises = loadFromLS(keyLS);
  const ex = [];

  exercises.map(element => {
    if (element._id !== id) {
      ex.push(element);
    }
    return ex;
  });

  return saveToLS(keyLS, ex);
}
