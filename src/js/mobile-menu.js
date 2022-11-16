export const createMobileMenu = () => {
  if (!window.matchMedia('(max-width: 768px)').matches) {
    return;
  }

  const openBtnEl = document.querySelector('[data-el="header-mobile-btn"]');
  const closeBtnEl = document.querySelector('[data-el="menu-close-btn"]');
  const menuEl = document.querySelector('[data-el="mobile-menu"]');

  if (!openBtnEl || !menuEl || !closeBtnEl) {
    return;
  }

  openBtnEl.addEventListener('click', () => {
    menuEl.classList.add('opened');
  });

  closeBtnEl.addEventListener('click', () => {
    menuEl.classList.remove('opened');
  });
};
