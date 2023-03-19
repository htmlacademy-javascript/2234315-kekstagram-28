import {createPhotos} from './data.js';
import {createUsersPictures} from './miniatures.js';

const MAX_PHOTO_COUNT = 25;
const usersPictures = createPhotos(MAX_PHOTO_COUNT);
createUsersPictures(usersPictures);
