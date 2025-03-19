import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchEpisodes() {
      setIsLoading(true);
      const url = "https://api.tvmaze.com/shows/82/episodes";

      const response = await fetch(url);
      const body = await response.json();

      setEpisodes(body);
      setIsLoading(false);
    }

    fetchEpisodes();
  }, []);

  useEffect(() => {
    async function fetchShows() {
      const url = "https://api.tvmaze.com/shows";

      const response = await fetch(url);
      const body = await response.json();
      console.log(body, "<----- logging all the shows from the API");
      setShows(body);
    }

    fetchShows();
  }, []);

  // isLoading...
  // episodes...
  console.log(episodes);
  if (isLoading) {
    console.log({ isLoading });
    return <p>loading...</p>;
  }
  return (
    <>
      <NavBar />
      {episodes.map((episode) => {
        return (
          <section key={episode.id}>
            <h3>{episode.name}</h3>
          </section>
        );
      })}
    </>
  );
}

export default App;
