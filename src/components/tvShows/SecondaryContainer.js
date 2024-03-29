import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const airingToday = useSelector((store) => store?.tvShows?.airingToday);
  const onTheAir = useSelector((store) => store?.tvShows?.onTheAir);
  const popularShows = useSelector((store) => store?.tvShows?.popularShows);
  const topRatedShows = useSelector((store) => store?.tvShows?.topRatedShows);
  return (
    <div className="lg:-mt-56 -mt-36 relative z-20">
      <div className="lg:py-3 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Airing Today
        </p>
        <MovieList moviesList={airingToday} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          On The Air
        </p>
        <MovieList moviesList={onTheAir} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Popular Shows
        </p>
        <MovieList moviesList={popularShows} />
      </div>
      <div className="lg:py-5 py-1">
        <p className="lg:text-2xl text-xl font-semibold text-white lg:pl-12 pl-4">
          Top Rated Shows
        </p>
        <MovieList moviesList={topRatedShows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
