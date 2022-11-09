import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';

import './styles/index.scss';

Swiper.use([Pagination, Autoplay, EffectFade]);

const createPromoSlider = () => {
  new Swiper('.section-promo__slider', {
    speed: 1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // effect: 'fade',
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
});
