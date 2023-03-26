const HASHTAG_MIN_LENGTH = 2;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_COUNT = 5;
const loadingForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const formInputs = document.querySelectorAll('.img-upload__field-wrapper');
const formSubmitBtn = document.querySelector('.img-upload__submit');

const pristine = new Pristine(loadingForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
});

const checkHashtagCount = (value) => value.trim().split(/\s+/g).length <= HASHTAG_COUNT;

const checkHashtagLength = (value) => {
  if (value === '') {
    return true;
  }

  return value.trim().split(/\s+/g).every((item) => item.length >= HASHTAG_MIN_LENGTH && item.length <= HASHTAG_MAX_LENGTH);
};

const checkHashtagSymbols = (value) => {
  if (value === '') {
    return true;
  }

  return value.trim().split(/\s+/g).every((item) => /^#[a-zа-яё0-9]+$/i.test(item));
};

const checkHashtagRepeat = (value) => {
  const hashtags = value.toLowerCase().trim().split(/\s+/g);
  return hashtags.length === new Set(hashtags).size;
};

const errorMessages = new Map();
errorMessages.set(checkHashtagCount, `Количество хэштегов не должно быть больше ${HASHTAG_COUNT}.`)
  .set(checkHashtagLength, `Хэштег должен быть от ${HASHTAG_MIN_LENGTH} до ${HASHTAG_MAX_LENGTH} символов.`)
  .set(checkHashtagSymbols, 'Хэштег должен начинаться с символа # и содержать только буквы и цифры.')
  .set(checkHashtagRepeat, 'Хэштеги не должны повторяться.');

errorMessages.forEach((value, key) =>
  pristine.addValidator(
    hashtagInput,
    key,
    value
  )
);

const observer = new MutationObserver(() => {
  let isHasError = false;

  formInputs.forEach((item) => {
    if (item.classList.contains('has-danger')) {
      isHasError = true;
    }
  });

  if (isHasError) {
    formSubmitBtn.setAttribute('disabled', '');
  } else {
    formSubmitBtn.removeAttribute('disabled');
  }

});

formInputs.forEach((item) =>
  observer.observe(item, {
    attributes: true,
  })
);

const validateForm = () => {
  loadingForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      loadingForm.submit();
    }
  });
};

const resetFormErrors = () => pristine.reset();

export {validateForm, resetFormErrors};
