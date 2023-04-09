import {openModal, closeModal} from './loading-modal.js';
import {showErrorMessage} from './messages.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const loadingModal = document.querySelector('.img-upload__overlay');
const fileUploader = document.querySelector('#upload-file');
const modalCloseButton = loadingModal.querySelector('.img-upload__cancel');
const preview = document.querySelector('.img-upload__preview img');
const filterPreviews = document.querySelectorAll('.effects__preview');

const initLoadingPreview = () => {
  fileUploader.addEventListener('change', () => {
    const file = fileUploader.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (!matches) {
      showErrorMessage();

      return;
    }

    preview.src = URL.createObjectURL(file);

    for (const filtersPreview of filterPreviews) {
      filtersPreview.style.backgroundImage = `url(${preview.src})`;
    }
    openModal();
  });

  modalCloseButton.addEventListener('click', () => {
    closeModal();
  });
};

export {initLoadingPreview};
