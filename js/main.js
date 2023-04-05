import {createUsersPictures} from './miniatures.js';
import {initPicturePreview} from './picture-preview.js';
import {initLoadingPreview} from './loading-preview.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

initLoadingPreview();

getData()
  .then((usersPictures) => {
    createUsersPictures(usersPictures);
    initPicturePreview(usersPictures);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
