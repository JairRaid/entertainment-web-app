import React from "react";
import { useMovie } from "../store/MovieContext";

function TrendingThumbnail({
  title,
  year,
  category,
  rating,
  thumbnail,
  isBookmarked,
}) {
  const { allMovies, setAllMovies } = useMovie();

  const handleBookmarkClick = () => {
    console.log(`Bookmark clicked for ${title}`);
    const updatedMovies = allMovies.map((movie) => {
      if (movie.title === title) {
        return { ...movie, isBookmarked: !movie.isBookmarked };
      }
      return movie;
    });

    setAllMovies(updatedMovies);
  };

  return (
    <div
      tabIndex="0"
      className="embla__slide relative max-h-[280px] rounded-[8px] flex-[0_0_66%] lg:flex-[0_0_38%]"
    >
      <div className="embla__image-container h-full">
        <picture>
          <source
            srcSet={thumbnail.trending.large}
            width="940"
            height="460"
            media="(min-width: 768px)"
          />
          <img
            src={thumbnail.trending.small}
            alt={`${title} thumbnail`}
            width="480"
            height="280"
            className="size-full object-cover object-center rounded-[8px]"
          />
        </picture>
        <button className="play-ui">
          <div className="play-button">
            <img src="/assets/icon-play.svg" alt="play icon" />
            <p>Play</p>
          </div>
        </button>
      </div>
      <div className="absolute left-0 bottom-0 px-4 py-[14px] w-full flex flex-col gap-y-2 bg-gradient-to-b from-transparent to-black/75">
        <div className="movie-info md:text-[0.9375rem]">
          <p>{year}</p>•
          <p className="flex items-center gap-x-2">
            <img src="/assets/icon-category-movie.svg" alt="icon movie" />{" "}
            {category}
          </p>
          •<p>{rating}</p>
        </div>
        <h3 className="trending-title">{title}</h3>
      </div>
      <button
        aria-label="Bookmark Beyond Earth "
        onClick={handleBookmarkClick}
        className="absolute top-2 right-2 size-8 bg-blue950/50 rounded-full flex items-center justify-center "
      >
        <img
          src={
            isBookmarked
              ? "/assets/icon-bookmark-full.svg"
              : "/assets/icon-bookmark-empty.svg"
          }
          alt="bookmark icon"
        />
      </button>
    </div>
  );
}

export default TrendingThumbnail;
