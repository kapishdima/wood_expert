import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { createPagination } from './pagination';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

export const createPriceSlider = () => {
  const slider = new Swiper('.section-price__slider');
  const prevEls = Array.from(document.querySelectorAll('[data-el="price-prev"]'));
  const startButtonEl = document.querySelector('[data-el="price-start"]');
  const { setCurrentPagination } = createPagination();

  const next = () => {
    slider.slideNext();
    setCurrentPagination(slider.activeIndex);
  };

  const prev = () => {
    slider.slidePrev();
    setCurrentPagination(slider.activeIndex);
  };

  prevEls.forEach((prevEl) => {
    prevEl.addEventListener('click', prev);
  });

  startButtonEl.addEventListener('click', next);

  return { prev, next };
};
