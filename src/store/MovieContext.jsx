import { createContext, useContext, useState } from "react";

// 1. Create movie context
const MovieContext = createContext();

// 2. Create provider
export const MovieContextProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const ctxValue = {
    allMovies,
    isLoading,
    error,
    trending,
    recommended,
    query,
    searchResults,
    setSearchResults,
    setQuery,
    setAllMovies,
    setIsLoading,
    setError,
    setTrending,
    setRecommended,
  };
  return <MovieContext value={ctxValue}>{children}</MovieContext>;
};

// 3. custom hook to use the context
export const useMovie = () => useContext(MovieContext);
