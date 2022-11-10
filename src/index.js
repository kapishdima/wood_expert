import { createInputTel } from './js/inputs';
import { createPromoSlider, createPortfolioSlider } from './js/sliders';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createInputTel();
});
