import {isEscapeKey} from './util.js';

const loadingForm = document.querySelector('.img-upload__form');
const modalElement = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

const isInputsFocused = () => hashtagInput === document.activeElement || descriptionInput === document.activeElement;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isInputsFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closeModal () {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  loadingForm.reset();

  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openModal, closeModal};
