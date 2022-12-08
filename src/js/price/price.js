import { createButtonWithLoader } from '../button/button';
import { createForm } from './form';
import { sendOrder } from './telegram';
import { createPriceSlider } from './slider';
import { createServices } from './services';
import { animateBoxClose, animateBoxOpen } from './animated-box';

let form;
let pagination;

export const createPriceCalculator = () => {
  pagination = createPriceSlider();
  initForm();
  initServices();
};

const initServices = () => {
  const onServiceClick = (serviceName, serviceValue) => {
    pagination.next();
    form.setValue(serviceName, serviceValue);
  };

  createServices(onServiceClick);
};

const initForm = () => {
  const formEl = document.querySelector('.price-form');
  const [submitButtonDesktop, submitButtonMobile] = Array.from(
    document.querySelectorAll('[data-el="price-finish"]'),
  );

  const onValid = () => {
    submitButtonDesktop.classList.remove('slider-finish--disabled');
    submitButtonMobile.classList.remove('slider-finish--disabled');
    animateBoxOpen();
  };

  const onInvalid = () => {
    submitButtonDesktop.classList.add('slider-finish--disabled');
    submitButtonMobile.classList.add('slider-finish--disabled');
    animateBoxClose();
  };

  form = createForm(formEl, { onValid, onInvalid });

  const onSubmitFormDesktop = () => {
    const fields = form.getValue();
    sendOrder(fields);
  };

  const onSubmitFormMobile = () => {
    const fields = form.getValue();

    sendOrder(fields);
    slider.slideNext();
  };

  createButtonWithLoader(submitButtonDesktop, onSubmitFormDesktop);
  createButtonWithLoader(submitButtonMobile, onSubmitFormMobile);
};
