import { useEffect, useState } from "react";
import "./App.css";
import GamesList from "./Components/GamesList";
import SearchBar from "./Components/SearchBar";

function App() {
  const [gameData, setGameData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getGameRequest = () => {
    fetch(
      `/api/games?key=${import.meta.env.VITE_API_KEY}&search=${searchValue}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((d) => setGameData(d))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      getGameRequest();
    }, 300);

    return () => clearTimeout(debounceFetch);
  }, [searchValue]);

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <GamesList gameData={gameData} />
    </>
  );
}

export default App;
