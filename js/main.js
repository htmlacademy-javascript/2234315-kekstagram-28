import {createPhotos} from './data.js';
import {createUsersPictures} from './miniatures.js';
import {openModal, closeModal} from './picture-modal.js';

const MAX_PHOTO_COUNT = 25;
const usersPictures = createPhotos(MAX_PHOTO_COUNT);
createUsersPictures(usersPictures);

const modalElement = document.querySelector('.big-picture');
const usersPicturesContainer = document.querySelector('.pictures');
const modalCloseElement = modalElement.querySelector('.big-picture__cancel');

usersPicturesContainer.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const currentPicture = usersPictures.find((item) => item.id === +picture.dataset.id);
    openModal(currentPicture);
  }
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
