import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const airingToday = useSelector((store) => store?.tvShows?.airingToday);
  const onTheAir = useSelector((store) => store?.tvShows?.onTheAir);
  const popularShows = useSelector((store) => store?.tvShows?.popularShows);
  const topRatedShows = useSelector((store) => store?.tvShows?.topRatedShows);
  return (
    <div className="pl-12 -mt-56 relative z-20">
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Airing Today</p>
        <MovieList moviesList={airingToday} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">On The Air</p>
        <MovieList moviesList={onTheAir} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Popular Shows</p>
        <MovieList moviesList={popularShows} />
      </div>
      <div className="py-3">
        <p className="text-2xl font-semibold text-white">Top Rated Shows</p>
        <MovieList moviesList={topRatedShows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
