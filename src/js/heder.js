// const homeLink = document.querySelector('.js-link-home');
// console.log(homeLink);
// const favorLink = document.querySelector('.js-link-favor');
// console.log(favorLink);

// homeLink.addEventListener('click', function (event) {
//   event.preventDefault();
//   addClassHome();
// });

// favorLink.addEventListener('click', function (event) {
//   event.preventDefault();
//   addClassFavor();
// });

// function addClassHome() {
//   homeLink.classList.add('site-favor');
//   removeClassFavor();
// }

// function addClassFavor() {
//   favorLink.classList.add('site-header-favor');
//   removeClassHome();
// }

// function removeClassHome() {
//   homeLink.classList.remove('site-favor');
// }

// function removeClassFavor() {
//   favorLink.classList.remove('site-header-favor');
// }

// modal window

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//mobail menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
