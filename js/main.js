import {renderUsersPictures} from './miniatures.js';
import {initPicturePreview} from './picture-preview.js';
import {initLoadingPreview} from './loading-preview.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {initSorters} from './sorters.js';

initLoadingPreview();

getData()
  .then((usersPictures) => {
    renderUsersPictures(usersPictures);
    initPicturePreview(usersPictures);
    initSorters(usersPictures);
  })
  .catch((err) => showAlert(err.message));
