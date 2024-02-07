import axios from 'axios';

class ExercisesAPI {
  static BASE_URL = 'https://energyflow.b.goit.study';
  constructor() {
    this.filter = '';
    this.page = 1;
    this.perPage = 8;
    this.totalPages = 1;
    this.muscles = '';
    this.bodypart = '';
    this.equipment = '';
    this.name = '';
  }

  fetchImages() {
    ExercisesAPI.END_POINT = '/api/filters';

    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      page: this.page,
      limit: this.perPage,
      totalPages: this.totalPages,
      filter: this.filter,
    };

    return axios.get(url, { params }).then(response => response.data);
  }

  fetchExercises() {
    ExercisesAPI.END_POINT = '/api/exercises';
    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      muscles: this.muscles,
      bodypart: this.bodypart,
      equipment: this.equipment,
      limit: this.perPage,
      page: this.page,
      name: this.name,
    };
    return axios.get(url, { params }).then(response => response.data);
  }
}

const exercisesAPI = new ExercisesAPI();

const gallery = document.querySelector('.gallery-list');
const filterBTN = document.querySelector('.filter-list');
const btn = document.querySelectorAll('.filter-button');
const title = document.querySelector('.exercises-title');
let elem = document.getElementsByClassName('active-btn');
const pages = document.querySelector('.page-number-list');
const workoutPages = document.querySelector('.page-number-list-workout');
let mediaT = window.matchMedia('(min-width: 768px)');
let mediaD = window.matchMedia('(min-width: 1440px)');
const titleCont = document.querySelector('.title-container');
const loader = document.querySelector('.loader');

const form = document.querySelector('.form');
// const input = document.querySelector('.search');
// const submitBtn = document.querySelector('.svg-button');
// const negativeRes = document.querySelector('.negative-result');

async function defaultSettings() {
  exercisesAPI.filter = 'Muscles';
  exercisesAPI.page = 1;

  let markup;
  let pageMarkup;

  if (!mediaT.matches) {
    exercisesAPI.perPage = 8;
    const result = await exercisesAPI.fetchImages();
    markup = imagesTemplate(result.results);
    pageMarkup = pagesTemplate(result.totalPages);
  } else {
    exercisesAPI.perPage = 12;
    const result = await exercisesAPI.fetchImages();
    markup = imagesTemplate(result.results);
    pageMarkup = pagesTemplate(result.totalPages);
  }

  if (elem) {
    gallery.innerHTML = markup;
  }

  pages.innerHTML = pageMarkup;
  const firstPage = pages.querySelector('li:first-child');
  firstPage.classList.add('active-page');
  loader.classList.add('is-hidden');
}

defaultSettings();

filterBTN.addEventListener('click', onFilterBtnClick);

async function onFilterBtnClick(e) {
  loader.classList.remove('is-hidden');

  title.textContent = 'Exercises';

  btn.forEach(button => {
    if (
      button.getElementsByClassName('active-btn') ===
      e.target.getElementsByClassName('active-btn')
    ) {
      button.classList.add('active-btn');
    } else {
      button.classList.remove('active-btn');
    }
  });
  let target = e.target.name;

  if (target === 'muscles') {
    exercisesAPI.filter = 'Muscles';
  } else if (target === 'body-parts') {
    exercisesAPI.filter = 'Body parts';
  } else if (target === 'equipment') {
    exercisesAPI.filter = 'Equipment';
  } else {
    return;
  }

  let markup;
  let pageMarkup;

  if (!mediaT.matches) {
    exercisesAPI.perPage = 8;
  } else {
    exercisesAPI.perPage = 12;
  }
  exercisesAPI.page = 1;
  const result = await exercisesAPI.fetchImages();
  markup = imagesTemplate(result.results);
  if (elem) {
    gallery.innerHTML = markup;
  }

  workoutPages.innerHTML = '';

  pageMarkup = pagesTemplate(result.totalPages);
  pages.innerHTML = pageMarkup;
  const firstPage = pages.querySelector('li:first-child');
  firstPage.classList.add('active-page');
  loader.classList.add('is-hidden');
}

function imgTemplate({ filter, imgUrl, name }) {
  let modName = name[0].toUpperCase() + name.slice(1);
  let modFilter = filter[0].toUpperCase() + filter.slice(1);

  return `<li class="gallery-item">
          <img
            class="exercises-img"
            src=${imgUrl}
            alt=${modName}
          />
        <div class="muscles">
          <span class="muscles-group">${modName}</span>
          <span class="muscles-group-name">${modFilter}</span>
        </div>
      </li>`;
}

function imagesTemplate(images) {
  return images.map(imgTemplate).join('');
}

pages.addEventListener('click', handlePages);
async function handlePages(ev) {
  if (ev.target.classList.contains('page-number-item')) {
    let pageItems = document.querySelectorAll('.page-number-item');
    let pageNumber = ev.target.textContent;
    pageItems.forEach(page => {
      if (
        page.getElementsByClassName('active-page') ===
        ev.target.getElementsByClassName('active-page')
      ) {
        page.classList.add('active-page');
      } else {
        page.classList.remove('active-page');
      }
    });
    exercisesAPI.page = pageNumber;
    const result = await exercisesAPI.fetchImages();
    const markup = imagesTemplate(result.results);
    if (elem) {
      gallery.innerHTML = markup;
    }
  } else {
    return;
  }
}

