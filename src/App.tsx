import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showID, setShowID] = useState(1);

  useEffect(() => {
    console.log("running our effect again to fetch episodes...");
    async function fetchEpisodes() {
      setIsLoading(true);
      const url = `https://api.tvmaze.com/shows/${showID}/episodes`;

      const response = await fetch(url);
      const body = await response.json();
      console.log(body, "<---- logging the show episodes...");
      setEpisodes(body);
      setIsLoading(false);
    }

    fetchEpisodes();
  }, [showID]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <NavBar showID={showID} updateShow={setShowID} />
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
