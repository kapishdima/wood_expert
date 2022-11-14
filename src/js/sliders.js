import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

export const createPromoSlider = () => {
  new Swiper('.section-promo__slider', {
    speed: 1000,
    spaceBetween: 10,
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

export const createServicesSlider = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    new Swiper('.section-services__slider', {
      spaceBetween: 8,
      slidesPerView: 1.25,
      centeredSlides: true,
    });
  }
};

export const createPortfolioSlider = () => {
  new Swiper('.section-portfolio__slider', {
    slidesPerGroup: 1,
    slidesPerView: 1.25,
    spaceBetween: 8,
    centeredSlides: true,
    navigation: {
      prevEl: '[data-el="portfolio-prev"]',
      nextEl: '[data-el="portfolio-next"]',
    },

    breakpoints: {
      768: {
        slidesPerGroup: 1,
        slidesPerView: 3.2,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
};

export const createReviewSlider = () => {
  new Swiper('.section-reviews__slider', {
    slidesPerGroup: 1,
    slidesPerView: 1.35,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      prevEl: '[data-el="reviews-prev"]',
      nextEl: '[data-el="reviews-next"]',
    },

    breakpoints: {
      768: {
        slidesPerGroup: 1,
        slidesPerView: 4.2,
        centeredSlides: false,
        // spaceBetween: 53,
      },
    },
  });
};
