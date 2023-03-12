import {createPhotos} from './data.js';

const MAX_PHOTO_COUNT = 25;

const otherPicturesList = document.querySelector('.pictures');
const otherPicturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const otherPictures = createPhotos(MAX_PHOTO_COUNT);
const otherPicturesFragment = document.createDocumentFragment();

otherPictures.forEach(({url, comments, likes}) => {
  const otherPicture = otherPicturesTemplate.cloneNode(true);

  otherPicture.querySelector('.picture__img').src = url;
  otherPicture.querySelector('.picture__comments').textContent = comments.length;
  otherPicture.querySelector('.picture__likes').textContent = likes;

  otherPicturesFragment.appendChild(otherPicture);
});

otherPicturesList.appendChild(otherPicturesFragment);
