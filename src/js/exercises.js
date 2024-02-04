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
const btn = document.querySelector('.filter-button');

filterBTN.addEventListener('click', async function (e) {
  btn.classList.add('active-btn');
  console.log(btn);

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
  let elem = document.getElementsByClassName('active-btn');
  console.log(elem);
  if (elem) {
    gallery.innerHTML = markup;
  }
});

function imgTemplate({ filter, imgUrl, name }) {
  return `<li class="gallery-item">
        <div class="img-container">
          <img
            class="exercises-img"
            src=${imgUrl}
            alt=${name}
          />
        </div>
        <div class="muscles">
          <span class="muscles-group">${name}</span>
          <span class="muscles-group-name">${filter}</span>
        </div>
      </li>`;
}

function imagesTemplate(images) {
  return images.map(imgTemplate).join('');
}
