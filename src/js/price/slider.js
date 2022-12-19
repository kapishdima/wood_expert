import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { createPagination } from './pagination';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

export const createPriceSlider = () => {
  const slider = new Swiper('.section-price__slider', {
    delay: 3000,
    allowTouchMove: false,
  });
  const prevEls = Array.from(document.querySelectorAll('[data-el="price-prev"]'));
  const startButtonEls = Array.from(document.querySelectorAll('[data-el="price-start"]'));
  const { setCurrentPagination } = createPagination();

  const next = () => {
    setTimeout(() => {
      slider.slideNext(1000);
      setCurrentPagination(slider.activeIndex);
    }, 700);
  };

  const prev = () => {
    slider.slidePrev();
    setCurrentPagination(slider.activeIndex);
  };

  prevEls.forEach((prevEl) => {
    prevEl.addEventListener('click', prev);
  });

  console.log(startButtonEls);
  startButtonEls.forEach((startButtonEl) => {
    startButtonEl.addEventListener('click', () => {
      console.log('start click');
      next();
    });
  });

  return { prev, next };
};
