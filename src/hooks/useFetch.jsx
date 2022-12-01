import { useState } from 'react';

export default function useFetch(url, method, payload) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading('Loading...');
        setError(null);
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: method,
          body: payload,
        });
        const json = await response.json();
        setData(json);
        setLoading(null);
        return data;
      } catch (error) {
        setError(error);
        setLoading(null);
      }
    })();
  }, [url]);
}
