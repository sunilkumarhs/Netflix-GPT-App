import React from "react";
import VedioDetails from "./VedioDetails";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  //   console.log(movies[0]);
  const { id, original_title, overview } = movies[0];
  return (
    <div>
      <VedioDetails title={original_title} overview={overview} />
      <VedioBackground id={id} />
    </div>
  );
};

export default MainContainer;
