export const createPagination = () => {
  const paginationEls = Array.from(document.querySelectorAll('[data-el="step-pagination"]'));
  const counterEl = document.querySelector('[data-el="step-counter"]');

  const setCurrentPagination = (page) => {
    const index = page - 1;

    if (index < 0) {
      return clearPagination();
    }

    clearPagination();

    const paginationEl = paginationEls[index];
    paginationEl.classList.add('active');
    counterEl.innerText = page;
  };

  const clearPagination = () => {
    paginationEls.forEach((paginationEl) => {
      paginationEl.classList.remove('active');
    });
  };

  return {
    setCurrentPagination,
  };
};
