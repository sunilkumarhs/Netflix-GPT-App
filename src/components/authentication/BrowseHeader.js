import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegBell } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import { TbTransferIn } from "react-icons/tb";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RiQuestionnaireLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/UserSlice";
import { useDispatch } from "react-redux";
import { CHLID_PRF_IMG, NETFLIX_LOGO } from "../../utils/constants";

const BrowseHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);

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
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LogoutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const changeNavBg = () => {
    window.scrollY > 150 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`w-full flex justify-between px-4 py-2 fixed z-[999] ${
        navBg ? "navBg2" : "navBg1"
      }`}
    >
      <div className="flex">
        <div className="px-6">
          <img className="w-[120px]" src={NETFLIX_LOGO} alt="logo" />
        </div>
        <div
          className="py-3 px-2 cursor-pointer"
          onClick={() => navigate("/browse")}
        >
          <p className="text-white">Home</p>
        </div>
        <div
          className="py-3 px-4 cursor-pointer"
          onClick={() => navigate("/tvShows")}
        >
          <p className="text-white">TV Shows</p>
        </div>
        <div className="py-3 px-4 cursor-pointer">
          <p className="text-white">Movies</p>
        </div>
        <div className="py-3 px-4 cursor-pointer">
          <p className="text-white">New & Popular</p>
        </div>
      </div>

      <div className="flex justify-end pl-20 pr-7">
        <div className="flex py-2">
          <p className="text-white font-semibold cursor-pointer py-1">
            Children
          </p>
          <div className="px-5 py-2">
            <FaRegBell className="text-xl text-white cursor-pointer" />
          </div>
        </div>
        <div
          className="flex flex-1 py-2 justify-end items-center"
          onMouseOver={() => setToggle(true)}
          onMouseOut={() => setToggle(false)}
        >
          <img
            className="cursor-pointer w-[34px] h-[34px] rounded-md"
            alt="prfImg"
            src={user?.photoURL}
          />
          <p className="cursor-pointer text-xl">{toggle ? "🔻" : "🔺"}</p>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } py-4 bg-slate-800 absolute top-14 right-5 mx-7 my-2 min-w-[140px] rounded-sm sidebar `}
          >
            <ul className="list-none flex flex-col justify-end flex-1 text-white">
              <li className="pl-3 pr-10">
                <div className="flex  py-2">
                  <img
                    className="w-8 h-8 rounded-lg"
                    alt="chimg"
                    src={CHLID_PRF_IMG}
                  />
                  <p className="font-semibold px-3 py-1">Children</p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex py-2 px-1">
                  <TiPencil className="text-3xl text-slate-300" />{" "}
                  <p className="px-3 text-sm">Manage Profiles</p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex px-1">
                  <TbTransferIn className="text-3xl text-slate-300" />{" "}
                  <p className="px-3 text-sm">Transfer Profile</p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex py-2 px-1">
                  <RiAccountPinCircleLine className="text-3xl text-slate-300" />{" "}
                  <p className="px-3 text-sm">Account</p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex pb-3 px-1">
                  <RiQuestionnaireLine className="text-3xl text-slate-300" />{" "}
                  <p className="px-3 text-sm">Help Centre</p>
                </div>
              </li>
              <hr className="py-1" />
              <li className="text-center">
                <p className="text-sm cursor-pointer" onClick={LogoutUser}>
                  Sign Out of Netflix
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BrowseHeader;
