import React from "react";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between absolute px-28 py-1">
      <div className="px-6">
        <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="flex justify-end px-10">
        <select className="bg-black text-white text-l rounded-md px-5 py-1 my-7 mx-6 border-2 broder-white">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button
          className="bg-red-500 rounded-md text-sm my-7 px-4 font-semibold text-white"
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
