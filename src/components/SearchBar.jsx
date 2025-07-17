import { useMemo } from "react";
import { useMovie } from "../store/MovieContext";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { setQuery, allMovies, setSearchResults } = useMovie();
  const location = useLocation();

  const handleSearch = (value) => {
    setQuery(value);

    if (value.trim() !== "") {
      if (location.pathname === "/") {
        const results = allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
      }

      if (location.pathname === "/movies") {
        const results = allMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(value.toLowerCase()) &&
            movie.category === "Movie"
        );
        setSearchResults(results);
      }

      if (location.pathname === "/series") {
        const results = allMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(value.toLowerCase()) &&
            movie.category === "TV Series"
        );
        setSearchResults(results);
      }

      if (location.pathname === "/bookmark") {
        const results = allMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(value.toLowerCase()) &&
            movie.isBookmarked
        );
        setSearchResults(results);
      }
    }

    if (value.trim() === "") {
      setQuery("");
      setSearchResults([]);
      return;
    }
  };

  const debounceSearch = useMemo(() => debounce(handleSearch, 500), []);

  const handleChange = (e) => {
    debounceSearch(e.target.value);
  };

  return (
    <form className="search-bar">
      <img
        src="assets/icon-search.svg"
        alt="search icon"
        className="size-6 md:size-8"
      />
      <input
        type="search"
        aria-label="Search for movies or TV series"
        placeholder="Search for movies or TV series"
        onChange={handleChange}
        className="search-input"
      />
    </form>
  );
}

export default SearchBar;