workoutPages.addEventListener('click', handleWorkoutPages);
async function handleWorkoutPages(ev) {
  if (ev.target.classList.contains('page-number-item')) {
    let pageItems = document.querySelectorAll('.page-number-item');
    let pageNumber = ev.target.textContent;
    pageItems.forEach(page => {
      if (
        page.getElementsByClassName('active-page') ===
        ev.target.getElementsByClassName('active-page')
      ) {
        page.classList.add('active-page');
      } else {
        page.classList.remove('active-page');
      }
    });
    exercisesAPI.page = pageNumber;
    const result = await exercisesAPI.fetchExercises();
    const markup = workoutsTemplate(result.results);
    if (elem) {
      gallery.innerHTML = markup;
    }
  } else {
    return;
  }
}

function pageTemplate(pageNumber) {
  return `<li class="page-number-item">${pageNumber}</li>`;
}

function pagesTemplate(total) {
  const pagesArray = [];
  for (let i = 1; i <= total; i++) {
    pagesArray.push(pageTemplate(i));
  }
  return pagesArray.join(' ');
}

gallery.addEventListener('click', onGalleryIMGClick);

async function onGalleryIMGClick(evt) {
  loader.classList.remove('is-hidden');

  form.classList.remove('is-hidden');
  exercisesAPI.page = 1;
  const liElem = evt.target.closest('.gallery-item');
  if (liElem) {
    let workoutMarkup;
    let pageMarkup;
    const hightLightedText =
      liElem.lastElementChild.firstElementChild.textContent;

    const target = evt.target.closest('.gallery-item');
    let filterName = target.querySelector('.muscles-group');
    let filterExercise = target.querySelector('.muscles-group-name');
    titleCont.innerHTML = `<h2 class="exercises-title">
      Exercises /
      <span class="choosen-content">${hightLightedText}</span>
    </h2>`;

    if (mediaD.matches) {
      exercisesAPI.perPage = 9;
    } else if (!mediaD.matches) {
      exercisesAPI.perPage = 8;
    }

    exercisesAPI.bodypart = '';
    exercisesAPI.muscles = '';
    exercisesAPI.equipment = '';
    if (
      'bodypart' ===
      filterExercise.innerText.toLowerCase().replace(' ', '').slice(0, -1)
    ) {
      exercisesAPI.bodypart = filterName.innerText.toLowerCase();
    } else if ('muscles' === filterExercise.innerText.toLowerCase()) {
      exercisesAPI.muscles = filterName.innerText.toLowerCase();
    } else if ('equipment' === filterExercise.innerText.toLowerCase()) {
      exercisesAPI.equipment = filterName.innerText.toLowerCase();
    }
    const data = await exercisesAPI.fetchExercises();
    workoutMarkup = workoutsTemplate(data.results);
    gallery.innerHTML = workoutMarkup;
    workoutMarkup = workoutsTemplate(data.results);

    pages.innerHTML = '';

    pageMarkup = pagesTemplate(data.totalPages);
    workoutPages.innerHTML = pageMarkup;
    const firstPage = workoutPages.querySelector('li:first-child');
    firstPage.classList.add('active-page');
    loader.classList.add('is-hidden');
  } else {
    return;
  }
}

function workoutTemplate({
  name,
  burnedCalories,
  bodyPart,
  target,
  rating,
  time,
  _id,
}) {
  const modName = name[0].toUpperCase() + name.slice(1);
  const modRating = Math.round(rating).toString().padEnd(2, '.') + 0;
  const modBodyPart = bodyPart[0].toUpperCase() + bodyPart.slice(1);
  const modTarget = target[0].toUpperCase() + target.slice(1);
  return `<li class="workout-item">
        <div class="top-wrap">
          <div class="top-wrap-right">
            <div class="workout">WORKOUT</div>
            <div class="rating">
              <span class="rating-number">${modRating}</span>
              <svg class="icon-star" width="13" height="13">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
          </div>
          <button class="button" type="button" name="start" data-action="start" id="${_id}">
            Start
            <svg id="${_id}" class="icon-arrow" width="14" height="14">
              <use href="../img/sprite.svg#icon-arrow" id="${_id}"></use>
            </svg>
          </button>
        </div>
        <div class="workout-container">
          <div class="main-icon-wrap">
            <svg class="icon-run" width="14" height="16">
              <use href="../img/sprite.svg#icon-run"></use>
            </svg>
          </div>
          <p class="workout-title single-line">${modName}</p>
        </div>
        <div class="workout-info">
          <p class="workout-info-container">
            <span class="workout-info-title">Burned calories:</span>
            <span class="workout-info-value">${burnedCalories} / ${time} min</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Body part:</span>
            <span class="workout-info-value">${modBodyPart}</span>
          </p>
          <p class="workout-info-container">
            <span class="workout-info-title">Target:</span>
            <span class="workout-info-value">${modTarget}</span>
          </p>
        </div>
      </li>`;
}

function workoutsTemplate(workouts) {
  return workouts.map(workoutTemplate).join('');
}

// form.addEventListener('submit', onSearch);

// async function onSearch(e) {
//   e.preventDefault();
//   let searchInput = input.value;
//   console.log(searchInput);
//   const res = await exercisesAPI.fetchExercises();
//   const value = res.results.map(el => el.name).join('');
//   if (value.includes(searchInput)) {
//     const workoutMarkup = workoutsTemplate(res.results);
//     gallery.innerHTML = workoutMarkup;
//   } else {
//     gallery.innerHTML = '';
//     negativeRes.classList.remove('is-hidden');
//   }
// }
