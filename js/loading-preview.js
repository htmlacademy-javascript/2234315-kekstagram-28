import {openModal, closeModal} from './loading-modal.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('.img-upload__cancel');

const initLoadingPreview = () => {
  modalOpenElement.addEventListener('change', () => {
    openModal();
  });
  modalCloseElement.addEventListener('click', () => {
    closeModal();
  });
};

export {initLoadingPreview};
