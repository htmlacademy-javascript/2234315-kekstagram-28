const NAMES = [
  'Наруто Узумаки',
  'Саске Учиха',
  'Сакура Харуно',
  'Какаши Хатаке',
  'Цунаде',
  'Итачи Учиха',
  'Мадара Учиха',
  'Орочимару',
  'Кабуто Якуши',
  'Джирайя',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const MAX_PHOTO_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const MAX_COMMENT_COUNT = 7;
const MAX_AVATAR_COUNT = 6;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createCommentId = () => {
  let commentId = 0;

  return () => {
    commentId += 1;

    return commentId;
  };
};

const generateCommentId = createCommentId();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger(1, MAX_COMMENT_COUNT);

  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = (count) => ({
  id: count,
  url: `photos/${count}.jpg`,
  description: 'Lorem ipsum dolor sit amet',
  likes: getRandomInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: createComments(),
});

const createPhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

createPhotos(MAX_PHOTO_COUNT);
