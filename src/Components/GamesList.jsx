function GamesList({ data }) {
  return (
    <>
      {data.results ? (
        data.results.map((result) => (
          <div key={result.id}>
            <p>Game name: {result.name}</p>
            <p>Released: {result.released}</p>
            <img
              src={result.background_image}
              alt="Game image"
              style={{ width: "400px" }}
            ></img>
            <p>Rating: {result.rating}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default GamesList;
