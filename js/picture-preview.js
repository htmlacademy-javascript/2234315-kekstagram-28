import {openModal, closeModal} from './picture-modal.js';

const modalElement = document.querySelector('.big-picture');
const usersPicturesContainer = document.querySelector('.pictures');
const modalCloseElement = modalElement.querySelector('.big-picture__cancel');

const onPicturesContainerClick = (evt, pictures) => {
  const picture = evt.target.closest('.picture');
  if (!picture) {
    return;
  }

  const currentPicture = pictures.find((item) => item.id === +picture.dataset.id);

  if (currentPicture) {
    openModal(currentPicture);
  }
};

const initPicturePreview = (usersPictures) => {
  modalCloseElement.addEventListener('click', () => closeModal());
  usersPicturesContainer.addEventListener('click',
    (evt) => onPicturesContainerClick(evt, usersPictures)
  );
};

export {initPicturePreview};
