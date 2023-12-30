import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
