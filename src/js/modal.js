import Micromodal from 'micromodal';

export const createModals = () => {
  Micromodal.init({
    openTrigger: 'data-custom-open',
  });
};
