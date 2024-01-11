import React, { useRef } from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { useDispatch, useSelector } from "react-redux";
import { GPT_IMG } from "../utils/constants";
import lang from "../utils/languageConstants";
import useGptSearchResulte from "../hooks/useGptSearchResulte";
import MovieCards from "./MovieCards";

const GPTSearchPage = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.gptSearch);
  const searchTextRef = useRef(null);
  const { movieResults } = useSelector((store) => store?.gptMovies);

  const handleSearchOpenaiText = () => {
    const searchText1 = searchTextRef.current.value;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGptSearchResulte(searchText1, dispatch);
  };

  return (
    <div className="bg-black">
      <BrowseHeader />
      <div className="w-sreen lg:h-auto lg:aspect-video h-screen">
        <img className="w-full h-full" alt="gptimage" src={GPT_IMG} />
      </div>
      <div className="lg:-mt-[38rem] -mt-[40rem] text-center relative z-20 lg:px-[24rem] px-4">
        <form
          className="signInput py-3 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl text-zinc-300 font-bold">
            {lang[langKey].title}
          </h1>
          <div className="py-8 lg:px-0 px-4">
            <input
              ref={searchTextRef}
              placeholder={lang[langKey].searchPlaceHolder}
              className="py-2 px-3 rounded-xl lg:w-4/6 w-full"
            />
            <button
              className="bg-red-600 text-white py-2 px-3 rounded-xl lg:ml-6 lg:my-0 my-4 hover:bg-red-500 font-semibold"
              onClick={handleSearchOpenaiText}
            >
              {lang[langKey].search}
            </button>
          </div>
        </form>
      </div>
      <div className="px-1 pb-10 xl:mx-16 mx-6 pt-16 flex flex-wrap">
        {movieResults?.map((movie, index) => (
          <MovieCards key={index} movieDetails={movie[0]} />
        ))}
      </div>
    </div>
  );
};

export default GPTSearchPage;
