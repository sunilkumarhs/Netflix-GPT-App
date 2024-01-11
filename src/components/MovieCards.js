import React, { useState } from "react";
import { IMG_PATH } from "../utils/constants";
import OverVideoPlayer from "./OverVideoPlayer";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ movieDetails }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const poster = movieDetails?.poster_path;
  if (!poster) return;
  return (
    <div
      className="lg:py-2 py-1 px-1"
      onMouseOver={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div
        className="py-2 lg:w-[210px] lg:h-[15rem] w-[100px] h-[8rem]"
        onClick={() => navigate("/detailsPage", { state: movieDetails })}
      >
        <img
          className="rounded-md h-full w-full"
          alt="movieImage"
          src={IMG_PATH + poster}
        />
      </div>
      {toggle ? (
        <OverVideoPlayer key={movieDetails.id} movieInfo={movieDetails} />
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieCards;
