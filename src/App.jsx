import { useEffect, useState } from "react";
import "./App.css";
import GamesList from "./Components/GamesList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/games?key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((d) => setData(d))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <GamesList data={data} />
    </>
  );
}

export default App;
