import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  openModalBtn: document.querySelector('.modal-give-rating'),
  closeModalBtn: document.querySelector('[data-modal-close-btn]'),
  modal: document.querySelector('[data-modal]'),
};

// console.log(refs.closeModalBtn);
// console.log(refs.openModalBtn);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.add('is-hidden');
  console.log('close');
}
let rate = null;
const stars = document.querySelectorAll('.star');
const formElemEmail = document.querySelector('.input-email');
const formElemComment = document.querySelector('.modal-input-comment');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const isActive = star.classList.contains('active');

    stars.forEach(s => s.classList.remove('active'));

    if (!isActive) {
      star.classList.add('active');
      let prev = star.previousElementSibling;
      while (prev) {
        prev.classList.add('active');
        prev = prev.previousElementSibling;
      }
    }
    rate = star.previousElementSibling.value;
    console.log('Вибрана опція:', rate);
  });
});

document
  .querySelector('.form-rating')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = formElemEmail.value;
    const commentValue = formElemComment.value;
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (emailPattern.test(emailValue)) {
      const id = event.target.parentNode.dataset.id;
      const dataRating = {
        rating: rate,
        email: emailValue,
        review: commentValue,
      };

      console.log(id);
      fetchUpdateRating(id, dataRating)
        .then(() => {
          refs.modal.classList.add('is-hidden');
          let id = refs.openModalBtn.id;
          // const exercises_wrap = documen.querySelector('.modal-exercise-wrap');
          // exercises_wrap.classList.add('active');
        })
        .catch(error => {
          iziToast.error({
            position: 'topRight',
            message: error.response.data.message,
          });
        });
    } else {
      iziToast.error({
        position: 'topRight',
        message: 'Неправильний формат електронної пошти!',
      });
    }
  });

async function fetchUpdateRating(id, dataRating) {
  const BASE_URL = 'https://energyflow.b.goit.study/api';
  const END_POINT = `/exercises/${id}/rating`;
  const url = BASE_URL + END_POINT;

  return axios.patch(url, dataRating);
}
refs.openModalBtn.addEventListener('click', e => {
  const id = e.target.dataset.id;
  showModal(id);
});

function showModal(id) {
  refs.modal.classList.remove('visually-hidden');
  refs.modal.firstElementChild.setAttribute('data-id', id);
}
//  showModal(id);
