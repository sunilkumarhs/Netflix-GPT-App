import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkSignUpPasswordValidData } from "../../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/UserSlice";
import { NETFLIX_LOGO, USER_PRF_IMG } from "../../utils/constants";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const password = useRef(null);
  const { mailId } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [nameError, setNameError] = useState(null);
  const navigate = useNavigate();

  const signUpUser = () => {
    const res = checkSignUpPasswordValidData(password.current.value);
    if (res !== null || password.current.value.length === 0)
      password.current.focus();
    setErrorMessage(res);
    if (name.current.value.length < 4) {
      name.current.focus();
      setNameError("Enter proper name!!");
    } else {
      setNameError(null);
    }
    if (res) return;
    createUserWithEmailAndPassword(auth, mailId, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_PRF_IMG,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            navigate("/error");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div>
      <div className="w-full flex justify-between">
        <div className="md:px-4 px-2">
          <img className="md:w-52 w-32" src={NETFLIX_LOGO} alt="logo" />
        </div>
        <div className="md:px-12 md:py-7 px-3 py-2">
          <p
            className="text-xl font-bold cursor-pointer hover:border-[1px] border-red-600 px-2 py-1 "
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </p>
        </div>
      </div>
      <hr />
      <div className="m-2 lg:py-10 md:py-20 py-12 lg:px-[26rem] px-2 md:px-10">
        <h1 className="md:text-3xl text-xl font-bold py-2">
          Create a password to start your membership
        </h1>
        <div className="py-2">
          <p className="md:text-xl text-sm">
            Just a few more steps and you're done!
          </p>
          <p className="md:text-xl text-sm">We hate paperwork, too.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            readOnly
            placeholder="Emial"
            value={mailId}
            type="email"
            className="w-full border-[1px] border-slate-700 rounded-md px-4 py-3 my-2"
          />
          <input
            ref={name}
            placeholder="Name"
            type="text"
            className="w-full border-[1px] border-slate-700 rounded-md px-4 py-3 my-2"
          />
          <p className="text-red-600">{nameError}</p>
          <input
            ref={password}
            placeholder="Add a password"
            type="password"
            className="w-full border-[1px] border-slate-700 rounded-md px-4 py-3 my-2"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="w-full py-3 bg-red-600 rounded-md text-white text-xl my-5"
            onClick={signUpUser}
          >
            SignUp
          </button>
        </form>
      </div>
      <div className="md:pt-20 pt-10">
        <div className="bg-slate-200 w-full">
          <div className="lg:pl-24 md:py-6 lg:pr-72 md:pl-12 md:pr-12 pl-4 py-2">
            <p className="text-slate-400 text-l">
              Questions? Call 000-800-919-1694
            </p>
            <div className="flex flex-wrap md:py-8 py-4">
              <p className="text-slate-400 text-sm md:pr-52 pr-20 pb-3">FAQ</p>
              <p className="text-slate-400 text-sm md:pr-48 pr-20">
                HelpCentre
              </p>
              <p className="text-slate-400 text-sm lg:pr-48 md:pr-10">
                Terms of Use
              </p>
              <p className="text-slate-400 text-sm lg:pr-0 md:pr-44 pr-12">
                Privacy
              </p>
              <p className="text-slate-400 text-sm lg:pr-28 md:pr-32 pr-6">
                Cookie Preferences
              </p>
              <p className="text-slate-400 text-sm">Corporate Information</p>
            </div>
            <select className="mb-10 md:mb-9 md:mt-0 mt-4 py-2 px-5 bg-white text-black border-[1px] border-gray-300">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
