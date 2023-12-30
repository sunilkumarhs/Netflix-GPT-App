import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ id }) => {
  useVideoTrailer(id);
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo?.trailer?.key
  );

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
