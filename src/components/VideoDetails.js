import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoDetails = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video browseBg1">
      <div className="pl-12 pt-[10%]">
        <h1 className="text-5xl font-bold text-slate-300">{title}</h1>
        <p className="font-semibold w-[30%] h-44 py-3 text-white overflow-y-hidden text-ellipsis">
          {overview}
        </p>
        <div className="pt-8 flex">
          <button className="flex bg-red-500 hover:bg-red-400 rounded-md px-5 py-2">
            <FaPlay className="text-3xl text-white" />
            <span className="pl-2 text-xl text-white">Play</span>
          </button>
          <button className="flex bg-stone-500 hover:bg-stone-400 rounded-md px-5 py-2 mx-8">
            <IoInformationCircleOutline className="text-3xl text-white" />
            <span className="pl-2 text-xl text-white">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
