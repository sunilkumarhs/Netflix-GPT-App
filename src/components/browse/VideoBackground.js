import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../../hooks/browseHooks/useVideoTrailer";

const VideoBackground = ({ id }) => {
  useVideoTrailer(id);
  const trailerVideo = useSelector(
    (store) => store?.movies?.trailerVideo?.trailer?.key
  );

  return (
    <div className="w-screen lg:aspect-video lg:h-auto h-[25rem]">
      <iframe
        className="w-full  h-full"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo +
          "?&showinfo=0&modestbranding=1&autohide=1&autoplay=1&mute=1&rel=0&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
