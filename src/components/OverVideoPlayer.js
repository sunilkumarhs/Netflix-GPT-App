import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const OverVideoPlayer = ({ movieInfo }) => {
  const movieGenere = useSelector((store) => store?.movies?.movieGeneres);
  const tvGenere = useSelector((store) => store?.tvShows?.tvGeneres);
  const [trailerVideo, setTrailerVideo] = useState(null);

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" +
        movieInfo?.media_type +
        "/" +
        movieInfo?.id +
        "/videos?",
      API_OPTIONS
    );
    if (data.status === 404) return;

    const jsonData = await data.json();
    const filterData = jsonData?.results?.filter(
      (vedio) => vedio?.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : jsonData?.results[0];
    setTrailerVideo(trailer);
  };

  //   useEffect(() => {
  //     getTrailerVideo();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const generes =
  //     movieInfo?.media_type === "tv"
  //       ? movieInfo?.genre_ids?.filter((id) =>
  //           tvGenere?.genres?.filter((gid) => gid.id === id)
  //         )
  //       : movieInfo?.genre_ids?.filter((id) =>
  //           movieGenere?.genres?.filter((gid) => gid.id === id)
  //         );
  const generes =
    movieInfo?.media_type === "tv"
      ? tvGenere?.genres?.filter((gid) => movieInfo?.genre_ids.includes(gid.id))
      : movieGenere?.genres?.filter((gid) =>
          movieInfo?.genre_ids.includes(gid.id)
        );
  console.log(generes);

  return (
    <div className={`hover:block w-60 h-60 -mt-72 relative z-20 bg-black`}>
      <div className="w-60 h-40">
        <iframe
          className="w-full h-full"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&showinfo=0&modestbranding=1&autohide=1&autoplay=1&mute=1&rel=0&controls=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div></div>
    </div>
  );
};

export default OverVideoPlayer;
