import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { addToList } from "../utils/redux/myListSlice";
import { MdLibraryAddCheck } from "react-icons/md";

const OverVideoPlayer = ({ movieInfo }) => {
  const movieGenere = useSelector((store) => store?.movies?.movieGeneres);
  const tvGenere = useSelector((store) => store?.tvShows?.tvGeneres);
  const list = useSelector((store) =>
    store?.list?.myList.map((list) => list.id)
  );
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const type = Object.hasOwn(movieInfo, "original_name") ? "tv" : "movie";
  const mark = list.includes(movieInfo?.id);

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/" + type + "/" + movieInfo?.id + "/videos?",
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

  useEffect(() => {
    getTrailerVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generes =
    type === "tv"
      ? tvGenere?.genres?.filter((gid) => movieInfo?.genre_ids.includes(gid.id))
      : movieGenere?.genres?.filter((gid) =>
          movieInfo?.genre_ids.includes(gid.id)
        );

  return (
    <div className={`xl:block hidden -ml-10 -mt-64 relative `}>
      <div className="w-[25rem] h-[16rem] absolute z-10 bg-black">
        <div className="w-[25rem] h-[11rem]">
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
        <hr className="text-slate-300" />
        <div className="">
          <p
            className={`${
              toggle ? "block" : "hidden"
            } border-2 border-slate-500 right-0 -mt-4 absolute z-10 bg-white text-slate-800`}
          >
            More Info?
          </p>
          <div className="flex justify-between py-2 px-3">
            <div className="flex">
              <FaPlayCircle className="text-white text-5xl mx-2" />
              {mark ? (
                <MdLibraryAddCheck className="text-white text-5xl mx-2" />
              ) : (
                <IoMdAddCircleOutline
                  className="text-white text-5xl mx-2"
                  onClick={() => dispatch(addToList(movieInfo))}
                />
              )}
              <BiSolidLike className="text-white text-5xl mx-2" />
            </div>
            <div className="text-center">
              <IoIosArrowDropdown
                className="text-white text-5xl cursor-pointer"
                onMouseOver={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
                onClick={() => navigate("/detailsPage", { state: movieInfo })}
              />
            </div>
          </div>
          <div className="flex">
            {generes?.map((gen, index) => (
              <p key={index} className="px-2 text-white text-sm flex">
                <GoDotFill className="text-slate-400 mt-1" />
                {gen.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverVideoPlayer;
