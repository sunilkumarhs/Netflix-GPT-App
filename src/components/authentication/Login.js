import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/UserSlice";
import { BgImage, NetflixLogo } from "../../utils/constants";

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
    <div className="m-0 min-h-full p-0 relative z-0">
      <div className="overflow-hidden absolute min-h-[100vh] w-full -z-10 block">
        <img src={BgImage} alt="bg-img" className="h-[1080px] min-w-full " />
        <div className="absolute top-0 right-0 bottom-0 left-0 signBg1">
          <div className="absolute top-0 right-0 bottom-0 left-0 signBg2">
            <div className="w-full flex">
              <div className="px-4">
                <img className="w-56" src={NetflixLogo} alt="logo" />
              </div>
            </div>
            <form className="text-center" onSubmit={(e) => e.preventDefault()}>
              <div className="signInput mx-[405px] p-[4rem]">
                <h1 className="text-4xl font-semibold text-white text-left">
                  Sign In
                </h1>
                <div className="text-left py-6">
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
                  <div className="py-12">
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
            <div className="pt-20">
              <div className="signInput w-full">
                <div className="pl-40 py-6 pr-72">
                  <p className="text-slate-400 text-l">
                    Questions? Call 000-800-919-1694
                  </p>
                  <div className="flex flex-wrap py-8">
                    <p className="text-slate-400 text-sm pr-52 pb-3">FAQ</p>
                    <p className="text-slate-400 text-sm pr-48">HelpCentre</p>
                    <p className="text-slate-400 text-sm pr-48">Terms of Use</p>
                    <p className="text-slate-400 text-sm">Privacy</p>
                    <p className="text-slate-400 text-sm pr-28">
                      Cookie Preferences
                    </p>
                    <p className="text-slate-400 text-sm">
                      Corporate Information
                    </p>
                  </div>
                  <select className="mb-10 py-2 px-5 bg-black text-white border-[1px] border-gray-300">
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
