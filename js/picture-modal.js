import {isEscapeKey} from './util.js';

const COMMENT_COUNT = 5;

const pictureModal = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const modalPicture = pictureModal.querySelector('.big-picture__img img');

const renderPhoto = ({url, comments, likes, description}) => {
  modalPicture.src = url;
  pictureModal.querySelector('.likes-count').textContent = likes;
  pictureModal.querySelector('.comments-count').textContent = comments.length;
  pictureModal.querySelector('.social__caption').textContent = description;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach(({avatar, message, name}) => {
    const comment = commentTemplate.cloneNode(true);

    comment.classList.add('hidden');
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    fragment.appendChild(comment);
  });

  commentsList.appendChild(fragment);
};

const showComments = () => {
  const comments = commentsList.children;
  const lowerCount = +socialCommentCount.dataset.commentCount;
  const maxCommentCount = +socialCommentCount.dataset.maxCommentCount;
  let upperCount = lowerCount + COMMENT_COUNT;

  if (upperCount >= maxCommentCount) {
    upperCount = maxCommentCount;
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  for (let i = lowerCount; i < upperCount; i++) {
    comments[i].classList.remove('hidden');
  }

  socialCommentCount.dataset.commentCount = upperCount;
  socialCommentCount.innerHTML = `${upperCount} из <span class="comments-count">${maxCommentCount}</span> комментариев`;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onCommentsLoaderClick = () => {
  showComments();
};

const openModal = (photo) => {
  pictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  renderPhoto(photo);
  renderComments(photo.comments);

  socialCommentCount.dataset.commentCount = 0;
  socialCommentCount.dataset.maxCommentCount = photo.comments.length;
  showComments();

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeModal () {
  pictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openModal, closeModal};
