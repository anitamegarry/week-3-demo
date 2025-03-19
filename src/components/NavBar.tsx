import { useEffect, useState } from "react";

export default function NavBar() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      const url = "https://api.tvmaze.com/shows";

      const response = await fetch(url);
      const body = await response.json();

      setShows(body);
    }

    fetchShows();
  }, []);

  return (
    <>
      <select title="select-shows" name="select-shows" id="select-shows">
        {shows.map((show) => {
          return <option value={show.name}>{show.name}</option>;
        })}
      </select>
    </>
  );
}
