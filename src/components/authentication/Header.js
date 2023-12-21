import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between absolute  bg-gradient-to-b from-black px-28 py-1">
      <div className="px-6">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <div className="flex justify-end px-10">
        <select className="bg-black text-white text-l rounded-md px-5 py-1 my-7 mx-6 border-2 broder-white">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button className="bg-red-500 rounded-md text-sm my-7 px-4 font-semibold text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
