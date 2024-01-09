import React from "react";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between absolute md:px-16 lg:px-28 py-1 bg-black md:bg-transparent">
      <div className="md:px-4 px-2 py-2 md:py-0">
        <img className="w-32 md:w-48" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="flex justify-end md:px-10 px-1">
        <select className="bg-black text-white md:text-l  text-sm rounded-md md:px-5 px-1 py-1 md:my-7 my-5 mx-3 md:mx-6 border-2 broder-white">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button
          className="bg-red-500 rounded-md text-sm md:my-7 md:px-4 my-5 px-1 mx-1 font-semibold text-white"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
