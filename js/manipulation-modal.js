import { createFullSizePhoto } from './create-full-size-photo.js';
import { clearComment } from './render-comment.js';

const modalElement = document.querySelector('.big-picture');
const closeElement = modalElement.querySelector('.big-picture__cancel');
const thumbnailsContainerElement = document.querySelector('.pictures');

// Обработчик события нажатия клавиши Escape
function onEscapeDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onModalClose();
  }
}

// Закрытие модального окна
function onModalClose() {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeDown);
  clearComment();
}

// Открытие модального окна с полноразмерным фото
const openModal = (photos) => {
  thumbnailsContainerElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture__img')) {
      const foundPhotoElement = photos.find((photo) => photo.id === Number(evt.target.dataset.photoId));

      evt.preventDefault();
      modalElement.classList.remove('hidden');
      document.body.classList.add('modal-open');
      createFullSizePhoto(foundPhotoElement);
    }

    document.addEventListener('keydown', onEscapeDown);
    closeElement.addEventListener('click', onModalClose);
  });
};

export { openModal };
