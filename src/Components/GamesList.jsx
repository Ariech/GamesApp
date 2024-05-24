function GamesList({ gameData }) {
  return (
    <>
      {gameData.results ? (
        gameData.results.map((result) => (
          <div key={result.id}>
            <p>Game name: {result.name ? result.name : "N/A"}</p>
            <p>Released: {result.released ? result.released : "N/A"}</p>
            {result.background_image ? (
              <img
                src={result.background_image}
                alt="Game image"
                style={{ width: "400px" }}
              ></img>
            ) : null}
            <p>Rating: {result.rating ? result.rating : "N/A"}</p>
            <p>Average playtime: {result.playtime ? result.playtime : "N/A"}</p>
            <p>
              Genre:{" "}
              {result.genres.length > 0
                ? result.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
            <ul>
              {result.ratings
                ? result.ratings.map((rating) => (
                    <li key={rating.id}>
                      {rating.title.charAt(0).toUpperCase() +
                        rating.title.slice(1)}
                      : {rating.count}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default GamesList;
