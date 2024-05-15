import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
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
      {data.results ? (
        data.results.map((result) => <div key={result.id}>{result.name}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
