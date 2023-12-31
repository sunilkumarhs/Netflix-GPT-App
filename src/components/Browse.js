import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <BrowseHeader />
      <div className=" relative overflow-hidden">
        <MainContainer />
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
