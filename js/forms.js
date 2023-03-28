const HASHTAG_COUNT = 5;
const HASHTAG_MIN_LENGTH = 1;
const HASHTAG_MAX_LENGTH = 20;

const loadingForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const formInputs = document.querySelectorAll('.img-upload__field-wrapper');
const formSubmitBtn = document.querySelector('.img-upload__submit');
const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;

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

  return value.trim().split(/\s+/g).every((item) => hashtagRegexp.test(item));
};

const checkHashtagRepeat = (value) => {
  const hashtags = value.toLowerCase().trim().split(/\s+/g);
  return hashtags.length === new Set(hashtags).size;
};

const addValidators = () => {
  const validatioRules = new Map();

  validatioRules
    .set(checkHashtagCount, `Количество хэштегов не должно быть больше ${HASHTAG_COUNT}.`)
    .set(checkHashtagSymbols, `Хэштег должен начинаться с символа # и состоять только из букв и цифр, количество символов в хэштеге от ${HASHTAG_MIN_LENGTH} до ${HASHTAG_MAX_LENGTH}.`)
    .set(checkHashtagRepeat, 'Хэштеги не должны повторяться.');

  validatioRules.forEach((errorMessage, validateFn) =>
    pristine.addValidator(hashtagInput, validateFn, errorMessage, 1, true)
  );
};

const onFormInput = () => {
  const hasError = Array.from(formInputs).some((item) => item.classList.contains('has-danger'));
  formSubmitBtn.disabled = hasError;
};

const validateForm = () => {
  addValidators();

  loadingForm.addEventListener('input', onFormInput);
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
