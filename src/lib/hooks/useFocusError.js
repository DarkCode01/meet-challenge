import { useEffect } from 'react';

export const useFocusError = (id, init = []) => {
  useEffect(() => {
    const element = document.querySelector(`#${id}`);

    if (element) {
      // auto focus
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }, init);
};
