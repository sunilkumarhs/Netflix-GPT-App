import React from "react";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  return (
    <div className="pl-12 -mt-56 relative z-20">
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Now Playing Movies</p>
        <MovieList moviesList={nowPlayingMovies} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Popular Movies</p>
        <MovieList moviesList={popularMovies} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Top Rated Movies</p>
        <MovieList moviesList={topRatedMovies} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Upcoming Movies</p>
        <MovieList moviesList={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
