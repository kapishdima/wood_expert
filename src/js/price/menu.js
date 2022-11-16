export const createMenuAnchors = () => {
  const anchorsEls = Array.from(document.querySelectorAll('[data-el="menu-item"]'));

  if (!anchorsEls) {
    return;
  }

  anchorsEls.forEach((anchorEl) => {
    anchorEl.addEventListener('click', (event) => {
      event.preventDefault();

      const href = anchorEl.getAttribute('href');
      const anchorElement = document.getElementById(href);
      console.log(anchorElement);

      if (!anchorElement) {
        return;
      }

      const coords = anchorElement.getBoundingClientRect();

      window.scrollTo({ top: coords.top, behavior: 'smooth' });
    });
  });
};
