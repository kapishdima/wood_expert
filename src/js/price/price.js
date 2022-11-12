import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { createSelect } from '../select';

Swiper.use([Pagination, Autoplay, EffectFade, Navigation]);

const fields = ['work', 'stairs', 'wood', 'railing', 'contact'];
const orderData = {
  work: null,
  stairs: null,
  wood: null,
  railing: null,
  contact: new Proxy(
    { name: null, messanger: null, phone: null },
    {
      set: (obj, prop, value) => {
        renderActiveBox();
        return Reflect.set(obj, prop, value);
      },
    },
  ),
};

export const createPriceCalculator = () => {
  createPriceSlider();
  initServices();
  initForm();
};

const initServices = () => {
  const servicesEls = Array.from(document.querySelectorAll('[data-el="service"]'));
  servicesEls.forEach((serviceEl) => {
    serviceEl.addEventListener('click', () => {
      const field = serviceEl.dataset.field;
      const value = serviceEl.dataset.value;

      orderData[field] = value;

      clearActiveServices(servicesEls);
      renderActiveService(serviceEl);
    });
  });
};

const initForm = () => {
  const formEl = document.querySelector('.price-form');
  const submitButtonEl = document.querySelector('[data-el="price-finish"]');
  const inputEls = Array.from(formEl.querySelectorAll('[data-el="input"]'));
  const inputTelEl = formEl.querySelector('[data-el="input-tel"]');
  const selectEls = Array.from(formEl.querySelectorAll('[data-el="select"]'));

  inputTelEl.addEventListener('input', (event) => {
    const value = event.target.value;

    orderData.contact.phone = value;
  });

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener('input', (event) => {
      const value = event.target.value;

      orderData.contact.name = value;
    });
  });

  selectEls.forEach((selectEl) => {
    createSelect(selectEl, (field, value) => {
      console.log(field, value);
      orderData.contact[field] = value;
    });
  });

  submitButtonEl.addEventListener('click', () => {
    console.log(orderData);
  });
};

const renderActiveService = (serviceEl) => {
  serviceEl.classList.add('selected');
};

const canNext = (activeIndex) => {
  const index = activeIndex - 1;

  if (index < 0) {
    return true;
  }
  const dataField = fields[index];
  return Boolean(orderData[dataField]);
};

const createPriceSlider = () => {
  const slider = new Swiper('.section-price__slider');

  const nextEls = Array.from(document.querySelectorAll('[data-el="price-next"]'));
  const prevEls = Array.from(document.querySelectorAll('[data-el="price-prev"]'));
  const stepCounter = document.querySelector('[data-el="step-counter"]');
  const stepPaginationEls = Array.from(document.querySelectorAll('[data-el="step-pagination"]'));

  nextEls.forEach((nextEl) => {
    nextEl.addEventListener('click', () => {
      if (!canNext(slider.activeIndex)) {
        return;
      }

      slider.slideNext();
      stepCounter.innerText = slider.activeIndex;
      renderActivePagination(slider.activeIndex, stepPaginationEls);
    });
  });

  prevEls.forEach((prevEl) => {
    prevEl.addEventListener('click', () => {
      slider.slidePrev();
      stepCounter.innerText = slider.activeIndex;
      renderActivePagination(slider.activeIndex, stepPaginationEls);
    });
  });
};

const renderActivePagination = (activeStep, paginationEls) => {
  const index = activeStep - 1;

  if (index < 0) {
    return clearActivePagination(paginationEls);
  }

  clearActivePagination(paginationEls);

  const paginationEl = paginationEls[index];
  paginationEl.classList.add('active');
};

const clearActiveServices = (servicesEls) => {
  servicesEls.forEach((serviceEl) => {
    serviceEl.classList.remove('selected');
  });
};

const clearActivePagination = (paginationEls) => {
  paginationEls.forEach((paginationEl) => {
    paginationEl.classList.remove('active');
  });
};

const renderActiveBox = () => {
  const values = Object.values(orderData.contact);
  const shouldRenderActive = values.every((value) => Boolean(value));
  const boxEl = document.querySelector('[data-el="box"]');
  const submitButtonEl = document.querySelector('[data-el="price-finish"]');

  if (shouldRenderActive) {
    boxEl.classList.add('active');
    submitButtonEl.classList.remove('slider-finish--disabled');
  } else {
    boxEl.classList.remove('active');
  }
};
