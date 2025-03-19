import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState([]); // don't say shows here.... need to make this more general

  useEffect(() => {
    console.log("running the effect for NavBar...", Date.now());
    async function fetchData() {
      const response = await fetch(url);
      const body = await response.json();

      setData(body);
    }

    fetchData();
  }, [url]);

  return { data };
}
