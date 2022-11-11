import { createInputTel } from './js/inputs';
import { createPromoSlider, createPortfolioSlider, createReviewSlider } from './js/sliders';

import 'swiper/css';
import './styles/index.scss';
import { createPriceCalculator } from './js/price';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createReviewSlider();
  createPriceCalculator();
  createInputTel();
});
