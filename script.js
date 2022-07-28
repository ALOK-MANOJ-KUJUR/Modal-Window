'use strict';
// selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Showing modal function
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// closing modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  // showing modal on click
  btnShowModal[i].addEventListener('click', showModal);
}

// closing modal by close button
btnCloseModal.addEventListener('click', closeModal);
// closing modal by overlay area
overlay.addEventListener('click', closeModal);

// closing modal by escape button
document.addEventListener('keydown', function (event) {
  // Checking for escape key
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
