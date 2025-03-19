import useFetch from "../hooks/useFetch";


interface NavBarProps {
  updateShow: (id: number) => void;
  showID: number;
  updateName: (name: string) => void
}

type Show = {
  id: number;
  name: string
}

export default function NavBar({ updateShow, showID, updateName }: NavBarProps) {
  const { data: shows } = useFetch<Show[]>("https://api.tvmaze.com/shows");

  const selectedShow = shows?.find((show) => show.id === showID);

  function handleChange(event: React.ChangeEvent<any>) {
    updateShow(event.target.value);
    updateName(event.target.name)
  }

  return (
    <>
      <select
        onChange={handleChange}
        title="select-shows"
        name={selectedShow?.name}
        id="select-shows"
      >
        {shows?.map((show) => {
          return <option value={show.id}>{show.name}</option>;
        })}
      </select>
    </>
  );
}
