import {openModal, closeModal} from './loading-modal.js';
import {showErrorMessage} from './messages.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = modalElement.querySelector('.img-upload__cancel');
const preview = document.querySelector('.img-upload__preview img');
const filtersPreviews = document.querySelectorAll('.effects__preview');

const initLoadingPreview = () => {
  modalOpenElement.addEventListener('change', () => {
    const file = modalOpenElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (!matches) {
      showErrorMessage();

      return;
    }

    preview.src = URL.createObjectURL(file);

    for (const filtersPreview of filtersPreviews) {
      filtersPreview.style.backgroundImage = `url(${preview.src})`;
    }
    openModal();
  });

  modalCloseElement.addEventListener('click', () => {
    closeModal();
  });
};

export {initLoadingPreview};
