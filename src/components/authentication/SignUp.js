import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkSignUpEmailValidData } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { BG_IMAGE } from "../../utils/constants";

const SignUp = () => {
  const eMail = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const signUpUser = () => {
    const res = checkSignUpEmailValidData(eMail.current.value);
    if (res !== null || eMail.current.value.length === 0) eMail.current.focus();
    setErrorMessage(res);
    if (res === null) navigate("/signUpForm/" + eMail.current.value);
  };

  return (
    <div>
      <div className="relative overflow-hidden w-full md:h-full h-screen">
        <img
          src={BG_IMAGE}
          alt="bg-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 signBg1">
          <div className="absolute top-0 right-0 bottom-0 left-0 signBg2">
            <Header />
            <div className=" text-center w-full md:mt-72 mt-52 px-1">
              <h1 className="text-white md:text-5xl text-3xl font-bold m-1 py-1">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-white md:text-3xl text-lg font-semibold m-1 py-4">
                Watch anywhere. Cancle anytime.
              </p>
              <p className="text-white md:text-2xl text-sm font-semibold m-1">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="py-3">
                <div className="m-1 md:flex justify-center">
                  <input
                    ref={eMail}
                    placeholder="Email address"
                    id="mailId"
                    type="email"
                    className=" text-white signInput bg-transparent text-l px-4 py-4 md:mx-2 rounded-md md:w-2/6 w-full border-[1px] border-white md:my-0 my-4"
                  />
                  <button
                    className="bg-red-600 md:text-2xl text-lg font-bold text-white md:px-8 px-4 py-3 rounded-md"
                    onClick={signUpUser}
                  >
                    Get Started {">"}
                  </button>
                </div>
                <p className="text-red-600 text-left ml-[20rem] font-bold">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
