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

const checkHashtagSymbols = (value) => {
  if (value === '') {
    return true;
  }

  return value.trim().split(/\s+/g).every((item) => /^#[a-zа-яё0-9]{1,19}$/i.test(item));
};

const checkHashtagRepeat = (value) => {
  const hashtags = value.toLowerCase().trim().split(/\s+/g);
  return hashtags.length === new Set(hashtags).size;
};

const errorMessages = new Map();
errorMessages.set(checkHashtagCount, `Количество хэштегов не должно быть больше ${HASHTAG_COUNT}.`)
  .set(checkHashtagSymbols, 'Хэштег должен начинаться с символа # и состоять только из букв и цифр, количество символов в хэштеге от 2 до 20.')
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
