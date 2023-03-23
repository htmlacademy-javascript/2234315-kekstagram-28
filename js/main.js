import {createPhotos} from './data.js';
import {createUsersPictures} from './miniatures.js';
import {initPreview} from './preview.js';

const MAX_PHOTO_COUNT = 25;
const usersPictures = createPhotos(MAX_PHOTO_COUNT);
createUsersPictures(usersPictures);
initPreview(usersPictures);
