import axios from 'axios';

class ExercisesAPI {
  static BASE_URL = 'https://energyflow.b.goit.study';
  static END_POINT = '/api/filters';

  constructor() {
    this.filter = '';
    this.page = 1;
    this.pageSize = 1;
    this.totalPages = 1;
  }

  fetchImages() {
    const url = ExercisesAPI.BASE_URL + ExercisesAPI.END_POINT;
    const params = {
      page: this.page,
      perPage: this.pageSize,
      totalPages: this.totalPages,
      filter: this.filter,
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

async function defaultSettings() {
  title.textContent = 'Exercises';
  exercisesAPI.filter = 'Muscles';
  const result = await exercisesAPI.fetchImages();
  console.log(result);
  const markup = imagesTemplate(result.results);
  if (elem) {
    gallery.innerHTML = markup;
  }
  const pageMarkup = pagesTemplate(result.totalPages);
  pages.innerHTML = pageMarkup;
}
defaultSettings();

filterBTN.addEventListener('click', async function (e) {
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
  const markup = imagesTemplate(result.results);
  if (elem) {
    gallery.innerHTML = markup;
  }
});

function imgTemplate({ filter, imgUrl, name }) {
  let modName = name[0].toUpperCase() + name.slice(1);
  let modFilter = filter[0].toUpperCase() + filter.slice(1);

  return `<li class="gallery-item">
        <div class="img-container">
          <img
            class="exercises-img"
            src=${imgUrl}
            alt=${modName}
          />
        </div>
        <div class="muscles">
          <span class="muscles-group">${modName}</span>
          <span class="muscles-group-name">${modFilter}</span>
        </div>
      </li>`;
}

function imagesTemplate(images) {
  return images.map(imgTemplate).join('');
}

function pageTemplate(pageNumber) {
  return `<li class="page-number-item">${pageNumber}</li>`;
}

function pagesTemplate(total) {
  const pagesArray = [];
  for (let i = 1; i <= total; i++) {
    pagesArray.push(pageTemplate(i));
  }
  return pagesArray.join('');
}
