import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch";


type Episode = {
  id: number;
  name: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showID, setShowID] = useState(1);
  const [showName, setShowName] = useState("")

  const { data: episodes } = useFetch<Episode[]>(`https://api.tvmaze.com/shows/${showID}/episodes`);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <NavBar showID={showID} updateShow={setShowID} updateName={setShowName}/>
      {episodes?.map((episode) => {
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
