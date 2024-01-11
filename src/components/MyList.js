import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";

const MyList = () => {
  const list = useSelector((store) => store?.list?.myList);
  return (
    <div className="bg-slate-800 w-screen h-screen">
      <BrowseHeader />
      <div className=" px-4 xl:py-[6%] py-[15%]">
        <p className="text-4xl text-white">My List</p>
      </div>
      <div className=" bg-slate-800 w-screen">
        <div className="lg:px-1 xl:mx-16 mx-6 flex flex-wrap">
          {list?.map((item, index) => (
            <MovieCards key={index} movieDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
