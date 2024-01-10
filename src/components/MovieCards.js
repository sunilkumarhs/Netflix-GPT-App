import React, { useState } from "react";
import { IMG_PATH } from "../utils/constants";
import OverVideoPlayer from "./OverVideoPlayer";

const MovieCards = ({ movieDetails }) => {
  const poster = movieDetails?.poster_path;
  const [toggle, setToggle] = useState(false);
  if (!poster) return;
  return (
    <div
      className="lg:py-2 py-1 px-1"
      onMouseOver={() => setTimeout(setToggle(true), 3000)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className="py-1 lg:w-[210px] lg:h-[15rem] w-[100px] h-[8rem]">
        <img
          className="rounded-md h-full w-full"
          alt="movieImage"
          src={IMG_PATH + poster}
        />
      </div>
      {toggle ? <OverVideoPlayer movieInfo={movieDetails} /> : ""}
    </div>
  );
};

export default MovieCards;
