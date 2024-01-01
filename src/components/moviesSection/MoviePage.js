import React from "react";
import BrowseHeader from "../authentication/BrowseHeader";
import useNowPlayingMovies from "../../hooks/browseHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/browseHooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/browseHooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/browseHooks/useUpcomingMovies";

const MoviePage = () => {
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

export default MoviePage;
