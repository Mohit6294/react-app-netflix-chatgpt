import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
          <MovieList movies={movies.topRatedMovies} title={"Top Rated Movies"} />
          <MovieList
            movies={movies.nowPlayingMovies}
            title={"Upcoming Movies"}
          />
          <MovieList movies={movies.popularMovies} title={"Popular Movies"} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
