import {openModal, closeModal} from './loading-modal.js';
import {validateForm, resetFormErrors} from './forms.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('.img-upload__cancel');

const initLoadingPreview = () => {
  modalOpenElement.addEventListener('change', () => {
    openModal();
    validateForm();
  });
  modalCloseElement.addEventListener('click', () => {
    closeModal();
    resetFormErrors();
  });
};

export {initLoadingPreview};
