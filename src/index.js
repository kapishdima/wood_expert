import { createInputTel } from './js/inputs';
import { createPromoSlider, createPortfolioSlider, createReviewSlider } from './js/sliders';
import { createPriceCalculator } from './js/price/price';
import { createSelects } from './js/select';

import 'swiper/css';
import './styles/index.scss';
import { createGallery, createGallerySlider } from './js/gallery';
import { createModals } from './js/modal';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createReviewSlider();
  createPriceCalculator();
  createInputTel();

  // createGallerySlider();
  // createModals();
  createGallery();
});
