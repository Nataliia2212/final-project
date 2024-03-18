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

  fetchImages(page) {
    ExercisesAPI.END_POINT = '/api/filters';

    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      page,
      limit: this.perPage,
      totalPages: this.totalPages,
      filter: this.filter,
    };

    return axios.get(url, { params }).then(response => response.data);
  }

  fetchExercises(page) {
    ExercisesAPI.END_POINT = '/api/exercises';
    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      muscles: this.muscles,
      bodypart: this.bodypart,
      equipment: this.equipment,
      limit: this.perPage,
      page,
      keyword: this.keyword,
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

const workoutPagesContainer = document.querySelector('.page-btns');
let mediaT = window.matchMedia('(min-width: 768px)');
let mediaD = window.matchMedia('(min-width: 1440px)');
const titleCont = document.querySelector('.title-container');
const loader = document.querySelector('.loader');

const form = document.querySelector('.form');
const input = document.querySelector('.search');
const negativeRes = document.querySelector('.negative-result');

class Pagination {
  #page = 1;
  #totalPages = 1;

  constructor({ selector }) {
    this.ref = document.querySelector(selector);
    this.ref.addEventListener('click', this.handleClick);
  }
  createPagination() {
    let item = ``;
    let activeItem = '';
    let beforePages = this.#page - 1;
    let afterPages = this.#page + 1;

    if (this.#totalPages === 1) {
      this.ref.innerHTML = `<li class="page-number-item active-page" data-page='1'>1</li>`;
      return;
    }

    if (this.#page > 1) {
      item += `<li class="arrow-btn" data-page='${this.#page - 1}'>&lt;</li>`;
    }

    if (this.#page > 2 && this.#totalPages > 5) {
      item += `<li class="page-number-item" data-page='1'>1</li>`;
      if (this.#page > 3) {
        item += `<li class="dots">...</li>`;
      }
    }

    if (this.#page === this.#totalPages) {
      beforePages -= 2;
    } else if (this.#page === this.#totalPages - 1) {
      beforePages -= 1;
    }

    if (this.#page === 1) {
      afterPages += 2;
    } else if (this.#page === 2) {
      afterPages += 1;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (pageLength > this.#totalPages || pageLength < 0) {
        continue;
      }

      if (pageLength === 0) {
        pageLength = pageLength + 1;
      }

      if (this.#page === pageLength) {
        activeItem = 'active-page';
      } else {
        activeItem = '';
      }
      item += `<li class="page-number-item ${activeItem}" data-page='${pageLength}'>${pageLength}</li>`;
    }

    if (this.#page < this.#totalPages - 1 && this.#totalPages > 5) {
      if (this.#page < this.#totalPages - 2) {
        item += `<li class="dots">...</li>`;
      }

      item += `<li class="page-number-item" data-page='${this.#totalPages}'>${
        this.#totalPages
      }</li>`;
    }

    if (this.#page < this.#totalPages) {
      item += `<li class="arrow-btn" data-page='${this.#page + 1}'>&gt;</li>`;
    }
    this.ref.innerHTML = item;
  }
  handleClick = event => {
    if (
      event.target.nodeName !== 'LI' ||
      event.target.classList.contains('dots')
    ) {
      return;
    }
    const { dataset } = event.target;

    this.setPage = Number(dataset.page);
    this.createPagination();
    this.callback(this.#page);
  };

  set totalPages(total) {
    this.#totalPages = total;
    this.ref.innerHTML = '';
    this.createPagination();
  }
  set setPage(page) {
    this.#page = page;
  }

  on(callback) {
    this.callback = callback;
  }
  off() {
    this.callback = () => {};
  }
}

const pagination = new Pagination({
  selector: '.js-pagination-list',
});

const paginationFetchImages = async (page = 1) => {
  try {
    const result = await exercisesAPI.fetchImages(page);

    const markup = imagesTemplate(result.results);
    pagination.totalPages = result.totalPages;
    if (elem) {
      gallery.innerHTML = markup;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add('is-hidden');
  }
};

const paginationfetchExercises = async (page = 1) => {
  try {
    const data = await exercisesAPI.fetchExercises(page);
    const workoutMarkup = workoutsTemplate(data.results);
    gallery.innerHTML = workoutMarkup;

    pagination.totalPages = data.totalPages;
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add('is-hidden');
  }
};

async function defaultSettings() {
  exercisesAPI.filter = 'Muscles';

  if (!mediaT.matches) {
    exercisesAPI.perPage = 8;
  } else {
    exercisesAPI.perPage = 12;
  }

  paginationFetchImages();
}

defaultSettings();

pagination.on(paginationFetchImages);

filterBTN.addEventListener('click', onFilterBtnClick);

async function onFilterBtnClick(e) {
  loader.classList.remove('is-hidden');
  negativeRes.classList.add('is-hidden');
  form.classList.add('is-hidden');
  exercisesAPI.keyword = '';
  workoutPagesContainer.classList.remove('is-hidden');

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

  if (!mediaT.matches) {
    exercisesAPI.perPage = 8;
  } else {
    exercisesAPI.perPage = 12;
  }

  pagination.setPage = 1;
  paginationFetchImages();
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

gallery.addEventListener('click', onGalleryIMGClick);

async function onGalleryIMGClick(evt) {
  loader.classList.remove('is-hidden');

  form.classList.remove('is-hidden');

  const liElem = evt.target.closest('.gallery-item');
  if (liElem) {
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
    pagination.setPage = 1;
    paginationfetchExercises();
    pagination.on(paginationfetchExercises);
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

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  let searchInput = input.value;
  if (!searchInput) {
    alert('Add search input');
    return;
  }
  loader.classList.remove('is-hidden');
  workoutPagesContainer.classList.remove('is-hidden');

  try {
    exercisesAPI.keyword = searchInput;
    pagination.setPage = 1;
    const { results, totalPages } = await exercisesAPI.fetchExercises(1);
    input.value = '';

    if (results.length > 0) {
      const workoutMarkup = workoutsTemplate(results);

      gallery.innerHTML = workoutMarkup;

      negativeRes.classList.add('is-hidden');

      pagination.totalPages = totalPages;
    } else {
      gallery.innerHTML = '';
      negativeRes.classList.remove('is-hidden');
      workoutPagesContainer.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add('is-hidden');
  }
}
