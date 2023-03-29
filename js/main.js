import {createPhotos} from './data.js';
import {createUsersPictures} from './miniatures.js';
import {initPicturePreview} from './picture-preview.js';
import {initLoadingPreview} from './loading-preview.js';

const MAX_PHOTO_COUNT = 25;
const usersPictures = createPhotos(MAX_PHOTO_COUNT);
createUsersPictures(usersPictures);
initPicturePreview(usersPictures);
initLoadingPreview();
