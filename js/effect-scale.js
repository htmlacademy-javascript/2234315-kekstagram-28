const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP_VALUE = 25;
const DEFAULT_SCALE_VALUE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const decreasingScaleButton = document.querySelector('.scale__control--smaller');
const increasingScaleButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const decreaseImage = () => {
  const decreasingValue = parseInt(scaleInput.value, 10);
  let reducedValue = decreasingValue - SCALE_STEP_VALUE;

  if (reducedValue < MIN_SCALE_VALUE) {
    reducedValue = MIN_SCALE_VALUE;
  }

  scaleImage(reducedValue);
};

const increaseImage = () => {
  const increasingValue = parseInt(scaleInput.value, 10);
  let increasedValue = increasingValue + SCALE_STEP_VALUE;

  if (increasedValue > MAX_SCALE_VALUE) {
    increasedValue = MAX_SCALE_VALUE;
  }

  scaleImage(increasedValue);
};

const initScale = () => {
  decreasingScaleButton.addEventListener('click', decreaseImage);
  increasingScaleButton.addEventListener('click', increaseImage);
};

const resetScale = () => {
  scaleImage(DEFAULT_SCALE_VALUE);

  decreasingScaleButton.removeEventListener('click', decreaseImage());
  increasingScaleButton.removeEventListener('click', increaseImage());
};

export {initScale, resetScale};
