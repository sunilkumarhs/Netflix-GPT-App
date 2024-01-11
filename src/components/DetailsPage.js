import React, { useEffect, useState } from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { useLocation } from "react-router-dom";
import { API_OPTIONS, IMG_PATH } from "../utils/constants";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import MovieCards from "./MovieCards";
const DetailsPage = () => {
  const movieDetail = useLocation();
  const movieGenere = useSelector((store) => store?.movies?.movieGeneres);
  const tvGenere = useSelector((store) => store?.tvShows?.tvGeneres);
  const [movieShows, setMovieShows] = useState(null);
  const movie = movieDetail?.state;
  const type = Object.hasOwn(movie, "original_name") ? "tv" : "movie";

  const generes =
    type === "tv"
      ? tvGenere?.genres?.filter((gid) => movie?.genre_ids.includes(gid.id))
      : movieGenere?.genres?.filter((gid) => movie?.genre_ids.includes(gid.id));

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie?.id +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    setMovieShows(jsonData?.results);
  };
  const getSimilarShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/" +
        movie?.id +
        "/similar?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    setMovieShows(jsonData?.results);
  };

  useEffect(() => {
    type === "tv" ? getSimilarShows() : getSimilarMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" bg-slate-800 relative overflow-x-hidden">
      <BrowseHeader />
      <div className=" w-full absolute xl:aspect-video h-screen signInput  xl:pt-[10%] pt-[15%]">
        <div className="flex justify-center">
          <div className="xl:w-1/4 xl:h-[25rem] w-1/3 h-[15rem] m-4">
            <img
              className="rounded-md h-full w-full"
              alt="movieImage"
              src={IMG_PATH + movie?.poster_path}
            />
          </div>
          <div className="py-2 px-2 xl:w-1/3 w-1/2 ">
            <h1 className="text-white xl:text-4xl text-xl font-bold xl:pb-4 pb-2 ">
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
            <p className="font-semibold xl:py-5 py-2 xl:text-lg text-sm text-white">
              {movie?.overview}
            </p>
            <div className="flex">
              <p className="xl:text-2xl text-xl text-white px-2 ">
                {movie?.vote_average.toFixed(1)}
              </p>
              <IoStar
                className={`xl:text-3xl text-2xl ${
                  movie?.vote_average >= 7
                    ? "text-green-600"
                    : "text-orange-400"
                }`}
              />
            </div>
            <div className="flex xl:py-6 py-3">
              <FaPlayCircle className="text-white xl:text-5xl text-3xl mx-2" />{" "}
              <IoMdAddCircleOutline className="text-white xl:text-5xl text-3xl mx-2" />{" "}
              <BiSolidLike className="text-white xl:text-5xl text-3xl mx-2" />
            </div>
          </div>
        </div>
        <div className="lg:px-1 py-10 xl:mx-16 mx-6 flex flex-wrap">
          {movieShows?.map((movieShow, index) => (
            <MovieCards key={index} movieDetails={movieShow} />
          ))}
        </div>
      </div>

      <div className="w-screen xl:aspect-video h-screen">
        <img
          className="h-full w-full"
          alt="movieImage"
          src={IMG_PATH + movie?.backdrop_path}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
