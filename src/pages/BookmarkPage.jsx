import { useEffect } from "react";
import Loading from "../components/Loading";
import { useMovie } from "../store/MovieContext";
import SearchBar from "../components/SearchBar";
import Thumbnail from "../components/Thumbnail";

function BookmarkPage() {
  const {
    error,
    allMovies,
    isLoading,
    setAllMovies,
    setIsLoading,
    setError,
    searchResults,
    query,
  } = useMovie();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("data/data.json");
        const data = await response.json();
        console.log("Fetched movies:", data);
        setAllMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setError("Failed to fetch movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) return <Loading />;

  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  if (searchResults.length > 0) {
    return (
      <main className="bookmark-page mx-4 mt-6 md:mt-8 lg:pl-[124px] md:mx-0  pb-[13px]">
        <SearchBar />
        <section aria-labelledby="search-results-heading" className="my-6">
          <h2 id="search-results-heading" className="mb-6 md:text-[2rem]">
            {`Found ${searchResults.length} result${
              searchResults.length > 1 ? "s" : ""
            } for '${query}'`}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px]">
            {searchResults.map((movie, index) => {
              return (
                <Thumbnail
                  key={index}
                  title={movie.title}
                  year={movie.year}
                  category={movie.category}
                  rating={movie.rating}
                  thumbnail={movie.thumbnail}
                  isBookmarked={movie.isBookmarked}
                />
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  if (searchResults.length === 0 && query !== "") {
    return (
      <main className="bookmark-page mx-4 mt-6 md:mt-8 lg:pl-[124px] md:mx-0  pb-[13px]">
        <SearchBar />
        <section aria-labelledby="search-results-heading" className="my-6">
          <h2 id="search-results-heading" className="mb-6 md:text-[2rem]">
            {`No results found for '${query}'`}
          </h2>
        </section>
      </main>
    );
  }

  return (
    <main className="bookmark-page mx-4 mt-6 md:mt-8 lg:pl-[124px] md:mx-0  pb-[13px]">
      <SearchBar />
      <section aria-labelledby="bookmarkedMovies-heading" className="my-6">
        <h2 id="bookmarkedMovies-heading" className="mb-6 md:text-[2rem]">
          Bookmarked Movies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px]">
          {allMovies
            .filter(
              (allmovie) =>
                allmovie.isBookmarked === true && allmovie.category === "Movie"
            )
            .map((movie, index) => {
              return (
                <Thumbnail
                  key={index}
                  title={movie.title}
                  year={movie.year}
                  category={movie.category}
                  rating={movie.rating}
                  thumbnail={movie.thumbnail}
                  isBookmarked={movie.isBookmarked}
                />
              );
            })}
        </div>
      </section>
      <section aria-labelledby="bookmarkedTVSeries-heading">
        <h2 id="bookmarkedTVSeries-heading" className="mb-6 md:text-[2rem]">
          Bookmarked TV Series
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px]">
          {allMovies
            .filter(
              (allmovie) =>
                allmovie.isBookmarked === true &&
                allmovie.category === "TV Series"
            )
            .map((movie, index) => {
              return (
                <Thumbnail
                  key={index}
                  title={movie.title}
                  year={movie.year}
                  category={movie.category}
                  rating={movie.rating}
                  thumbnail={movie.thumbnail}
                  isBookmarked={movie.isBookmarked}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default BookmarkPage;
