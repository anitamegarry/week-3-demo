import useFetch from "../hooks/useFetch";

export default function NavBar({ updateShow, showID }) {
  const { data: shows } = useFetch("https://api.tvmaze.com/shows");

  const selectedShow = shows.find((show) => show.id === showID);

  function handleChange(event) {
    updateShow(event.target.value);
  }

  return (
    <>
      <select
        onChange={handleChange}
        title="select-shows"
        name={selectedShow?.name}
        id="select-shows"
      >
        {shows.map((show) => {
          return <option value={show.id}>{show.name}</option>;
        })}
      </select>
    </>
  );
}
