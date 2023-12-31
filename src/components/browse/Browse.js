import React from "react";
import BrowseHeader from "../authentication/BrowseHeader";
import useNowPlayingMovies from "../../hooks/browseHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/browseHooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/browseHooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/browseHooks/useUpcomingMovies";
import useAiringToday from "../../hooks/tvShowsHooks/useAiringToday";
import usePopularShows from "../../hooks/tvShowsHooks/usePopularShows";
import useTopRatedShows from "../../hooks/tvShowsHooks/useTopRatedShows";
import useOnTheAir from "../../hooks/tvShowsHooks/useOnTheAir";

const Browse = () => {
  useNowPlayingMovies();
  useAiringToday();
  usePopularMovies();
  usePopularShows();
  useTopRatedMovies();
  useTopRatedShows();
  useUpcomingMovies();
  useOnTheAir();
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
