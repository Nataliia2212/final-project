import img from '../img/sprite.svg';
import imgH from '../img/dumbbell.png';

import { saveToLS, loadFromLS } from "./localStorage";

const favoritesRef = document.querySelector('.favorites-list');
const textRef = document.querySelector('.text-wrap');
const keyLS = "favorites-exercises";
const message = ` <img
        class="img"
        src="${imgH}"
        alt="dumbbell"
        width="85"
        height="52"
      />

      <p class="text-er">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`

favoritesRef.addEventListener('click', onExercisesClick);

function onExercisesClick(event) {
    if (event.target.dataset.action === 'trash') {
      deleteExercise(event.target.id)
      restoreData();
    } else {
        return
    }
}

export function deleteExercise(id) {
    const exercises = loadFromLS(keyLS)
    const ex = [];
  
    exercises.map((element) => { 
      if (element._id !== id) {
        ex.push(element)
      }
      return ex
    });

    return saveToLS(keyLS, ex)
}

function markup(arr) {
    return arr.map(({ _id, bodyPart, name, target, burnedCalories, time }) => {
        return ` <li class="list-item">
        <div class="wrap-hhhh">
          <div class="wrap-heading">
            <p class="heading">Workout</p>
            <button class="btn-trash" type="button" name="trash" trash id="${_id}">
              <svg
                class="icon-trash"
                width="16"
                height="16"
                data-action="trash"
                id="${_id}"
              >
                <use
                  href="${img}#icon-trash"
                  data-action="trash"
                  id="${_id}"
                ></use>
              </svg>
            </button>
          </div>

          <button class="button" type="button" name="start" data-action="start" id="${_id}">
            Start
            <svg class="icon-arrow" width="14" height="14" data-action="start">
              <use
                href="${img}#icon-arrow"
                data-action="start"
              ></use>
            </svg>
          </button>
        </div>

        <div class="wrap">
          <div class="wrap-icon">
            <svg class="icon-run" width="14" height="16">
              <use href="${img}#icon-run"></use>
            </svg>
          </div>

          <h3 class="item-title single-line">${name}</h3>
        </div>
        <div class="wrap-descr">
          <p class="text">Burned calories:<span>${burnedCalories} / ${time} min</span></p>
          <p class="text">Body part:<span>${bodyPart}</span></p>
          <p class="text">Target:<span>${target}</span></p>
        </div>
      </li>`
    }).join('') 
}

function render(data) {
  if (data.length === 0) {
    textRef.innerHTML = message;
    favoritesRef.innerHTML = '';
    favoritesRef.classList.add('is-hidden')
    textRef.classList.remove('is-hidden')

  } else {
    favoritesRef.innerHTML = markup(data);
    favoritesRef.classList.remove('is-hidden')
    textRef.classList.add('is-hidden')

  }
}

export function restoreData() {
  const data = loadFromLS(keyLS) || [];
  
  render(data)
}

restoreData();
