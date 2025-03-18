import { useEffect, useState } from 'react';
import './App.css'

function App() {


  const [episodes,setEpisodes] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEpisodes() {
      setIsLoading(true);
      const url  = "https://api.tvmaze.com/shows/82/episodes";
  
      const response = await fetch(url);
      const body = await response.json();

      setEpisodes(body);
      setIsLoading(false);
      
  }

  fetchEpisodes();
  },
  [])

  // isLoading
  // episodes
  if(isLoading) {
    return <p>loading...</p>
  }
  return (
    <>
    {episodes.map(episode => {
      return <section key={episode.id}>
          <h3>{episode.name}</h3>
        </section>
    })}
    </>
  )
}

export default App
