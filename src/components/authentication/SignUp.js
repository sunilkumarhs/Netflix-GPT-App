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
      <div className="relative overflow-hidden w-full h-full">
        <img
          src={BG_IMAGE}
          alt="bg-img"
          className="w-full h-full object-cover overflow-clip"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 signBg1">
          <div className="absolute top-0 right-0 bottom-0 left-0 signBg2">
            <Header />
            <div className=" text-center w-full mt-72">
              <h1 className="text-white text-5xl font-bold m-1 py-1">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-white text-3xl font-semibold m-1 py-4">
                Watch anywhere. Cancle anytime.
              </p>
              <p className="text-white text-2xl font-semibold m-1">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="py-3">
                <div className="m-1 flex justify-center">
                  <input
                    ref={eMail}
                    placeholder="Email address"
                    id="mailId"
                    type="email"
                    className=" text-white signInput bg-transparent text-l px-4 py-4 mx-2 rounded-md w-2/6 border-[1px] border-white"
                  />
                  <button
                    className="bg-red-600 text-2xl font-bold text-white px-8 py-3 rounded-md"
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
