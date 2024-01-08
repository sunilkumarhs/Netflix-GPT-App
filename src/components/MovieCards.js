import React from "react";
import { IMG_PATH } from "../utils/constants";

const MovieCards = ({ movieDetails }) => {
  const poster = movieDetails?.poster_path;
  if (!poster) return;
  return (
    <div className="py-2 px-1">
      <div className="py-1 w-[200px] h-[15rem]">
        <img
          className="rounded-md h-full w-full"
          alt="movieImage"
          src={IMG_PATH + poster}
        />
      </div>
    </div>
  );
};

export default MovieCards;
