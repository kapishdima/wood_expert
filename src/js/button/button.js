import { showLoader, hideLoader } from '../loader/loader';
import { scrollTo } from '../scroll-to';

export const createButtonWithLoader = (button, onClick) => {
  if (!button) {
    return;
  }

  const loaderEl = button.querySelector('[data-el="loader"]');
  const contentEl = button.querySelector('[data-el="button-content"]');

  button.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      showLoader(loaderEl, contentEl);
      await onClick();
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader(loaderEl, contentEl);
    }
  });
};

export const createButtonWithAnchors = () => {
  const buttonEls = document.querySelectorAll('[data-el="buton-anchor"]');

  if (!buttonEls) {
    return;
  }

  buttonEls.forEach((buttonEl) => {
    buttonEl.addEventListener('click', () => {
      const anchor = buttonEl.dataset.anchor;

      if (!anchor) {
        return;
      }

      scrollTo(`#${anchor}`);
    });
  });
};
