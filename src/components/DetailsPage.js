import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { useLocation } from "react-router-dom";
import { IMG_PATH } from "../utils/constants";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
const DetailsPage = () => {
  const movieDetail = useLocation();
  const movieGenere = useSelector((store) => store?.movies?.movieGeneres);
  const tvGenere = useSelector((store) => store?.tvShows?.tvGeneres);
  const movie = movieDetail?.state;
  console.log(movieDetail.state);
  const type = Object.hasOwn(movie, "original_name") ? "tv" : "movie";

  const generes =
    type === "tv"
      ? tvGenere?.genres?.filter((gid) => movie?.genre_ids.includes(gid.id))
      : movieGenere?.genres?.filter((gid) => movie?.genre_ids.includes(gid.id));
  return (
    <div className="bg-slate-800 overflow-x-hidden">
      <BrowseHeader />
      <div className=" w-full absolute aspect-video signInput flex justify-center pt-[10%]">
        <div className="w-1/4 h-[25rem] m-4">
          <img
            className="rounded-md h-full w-full"
            alt="movieImage"
            src={IMG_PATH + movie?.poster_path}
          />
        </div>
        <div className="py-6 px-2 w-1/3 ">
          <h1 className="text-white text-4xl font-bold py-4">
            {movie?.original_title || movie?.original_name}
          </h1>
          <div className="flex">
            {generes?.map((gen, index) => (
              <button
                key={index}
                className="px-2 mr-4 py-1 text-white text-sm flex bg-slate-700 rounded-md"
              >
                <GoDotFill className="text-slate-400 mt-1" />
                {gen.name}
              </button>
            ))}
          </div>
          <p className="font-semibold py-5 text-white">{movie?.overview}</p>
        </div>
      </div>
      <div className="w-screen aspect-video">
        <img
          className="rounded-md h-full w-full"
          alt="movieImage"
          src={IMG_PATH + movie?.backdrop_path}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
