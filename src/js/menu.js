import { scrollTo } from './scroll-to';

export const createMenuAnchors = () => {
  const anchorsEls = Array.from(document.querySelectorAll('[data-el="menu-item"]'));

  if (!anchorsEls) {
    return;
  }

  anchorsEls.forEach((anchorEl) => {
    anchorEl.addEventListener('click', (event) => {
      event.preventDefault();

      const href = anchorEl.getAttribute('href');

      scrollTo(`#${href}`);
    });
  });
};
