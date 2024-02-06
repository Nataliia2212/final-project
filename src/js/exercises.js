import axios from 'axios';

class ExercisesAPI {
  static BASE_URL = 'https://energyflow.b.goit.study';
  constructor() {
    this.filter = '';
    this.page = 1;
    this.perPage = 12;
    this.totalPages = 1;
    this.muscles = '';
    this.bodypart = '';
    this.equipment = '';
  }

  fetchImages() {
    ExercisesAPI.END_POINT = '/api/filters';

    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      page: this.page,
      perPage: this.perPage,
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
let mediaT = window.matchMedia('(min-width: 768px)');
let mediaD = window.matchMedia('(min-width: 1440px)');
console.log('good')
async function defaultSettings() {
  title.textContent = 'Exercises';
  exercisesAPI.filter = 'Muscles';

  let markup;
  let pageMarkup;

  if (!mediaT.matches) {
    exercisesAPI.perPage = 8;
    console.log(exercisesAPI);
    const result = await exercisesAPI.fetchImages();
    console.log(result);
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
}

defaultSettings();

// filterBTN.addEventListener('click', onFilterBtnClick);

async function onFilterBtnClick(e) {
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

  const result = await exercisesAPI.fetchImages();
  result.total = result.perPage * result.totalPages;
  let markup;
  let pageMarkup;

  if (!mediaT.matches) {
    result.perPage = 8;
    result.totalPages = result.total / result.perPage;

    result.adaptResults = result.results.slice(0, result.perPage);

    result.lastElems = result.results.slice(
      result.perPage,
      result.results.length
    );

    markup = imagesTemplate(result.adaptResults);
    pageMarkup = pagesTemplate(result.totalPages);
  } else {
    markup = imagesTemplate(result.results);
    pageMarkup = pagesTemplate(result.totalPages);
  }

  if (elem) {
    gallery.innerHTML = markup;
  }

  pages.innerHTML = pageMarkup;
  const firstPage = pages.querySelector('li:first-child');
  firstPage.classList.add('active-page');
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
    let markup;
    markup = imagesTemplate(result.results);
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
  // <<<<<<< Updated upstream
  console.log(evt.currentTarget.nodeName);
  if (evt.target.nodeName === 'IMG') {
    const target = evt.target.textContent;
    console.log(target);
    exercisesAPI.bodypart = target.toLowerCase();
    const data = await exercisesAPI.fetchExercises();
    let diff = data.results.length - data.perPage;
    // =======
    title.textContent = 'Exercises /';

    exercisesAPI.page = 1;
    if (
      evt.target.nodeName === 'IMG' ||
      evt.target.nodeName === 'LI' ||
      evt.target.nodeName === 'BUTTON'
    ) {
      let workoutMarkup;
      let pageMarkup;
      const target = evt.target.parentNode;
      let filterName = target.querySelector('.muscles-group');
      let filterExercise = target.querySelector('.muscles-group-name');

      // >>>>>>> Stashed changes
      if (mediaD.matches) {
        data.perPage = 9;
        diff = data.results.length - data.perPage;
        data.results.splice(-diff);
      } else if (!mediaD.matches) {
        data.perPage = 8;
        diff = data.results.length - data.perPage;
        data.results.splice(-diff);
      }
      const markup = workoutsTemplate(data.results);
      gallery.innerHTML = markup;
    } else if (evt.target.dataset.action === 'start') {
      try {
        const data = await search(evt.target.id);
        console.log(data.bodyPart);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  }
}

function workoutTemplate({
  name,
  burnedCalories,
  bodyPart,
  target,
  rating,
  time,
  id,
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
          <button id="${id}" class="start-btn" data-action="start" type="button">
            Start
            <svg class="icon-arrow" width="14" height="14">
              <use href="../img/sprite.svg#icon-arrow"></use>
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
