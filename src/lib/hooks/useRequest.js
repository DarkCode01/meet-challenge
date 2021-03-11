import { useState, useEffect } from 'react';
import request from 'lib/utils/request';

export const useRequest = ({ action, options }) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  // handler error
  const toggleError = (error) => setError(error);

  useEffect(() => {
    const fetch = async () => {
      await request(
        async () => {
          try {
            const response = await action(options);

            setResponse(response);
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
  }, [options.per_page]);

  return { isLoading, error, response };
};
