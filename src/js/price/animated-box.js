const boxEl = document.querySelector('[data-el="box"]');

export const animateBoxOpen = () => {
  boxEl.classList.add('active');
};

export const animateBoxClose = () => {
  boxEl.classList.remove('active');
};
