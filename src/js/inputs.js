import IMask from 'imask';

export const createInputTel = (onChange) => {
  const inputs = document.querySelectorAll('[data-el="input-tel"]');
  const maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false,
  };

  if (!inputs) {
    return;
  }

  inputs.forEach((input) => {
    const mask = IMask(input, maskOptions);

    if (onChange) {
      mask.on('accept', onChange);
    }
  });
};
