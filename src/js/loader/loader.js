export const showLoader = (loader, content) => {
  loader.classList.add('loader--visible');
  content.classList.add('button-content--hidden');
};

export const hideLoader = (loader, content) => {
  loader.classList.remove('loader--visible');
  content.classList.remove('button-content--hidden');
};
