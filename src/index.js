import { createInputTel } from './js/inputs';
import { createPromoSlider, createPortfolioSlider, createReviewSlider } from './js/sliders';
import { createPriceCalculator } from './js/price/price';
import { createGallery } from './js/gallery';

import 'swiper/css';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createReviewSlider();
  createPriceCalculator();
  createInputTel();

  createGallery();
});
