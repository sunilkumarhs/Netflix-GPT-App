import React from "react";

import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const trendingList = useSelector((store) => store.movies?.trending);
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
  const playingToday = [...nowPlayingMovies, ...airingToday].sort(
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
    <div className=" lg:-mt-56 -mt-36 relative z-20">
      <div className="lg:py-3 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Trending on Netfilx
        </p>
        <MovieList moviesList={trendingList} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          PlayingToday on Netfilx
        </p>
        <MovieList moviesList={playingToday} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Popular on Netfilx
        </p>
        <MovieList moviesList={popularList} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Top Rated on Netfilx
        </p>
        <MovieList moviesList={topRatedList} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Upcoming on Netfilx
        </p>
        <MovieList moviesList={upcomingList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
