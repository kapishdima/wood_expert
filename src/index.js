import { createInputTel } from './js/inputs';
import { createPromoSlider, createPortfolioSlider, createReviewSlider } from './js/sliders';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createReviewSlider();
  createInputTel();
});
