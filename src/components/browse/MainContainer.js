import React from "react";
import VideoDetails from "../VideoDetails";
import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground";
// import MovieList from "./MovieList";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { id, original_title, overview } = movies[0];
  return (
    <div>
      <VideoDetails title={original_title} overview={overview} />
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