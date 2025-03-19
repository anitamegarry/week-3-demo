import { useEffect, useState } from "react";

export default function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null); // don't say shows here.... need to make this more general
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("running the effect for NavBar...", Date.now());
    async function fetchData() {
      try {
        const response = await fetch(url);
        const body = await response.json();

        setData(body);
      } catch {
        setError("Error retrieving data")
      }

    }

    fetchData();
  }, [url]);

  return { data };
}
