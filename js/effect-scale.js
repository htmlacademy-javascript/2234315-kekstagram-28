const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP_VALUE = 25;
const DEFAULT_SCALE_VALUE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const decreasingButton = document.querySelector('.scale__control--smaller');
const increasingButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onDecreasingButtonClick = () => {
  const decreasingValue = parseInt(scaleInput.value, 10);
  let reducedValue = decreasingValue - SCALE_STEP_VALUE;

  if (reducedValue < MIN_SCALE_VALUE) {
    reducedValue = MIN_SCALE_VALUE;
  }

  scaleImage(reducedValue);
};

const onIncreasingButtonClick = () => {
  const increasingValue = parseInt(scaleInput.value, 10);
  let increasedValue = increasingValue + SCALE_STEP_VALUE;

  if (increasedValue > MAX_SCALE_VALUE) {
    increasedValue = MAX_SCALE_VALUE;
  }

  scaleImage(increasedValue);
};

const initScale = () => {
  decreasingButton.addEventListener('click', onDecreasingButtonClick);
  increasingButton.addEventListener('click', onIncreasingButtonClick);
};

const resetScale = () => {
  scaleImage(DEFAULT_SCALE_VALUE);

  decreasingButton.removeEventListener('click', onDecreasingButtonClick);
  increasingButton.removeEventListener('click', onIncreasingButtonClick);
};

export {initScale, resetScale};
