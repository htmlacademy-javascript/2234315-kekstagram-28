import {openModal, closeModal} from './loading-modal.js';
import {validateForm, resetFormErrors} from './forms.js';
import {initScale, resetScale} from './effect-scale.js';
import {setFilters, resetFilters} from './effect-filters.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('.img-upload__cancel');

const initLoadingPreview = () => {
  modalOpenElement.addEventListener('change', () => {
    openModal();
    initScale();
    setFilters();
    validateForm();
  });
  modalCloseElement.addEventListener('click', () => {
    closeModal();
    resetScale();
    resetFilters();
    resetFormErrors();
  });
};

export {initLoadingPreview};
