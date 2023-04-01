const FILTER_PARAMS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  }
];

const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects__list');

let currentEffect = FILTER_PARAMS[0];

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const isDefault = () => currentEffect === FILTER_PARAMS[0];

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max
    },
    start: currentEffect.max,
    step: currentEffect.step
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsContainerClick = (evt) => {
  const effectControl = evt.target.classList.contains('effects__radio');
  if (!effectControl) {
    return;
  }

  currentEffect = FILTER_PARAMS.find((effect) => effect.name === evt.target.value);

  if (currentEffect) {
    picturePreview.classname = `effects__preview--${currentEffect.name}`;

    updateSlider();
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();

  if (isDefault()) {
    picturePreview.style.filter = FILTER_PARAMS[0].style;
  } else {
    picturePreview.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }

  effectValue.value = sliderValue;
};

noUiSlider.create(sliderElement, {
  range: {
    min: currentEffect.min,
    max: currentEffect.max,
  },
  start: currentEffect.max,
  step: currentEffect.step,
  connect: 'lower',
});

hideSlider();

const setFilters = () => {
  effectsContainer.addEventListener('change', onEffectsContainerClick);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

const resetFilters = () => {
  currentEffect = FILTER_PARAMS[0];
  updateSlider();

  effectsContainer.removeEventListener('change', onEffectsContainerClick);
  sliderElement.noUiSlider.off('update', onSliderUpdate);
};

export {setFilters, resetFilters};
