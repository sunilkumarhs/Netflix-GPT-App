import React from "react";
import BrowseHeader from "../authentication/BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAiringToday from "../../hooks/tvShowsHooks/useAiringToday";
import useOnTheAir from "../../hooks/tvShowsHooks/useOnTheAir";
import usePopularShows from "../../hooks/tvShowsHooks/usePopularShows";
import useTopRatedShows from "../../hooks/tvShowsHooks/useTopRatedShows";

const TVShows = () => {
  useAiringToday();
  useOnTheAir();
  usePopularShows();
  useTopRatedShows();
  return (
    <div className=" bg-black">
      <BrowseHeader />
      <div className=" relative overflow-hidden">
        <MainContainer />
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default TVShows;
