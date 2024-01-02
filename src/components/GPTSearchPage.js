import React, { useEffect, useState } from "react";
import BrowseHeader from "./authentication/BrowseHeader";
import { gptSearchConst } from "../utils/gptConatans";
import { useSelector } from "react-redux";
import { GPT_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  const selectLang = useSelector((store) => store.gptSearch);
  const [title, setTitle] = useState(null);
  const [placeHolder, setPlaceHolder] = useState(null);
  const [searchBtn, setSearchBtn] = useState(null);
  useEffect(() => {
    if (selectLang === "en") {
      setTitle(gptSearchConst.content.title.title1);
      setPlaceHolder(gptSearchConst.content.searchBar.placeHolder.ph1);
      setSearchBtn(gptSearchConst.content.searchBar.button.b1);
    } else if (selectLang === "hindi") {
      setTitle(gptSearchConst.content.title.title2);
      setPlaceHolder(gptSearchConst.content.searchBar.placeHolder.ph2);
      setSearchBtn(gptSearchConst.content.searchBar.button.b2);
    } else if (selectLang === "kannada") {
      setTitle(gptSearchConst.content.title.title3);
      setPlaceHolder(gptSearchConst.content.searchBar.placeHolder.ph3);
      setSearchBtn(gptSearchConst.content.searchBar.button.b3);
    } else if (selectLang === "japanese") {
      setTitle(gptSearchConst.content.title.title4);
      setPlaceHolder(gptSearchConst.content.searchBar.placeHolder.ph4);
      setSearchBtn(gptSearchConst.content.searchBar.button.b4);
    }
  }, [selectLang]);

  return (
    <div className="">
      <BrowseHeader />
      <div className="w-sreen aspect-video">
        <img className="w-full h-full" alt="gptimage" src={GPT_IMG} />
      </div>
      <div className="-mt-[38rem] text-center relative z-20 px-[24rem]">
        <div className="signInput py-3 rounded-md">
          <h1 className="text-3xl text-zinc-300 font-bold">{title}</h1>
          <div className="py-8">
            <input
              placeholder={placeHolder}
              className="py-2 px-3 rounded-xl w-4/6"
            />
            <button className="bg-red-600 text-white py-2 px-3 rounded-xl ml-6 hover:bg-red-500 font-semibold">
              {searchBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
