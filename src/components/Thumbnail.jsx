import React from "react";
import { useMovie } from "../store/MovieContext";

function Thumbnail({ title, year, category, rating, thumbnail, isBookmarked }) {
  const { setAllMovies } = useMovie();

  const handleBookmarkClick = () => {
    console.log(`Bookmark clicked for ${title}`);

    setAllMovies((prevState) =>
      prevState.map((movie) => {
        if (movie.title === title) {
          return {
            ...movie,
            isBookmarked: isBookmarked === true ? false : true,
          };
        }
        return movie;
      })
    );
  };

  return (
    <div
      tabIndex="0"
      className="embla__slide relative rounded-[8px] overflow-hidden cursor-pointer "
    >
      <div className="thumbnail-container">
        <picture>
          <source
            srcSet={thumbnail.regular.large}
            width="560"
            height="348"
            media="(min-width: 1024px)"
          />
          <source
            srcSet={thumbnail.regular.medium}
            width="440"
            height="280"
            media="(min-width: 768px)"
          />
          <img
            src={thumbnail.regular.small}
            alt={`${title} thumbnail`}
            width="328"
            height="220"
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
      <div className=" w-full bottom-0 left-0 mt-2 flex flex-col gap-y-2">
        <div className="movie-info md:text-[0.8125rem]">
          <p>{year}</p>•
          <p className="flex items-center gap-x-2">
            <img src="/assets/icon-category-movie.svg" alt="icon movie" />{" "}
            {category}
          </p>
          •<p>{rating}</p>
        </div>
        <h3 className="trending-title text-[0.875rem] md:text-[1.125rem] ">
          {title}
        </h3>
      </div>
      <button
        aria-label="Bookmark Beyond Earth "
        onClick={() => handleBookmarkClick()}
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

export default Thumbnail;
