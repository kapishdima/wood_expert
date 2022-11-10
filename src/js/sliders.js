import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

export const createPromoSlider = () => {
  new Swiper('.section-promo__slider', {
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
};

export const createPortfolioSlider = () => {
  new Swiper('.section-portfolio__slider', {
    width: 1287,
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: '[data-el="portfolio-prev"]',
      nextEl: '[data-el="portfolio-next"]',
    },
  });
};

export const createReviewSlider = () => {
  new Swiper('.section-reviews__slider', {
    width: 1340,
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 4,
    spaceBetween: 53,
    navigation: {
      prevEl: '[data-el="reviews-prev"]',
      nextEl: '[data-el="reviews-next"]',
    },
  });
};
