import { posts } from './data.js';
import { createRenderPictures } from './render-picture.js';
import { openModal } from './manipulation-modal.js';
import { editPhotoScale } from "./photo-setting";
import { closePhotoModal, editPhotoModal, postForm } from './edit-photo-modal.js';

createRenderPictures(posts);
openModal(posts);
editPhotoModal();
closePhotoModal();
editPhotoScale();
postForm();
