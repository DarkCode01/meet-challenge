import { useState, useEffect } from 'react';
import request from 'lib/utils/request';

/**
 * useRequest - hook to make request to api rest.
 * 
 * @param {function} action - request function.
 * @param {object} options - optiosn params and default value of request.
 */
export const useRequest = ({ action, options }) => {
  const [isConcat, setConcat] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(options.defaultData || { items: [] });

  // handler error
  const toggleError = (error) => setError(error);

  useEffect(() => {
    const fetch = async () => {
      await request(
        async () => {
          try {
            const response = await action(options);

            if (isConcat) {
              setData(prev => {
                if (Array.isArray(response.data)) {
                  return prev.concat(response.data);
                }

                return {
                  items: prev.items.concat(response.data.items)
                }
              });

              setConcat(false);
            } else {
              setData(response.data);
            }
          } catch (err) {
            toggleError(err.response?.data?.message || 'Error interno!.');
          }
        },
        {
          startLoading: () => setLoading(true),
          stopLoading: () => setLoading(false),
        }
      );
    };

    fetch();

    // eslint-disable-next-line
  }, [options.per_page, options.page, options.order, options.q]);

  return { isLoading, error, data, setData, toggleError, setConcat };
};
