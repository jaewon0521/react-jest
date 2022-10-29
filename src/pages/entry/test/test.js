import axios from "axios";
import { useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    axios(url)
      .then((res) => setData(res))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [url]);

  return { loading, data, error };
}
