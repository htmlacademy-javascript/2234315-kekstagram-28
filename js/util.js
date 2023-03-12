const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createtId = () => {
  let commentId = 0;

  return () => {
    commentId += 1;

    return commentId;
  };
};

export {getRandomInteger, getRandomArrayElement, createtId};
