effectLevelContainerElement.classList.remove('hidden');
sliderElement.noUiSlider.updateOptions({
  range: { min: effectConfig.min, max: effectConfig.max },
  start: effectConfig.start,
  step: effectConfig.step,
});
  };

for (const effect of effectsListElement) {
  effectLevelContainerElement.classList.add('hidden');

  effect.addEventListener('change', () => {

    image.classList.forEach((className) => {
      if (className.startsWith('effects__preview--')) {
        image.classList.remove(className);
      }
    });

    const effectName = effect.id.substring(7); // Получаем название эффекта
    image.classList.add(effects__preview--${ effectName });

    updateSliderOptions(effectName);
    applyEffect(effectName, effects[effectName].start);
  });
}

// Обработчик изменения положения ползунка на слайдере
sliderElement.noUiSlider.on('update', (values, handle) => {
  let effectValue = parseFloat(values[handle]);
  effectValue = Number.isInteger(effectValue) ? effectValue : effectValue.toFixed(1);
  effectLevelElement.setAttribute('value', effectValue);
  const selectedEffect = document.querySelector('.effects__radio:checked').getAttribute('id').substring(7);
  applyEffect(selectedEffect, effectValue);
});
};

export { editPhotoScale, editPhotoEffect, resetPhotoSettings }
