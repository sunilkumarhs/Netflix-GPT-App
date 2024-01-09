import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/redux/UserSlice";
import { BG_IMAGE, NETFLIX_LOGO } from "../../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInUser = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div>
      <div className="overflow-hidden absolute min-h-[100vh] w-full -z-10 block">
        <img
          src={BG_IMAGE}
          alt="bg-img"
          className="lg:h-[1080px] h-screen  min-w-full"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 signBg1">
          <div className="absolute top-0 right-0 bottom-0 left-0 signBg2">
            <div className="w-full flex">
              <div className="px-4">
                <img className="md:w-56 w-36" src={NETFLIX_LOGO} alt="logo" />
              </div>
            </div>
            <form
              className="text-center lg:my-0 my-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="signInput xl:mx-[405px] mx-2 md:mx-6 md:p-[4rem] p-8">
                <h1 className="md:text-4xl text-2xl font-semibold text-white text-left">
                  Sign In
                </h1>
                <div className="text-left md:py-6 py-3">
                  <input
                    ref={email}
                    placeholder="Email or phone number"
                    type="email"
                    className="text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm"
                  />
                  <input
                    ref={password}
                    placeholder="password"
                    type="password"
                    className="text-l text-white my-2 w-full py-3 px-6 bg-zinc-700 rounded-sm"
                  />
                  <p className="text-red-600 font-semibold">{errorMessage}</p>
                  <button
                    className="text-l w-full mt-6 font-semibold text-white bg-red-600 rounded-sm px-14 py-3"
                    onClick={signInUser}
                  >
                    Sign In
                  </button>

                  <div className="flex justify-between my-2">
                    <p className="text-gray-400 text-sm cursor-pointer">
                      Remember me
                    </p>
                    <p className="text-gray-400 text-sm cursor-pointer">
                      Need help?
                    </p>
                  </div>
                  <div className="md:py-12 py-6">
                    <p className="text-l text-slate-500">
                      New to Netflix?{" "}
                      <span
                        className="text-l text-white font-semibold cursor-pointer"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Sign up now
                      </span>
                    </p>
                    <p className="text-sm text-slate-400 py-3">
                      Sign in is protected by Google reCAPTCHA to ensure You're
                      not a bot.{" "}
                      <span className="text-blue-600 cursor-pointer">
                        Learn more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
            <div className="lg:pt-20 pt-6">
              <div className="signInput w-full">
                <div className="xl:pl-40 md:pl-12 lg:py-6 xl:pr-72 md:pr-12 pl-4 py-3 pr-4">
                  <p className="text-slate-400 text-l">
                    Questions? Call 000-800-919-1694
                  </p>
                  <div className="flex flex-wrap py-8">
                    <p className="text-slate-400 text-sm lg:pr-52  pr-20 pb-3">
                      FAQ
                    </p>
                    <p className="text-slate-400 text-sm lg:pr-48 pr-20">
                      HelpCentre
                    </p>
                    <p className="text-slate-400 text-sm lg:pr-48 md:pr-80">
                      Terms of Use
                    </p>
                    <p className="text-slate-400 text-sm lg:pr-0 md:pr-16 pr-12">
                      Privacy
                    </p>
                    <p className="text-slate-400 text-sm lg:pr-28 md:pr-8 pr-2">
                      Cookie Preferences
                    </p>
                    <p className="text-slate-400 text-sm">
                      Corporate Information
                    </p>
                  </div>
                  <select className="md:mb-10 mb-4 py-2 px-5 bg-black text-white border-[1px] border-gray-300">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
