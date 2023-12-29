import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <BrowseHeader />
      <p>Browse</p>
    </div>
  );
};

export default Browse;
