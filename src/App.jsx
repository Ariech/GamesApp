import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GamesList from "./Components/GamesList";
import SearchBox from "./Components/SearchBox";

function App() {
  const [gameData, setGameData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getGameRequest = useCallback(() => {
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
  }, [searchValue]);

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      getGameRequest();
    }, 300);

    return () => clearTimeout(debounceFetch);
  }, [searchValue, getGameRequest]);

  return (
    <>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <GamesList gameData={gameData} />
    </>
  );
}

export default App;
