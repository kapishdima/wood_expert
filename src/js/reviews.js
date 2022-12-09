import { ellipsis } from './ellipsis';

const createReviewsPopover = () => {
  const reviewsEls = document.querySelectorAll('[data-el="review-item"]');

  if (!reviewsEls) {
    return;
  }

  reviewsEls.forEach((reviewEl) => {
    const popover = reviewEl.querySelector('[data-el="review-popover"]');
    const hasPopover = Boolean(popover);

    if (!hasPopover) {
      return;
    }

    reviewEl.addEventListener('mouseover', () => {
      popover.classList.add('visible');
    });

    reviewEl.addEventListener('mouseout', () => {
      popover.classList.remove('visible');
    });
  });
};

const createReviewsMobile = () => {
  const reviewsEls = document.querySelectorAll('[data-el="review-item"]');

  reviewsEls.forEach((reviewEl) => {
    const reviewTextEl = reviewEl.querySelector('[data-el="review-text"]');
    const reviewPopoverEl = reviewEl.querySelector('[data-el="review-popover"]');
    const reviewMoreEl = reviewEl.querySelector('[data-el="review-more"]');
    const hasPopover = Boolean(reviewPopoverEl);

    if (!hasPopover) {
      return;
    }

    reviewMoreEl.classList.add('visible');
    reviewMoreEl.addEventListener('click', () => {
      reviewTextEl.innerText = reviewPopoverEl.innerText;
      reviewMoreEl.classList.remove('visible');
    });
  });
};

export const createReviews = () => {
  const reviewsTextEls = document.querySelectorAll('[data-el="review-text"]');

  if (!reviewsTextEls) {
    return;
  }

  reviewsTextEls.forEach((reviewsTextEl) => {
    const text = reviewsTextEl.innerText;

    ellipsis(text, 90);
  });

  if (window.matchMedia('(max-width: 1024px)').matches) {
    createReviewsMobile();
  } else {
    createReviewsPopover();
  }
};
