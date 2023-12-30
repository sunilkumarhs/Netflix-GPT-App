import React from "react";
import VideoDetails from "./VideoDetails";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  //   console.log(movies[0]);
  const { id, original_title, overview } = movies[0];
  return (
    <div>
      <VideoDetails title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
