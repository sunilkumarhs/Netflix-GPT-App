import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

const VedioDetails = ({ title, overview }) => {
  return (
    <div className="px-12 pt-44">
      <h1 className="text-4xl font-bold text-slate-500">{title}</h1>
      <p className="font-semibold w-[35%] py-3">{overview}</p>
      <div className="py-4 flex">
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
  );
};

export default VedioDetails;
