import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

export const createPriceCalculator = () => {
  const slider = new Swiper('.section-price__slider');

  const nextEls = Array.from(document.querySelectorAll('[data-el="price-next"]'));
  const prevEls = Array.from(document.querySelectorAll('[data-el="price-prev"]'));
  const stepCounter = document.querySelector('[data-el="step-counter"]');
  const stepPaginationEls = Array.from(document.querySelectorAll('[data-el="step-pagination"]'));

  nextEls.forEach((nextEl) => {
    nextEl.addEventListener('click', () => {
      slider.slideNext();
      stepCounter.innerText = slider.activeIndex;
      renderActivePagination(slider.activeIndex, stepPaginationEls);
    });
  });

  prevEls.forEach((prevEl) => {
    prevEl.addEventListener('click', () => {
      slider.slidePrev();
      stepCounter.innerText = slider.activeIndex;
      renderActivePagination(slider.activeIndex, stepPaginationEls);
    });
  });
};

const renderActivePagination = (activeStep, paginationEls) => {
  const index = activeStep - 1;

  if (index < 0) {
    return clearActivePagination(paginationEls);
  }

  clearActivePagination(paginationEls);

  const paginationEl = paginationEls[index];
  paginationEl.classList.add('active');
};

const clearActivePagination = (paginationEls) => {
  paginationEls.forEach((paginationEl) => {
    paginationEl.classList.remove('active');
  });
};
