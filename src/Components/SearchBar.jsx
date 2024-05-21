const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
};

export default SearchBar;
