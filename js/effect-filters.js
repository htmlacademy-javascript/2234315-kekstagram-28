const FILTER_PARAMS = {
  none: {
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  chrome: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  heat: {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  phobos: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  }
};

const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects__list');

let currentEffect = FILTER_PARAMS.none;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const isDefault = () => currentEffect === FILTER_PARAMS.none;

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
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

const onEffectsContainerChange = (evt) => {
  currentEffect = FILTER_PARAMS[evt.target.value];

  if (currentEffect) {
    picturePreview.classname = `effects__preview--${evt.target.value}`;
    updateSlider();
  }
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();

  if (isDefault()) {
    picturePreview.style.filter = FILTER_PARAMS.none.style;
  } else {
    picturePreview.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }

  effectValue.value = sliderValue;
};

noUiSlider.create(slider, {
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
  effectsContainer.addEventListener('change', onEffectsContainerChange);
  slider.noUiSlider.on('update', onSliderUpdate);
};

const resetFilters = () => {
  currentEffect = FILTER_PARAMS.none;
  updateSlider();

  effectsContainer.removeEventListener('change', onEffectsContainerChange);
  slider.noUiSlider.off('update', onSliderUpdate);
};

export {setFilters, resetFilters};
