import { createConsultationMessage } from './telegram';
import { sendMessage } from '../telegram/telegram';
import { createButtonWithLoader } from '../button/button';

export const createConsultationForm = () => {
  const formEls = document.querySelectorAll('[data-el="consultation-form"]');

  if (!formEls) {
    return;
  }

  formEls.forEach((formEl) => {
    const phoneEl = formEl.querySelector('[data-el="input-tel"]');
    const buttonEl = formEl.querySelector('[data-el="submit-button"]');

    createButtonWithLoader(buttonEl, () => {
      const { message } = createConsultationMessage(phoneEl.value);
      return sendMessage(message);
    });
  });
};
