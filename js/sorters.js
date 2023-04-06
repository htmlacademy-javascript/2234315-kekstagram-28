import {renderUsersPictures} from './miniatures.js';
import {debounce} from './util.js';

const RANDOM_PICTURE_COUNT = 10;

const Sorter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const pictureSorters = document.querySelector('.img-filters');

let activeSorter = Sorter.DEFAULT;

const sortRandom = () => Math.random() - 0.5;

const sortPopular = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const getSorteredPictures = (pictures) => {
  switch (activeSorter) {
    case Sorter.RANDOM:
      return [...pictures].sort(sortRandom).slice(0, RANDOM_PICTURE_COUNT);
    case Sorter.DISCUSSED:
      return [...pictures].sort(sortPopular);
    default:
      return [...pictures];
  }
};

const setSorterListener = (data) => {
  pictureSorters.addEventListener('click', debounce(
    (evt) => {
      if (!evt.target.classList.contains('img-filters__button')) {
        return;
      }

      const activeButton = evt.target;

      pictureSorters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      activeButton.classList.add('img-filters__button--active');

      activeSorter = activeButton.id;
      renderUsersPictures(getSorteredPictures(data));
    }
  ));
};

const initSorters = (usersPictures) => {
  pictureSorters.classList.remove('img-filters--inactive');
  setSorterListener(usersPictures);
};

export {initSorters};
