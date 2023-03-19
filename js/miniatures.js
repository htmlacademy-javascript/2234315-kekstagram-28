const usersPicturesList = document.querySelector('.pictures');
const usersPicturesTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const fragment = document.createDocumentFragment();

const createUsersPictures = (usersPictures) => {
  usersPictures.forEach(({url, comments, likes}) => {
    const usersPicture = usersPicturesTemplate.cloneNode(true);

    usersPicture.querySelector('.picture__img').src = url;
    usersPicture.querySelector('.picture__comments').textContent = comments.length;
    usersPicture.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(usersPicture);
  });

  usersPicturesList.appendChild(fragment);
};

export {createUsersPictures};
