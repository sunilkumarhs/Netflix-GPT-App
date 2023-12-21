import React from "react";
import Header from "./Header";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="absolute text-center w-full mt-72">
        <h1 className="text-white text-5xl font-bold m-1 py-1">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-3xl font-semibold m-1 py-4">
          Watch anywhere. Cancle anytime.
        </p>
        <p className="text-white text-2xl font-semibold m-1">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="m-1 py-3 flex justify-center">
          <input
            placeholder="Email address"
            className=" text-white bg-transparent from-black text-l px-4 py-4 mx-2 rounded-md w-2/6"
          />
          <button className="bg-red-600 text-2xl font-bold text-white px-8 py-3 rounded-md">
            Get Started {">"}
          </button>
        </div>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
    </div>
  );
};

export default SignUp;
