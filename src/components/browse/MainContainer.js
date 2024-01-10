import React, { useEffect, useState } from "react";
import VideoDetails from "../VideoDetails";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
// import MovieList from "./MovieList";

const MainContainer = () => {
  const trend = useSelector((store) => store.movies?.trending);
  console.log(trend);
  //
  // const displayList = [...trend].sort(() =>
  //   Math.round(Math.random() * trend.length)
  // );
  // useEffect(() => {

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  if (!trend) return;
  const num = Math.round(Math.random() * trend?.length);
  console.log(num);
  const { id, overview } = trend[num];
  console.log(trend[num]);

  return (
    <div>
      <VideoDetails title={num} overview={overview} />
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
