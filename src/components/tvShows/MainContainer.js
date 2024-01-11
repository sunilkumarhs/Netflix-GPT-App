import React from "react";
import { useSelector } from "react-redux";
import VideoDetails from "../VideoDetails";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const tvShows = useSelector((store) => store?.tvShows?.popularShows);
  if (!tvShows) return;
  const displayShow = [...tvShows].sort(() => Math.random() - 0.5);
  const { id, name, overview } = displayShow[0];
  return (
    <div>
      <VideoDetails title={name} overview={overview} />
      <VideoBackground id={id} />
      {/* <div className="absolute w-screen aspect-video browseBg1">
          <VideoDetails title={original_title} overview={overview} />
          <div className="px-11 pt-[33rem]">
            <p className="px-1 text-2xl font-semibold text-white">
              Now Playing Movies
            </p>
            <MovieList moviesList={movies} />
          </div>
        </div> */}
    </div>
  );
};

export default MainContainer;
