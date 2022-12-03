import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollTo = (selector) => {
  gsap.to(window, { duration: 2, scrollTo: selector });
};
