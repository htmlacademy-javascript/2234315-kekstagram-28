import {isEscapeKey} from './util.js';

const successMesssageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMesssageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showMessage = (template) => {
  const message = template.cloneNode(true);
  const messageInner = message.querySelector('div');
  const messageTitle = message.querySelector('h2');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideMessage();
    }
  };

  function hideMessage() {
    message.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.body.classList.remove('has-message');
  }

  document.body.append(message);
  document.body.classList.add('has-message');
  document.addEventListener('keydown', onDocumentKeydown);
  message.addEventListener('click', (evt) => {
    if (evt.target !== messageInner && evt.target !== messageTitle) {
      hideMessage();
    }
  });
};

const showSuccessMessage = () => showMessage(successMesssageTemplate);
const showErrorMessage = () => showMessage(errorMesssageTemplate);

export {showSuccessMessage,showErrorMessage};
