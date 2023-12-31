import React from "react";

import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const airingToday = useSelector((store) => store?.tvShows?.airingToday);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const popularShows = useSelector((store) => store?.tvShows?.popularShows);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const topRatedShows = useSelector((store) => store?.tvShows?.topRatedShows);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const onTheAir = useSelector((store) => store?.tvShows?.onTheAir);
  if (
    !nowPlayingMovies ||
    !airingToday ||
    !popularMovies ||
    !popularShows ||
    !topRatedMovies ||
    !topRatedShows ||
    !upcomingMovies ||
    !onTheAir
  )
    return;
  const trendingList = [...nowPlayingMovies, ...airingToday].sort(
    () => Math.random() - 0.5
  );
  const popularList = [...popularMovies, ...popularShows].sort(
    () => Math.random() - 0.5
  );
  const topRatedList = [...topRatedMovies, ...topRatedShows].sort(
    () => Math.random() - 0.5
  );
  const upcomingList = [...upcomingMovies, ...onTheAir].sort(
    () => Math.random() - 0.5
  );
  return (
    <div className="pl-12 -mt-56 relative z-20">
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Trending on Netfilx</p>
        <MovieList moviesList={trendingList} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Popular on Netfilx</p>
        <MovieList moviesList={popularList} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">
          Top Rated on Netfilx
        </p>
        <MovieList moviesList={topRatedList} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Upcoming on Netfilx</p>
        <MovieList moviesList={upcomingList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
