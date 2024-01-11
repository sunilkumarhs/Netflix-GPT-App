import React from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";

const MyList = () => {
  const list = useSelector((store) => store?.list?.myList);
  return (
    <div className="bg-slate-800 w-screen h-screen">
      <BrowseHeader />
      <div className=" px-4 py-[6%]">
        <p className="text-4xl text-white">My List</p>
      </div>
      <div className="lg:px-1 xl:mx-16 mx-6 flex flex-wrap bg-slate-800">
        {list?.map((item, index) => (
          <MovieCards key={index} movieDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
