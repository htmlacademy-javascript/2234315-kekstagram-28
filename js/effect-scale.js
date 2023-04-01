const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP_VALUE = 25;
const DEFAULT_SCALE_VALUE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const decreasingScaleBtn = document.querySelector('.scale__control--smaller');
const increasingScaleBtn = document.querySelector('.scale__control--bigger');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
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
  decreasingScaleBtn.addEventListener('click', decreaseImage);
  increasingScaleBtn.addEventListener('click', increaseImage);
};

const resetScale = () => {
  scaleImage(DEFAULT_SCALE_VALUE);

  decreasingScaleBtn.removeEventListener('click', decreaseImage());
  increasingScaleBtn.removeEventListener('click', increaseImage());
};

export {initScale, resetScale};
