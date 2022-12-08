export const createServices = (onClick) => {
  const servicesEls = Array.from(document.querySelectorAll('[data-el="service"]'));
  servicesEls.forEach((serviceEl) => {
    serviceEl.addEventListener('click', () => {
      const field = serviceEl.dataset.field;
      const value = serviceEl.dataset.value;

      onClick(field, value);

      clearActiveServices(servicesEls);
      renderActiveService(serviceEl);
    });
  });
};

const renderActiveService = (serviceEl) => {
  serviceEl.classList.add('selected');
};

const clearActiveServices = (servicesEls) => {
  servicesEls.forEach((serviceEl) => {
    serviceEl.classList.remove('selected');
  });
};
