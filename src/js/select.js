export const createSelect = (target, onSelect) => {
  if (!target) {
    return;
  }

  const valueEl = target.querySelector('[data-el="select-value"]');
  const valueInputEl = target.querySelector('#select-value');
  const optionEls = Array.from(target.querySelectorAll('[data-el="option"]'));
  const inputEl = target.querySelector('[data-el="select-input"]');

  const isOpened = () => target.classList.contains('select-field--opened');
  const open = () => {
    target.classList.add('select-field--opened');
  };

  const close = () => {
    target.classList.remove('select-field--opened');
  };

  const setValue = (value) => {
    if (!value) {
      return;
    }

    valueInputEl.value = value;
    valueEl.innerText = value;

    valueInputEl.dispatchEvent(new Event('input', { bubbles: true }));
  };

  inputEl.addEventListener('click', (event) => {
    if (isOpened()) {
      close();
    } else {
      open();
    }
  });

  optionEls.forEach((optionEl) => {
    optionEl.addEventListener('click', (event) => {
      const value = event.target.innerText;

      setValue(value);
      close();
    });
  });
};

export const createSelects = () => {
  const selectEls = Array.from(document.querySelectorAll('[data-el="select"]'));
  selectEls.forEach((selectEl) => {
    createSelect(selectEl);
  });
};
