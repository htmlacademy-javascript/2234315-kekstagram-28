import {createPhotos} from './data.js';
import {createUsersPictures} from './miniatures.js';
import {openModal, closeModal} from './picture-modal.js';

const MAX_PHOTO_COUNT = 25;
const usersPictures = createPhotos(MAX_PHOTO_COUNT);
createUsersPictures(usersPictures);

const modalElement = document.querySelector('.big-picture');
const userPicturesContainer = document.querySelector('.pictures');
const modalCloseElement = modalElement.querySelector('.big-picture__cancel');

userPicturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    const thisPhoto = usersPictures.find((item) => item.id.toString() === evt.target.closest('.picture').dataset.id);
    openModal(thisPhoto);
  }
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});
