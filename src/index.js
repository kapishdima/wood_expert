import { createInputTel } from './js/input-tel';
import {
  createPromoSlider,
  createPortfolioSlider,
  createReviewSlider,
  createServicesSlider,
} from './js/sliders';
import { createPriceCalculator } from './js/price/price';
import { createGallery } from './js/gallery';
import { createMobileMenu } from './js/mobile-menu';
import { createMenuAnchors } from './js/menu';
import { createConsultationForm } from './js/consultation/consultation';
import { createButtonWithAnchors } from './js/button/button';
import { createSelects } from './js/select';
import { createReviews } from './js/reviews';

import 'swiper/css';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  createPromoSlider();
  createPortfolioSlider();
  createReviewSlider();
  createServicesSlider();

  createPriceCalculator();
  createInputTel();
  createSelects();
  createConsultationForm();

  createGallery();
  createMobileMenu();
  createMenuAnchors();
  createButtonWithAnchors();
  createReviews();
});
