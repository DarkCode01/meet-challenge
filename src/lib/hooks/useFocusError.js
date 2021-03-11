import { useEffect } from 'react';

/**
 * useFocusError - Simple hook to auto scroll the
 * alert when raise a new error on request.
 *
 * @param {string} id - alert element id
 * @param {Array[string]} init - list values for auto focus
 */
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

    // eslint-disable-next-line
  }, init);
};
