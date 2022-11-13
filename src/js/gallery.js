import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import Micromodal from 'micromodal';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

const createGallerySlider = () => {
  const swiper = new Swiper('[data-el="gallery-slider"]', {
    navigation: {
      nextEl: '[data-el="gallery-next"]',
      prevEl: '[data-el="gallery-prev"]',
    },
  });
};

export const createGallery = () => {
  const openBtnEls = document.querySelectorAll('[data-el="gallery-open"]');
  const galleryEl = document.querySelector('[data-el="gallery"]');

  openBtnEls.forEach((openBtnEl) => {
    openBtnEl.addEventListener('click', () => {
      const images = JSON.parse(openBtnEl.dataset.gallery);

      if (!images) {
        return;
      }

      createGalleryItems(images);
      createGallerySlider();
      Micromodal.show('gallery-modal');
    });
  });

  const createGalleryItems = (images) => {
    galleryEl.innerHTML = '';
    const slideView = (image) => `<div class="swiper-slide gallery-slide" data-el="gallery-item">
      <img class="gallery-slide__image" src="${image}"/>
    </div>`;

    images.forEach((image) => {
      galleryEl.innerHTML += slideView(image);
    });
  };
};
