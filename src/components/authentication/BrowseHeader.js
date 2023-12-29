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

  const LogoutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-full flex justify-between px-4 py-2 signBg2">
      <div className="px-5">
        <img className="w-[120px]" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="flex justify-end px-4">
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
            className="cursor-pointer w-8 h-8 rounded-md"
            alt="prfImg"
            src={user?.photoURL}
          />
          <p className="cursor-pointer text-lg">{toggle ? "🔻" : "🔺"}</p>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } py-4 bg-slate-800 absolute top-14 right-5 mx-4 my-2 min-w-[140px] rounded-sm sidebar `}
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
    </div>
  );
};

export default BrowseHeader;
