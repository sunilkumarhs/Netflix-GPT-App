import React, { useRef, useState } from "react";
import MovieCards from "./MovieCards";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const MovieList = ({ moviesList }) => {
  const ref1 = useRef(null);
  const [scrollvalue, setScrollValue] = useState(0);
  const [mouseState, setMouseState] = useState(false);
  const scrollOffers = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollValue(ref1.current.scrollLeft);
  };
  const mouseIn = () => {
    setMouseState(true);
  };
  const mouseOut = () => {
    setMouseState(false);
  };
  return (
    <div>
      {mouseState && scrollvalue > 0 ? (
        <div
          className="lg:block hidden signInput absolute left-0 mt-2 py-20"
          onMouseOver={mouseIn}
        >
          <button onClick={() => scrollOffers(-1000)}>
            <IoIosArrowBack className="text-white text-8xl" />
          </button>
        </div>
      ) : (
        ""
      )}
      {mouseState ? (
        <div
          className="lg:block hidden signInput absolute right-0 mt-2 py-20 px-2"
          onMouseOver={mouseIn}
        >
          <button className="" onClick={() => scrollOffers(1000)}>
            <IoIosArrowForward className="text-white text-8xl" />
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="flex overflow-x-scroll no-scrollbar cursor-pointer"
        ref={ref1}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
      >
        {moviesList?.map((movie) => (
          <MovieCards key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
