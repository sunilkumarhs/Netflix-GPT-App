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
import { addUser, removeUser } from "../../utils/redux/UserSlice";
import { useDispatch } from "react-redux";
import { CHLID_PRF_IMG, NETFLIX_LOGO } from "../../utils/constants";
import { FaSearchengin } from "react-icons/fa6";
import { gptSearchConst } from "../../utils/gptConatans";
import { addLang } from "../../utils/redux/gptSearchSlice";
import { MdLocalMovies } from "react-icons/md";
import { FiTv } from "react-icons/fi";
import { GiTv } from "react-icons/gi";

const BrowseHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [location, setLocation] = useState(null);
  const suported_lang = gptSearchConst.language;
  const setLang = useSelector((store) => store?.gptSearch);

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
    const path = window.location.href;
    if (path.includes("/browse")) {
      setLocation(1);
    } else if (path.includes("/tvShows")) {
      setLocation(2);
    } else if (path.includes("/movies")) {
      setLocation(3);
    } else if (path.includes("/gptSearch")) {
      setLocation(4);
    }else if (path.includes("/myList")) {
      setLocation(5);
    } else {
      setLocation(0);
    }
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const lang = e.target.value;
    dispatch(addLang(lang));
  };

  return (
    <nav
      className={`w-full flex justify-between md:px-4 md:py-2 fixed z-[999] ${
        navBg ? "navBg2" : "navBg1"
      }`}
    >
      <div className="px-2 lg:hidden flex">
        <div className="flex flex-1 py-2 justify-end items-center">
          <img
            className="cursor-pointer w-[34px] h-[34px] rounded-md"
            alt="prfImg"
            src={user?.photoURL}
            onClick={() => setToggle((prev) => !prev)}
          />
          <p className="cursor-pointer text-xl">{toggle ? "🔻" : "🔺"}</p>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } py-2 bg-slate-800 absolute top-12 left-0 mx-4 my-2 min-w-[140px] rounded-sm sidebar `}
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
              <hr className="py-1" />
              <li className="pl-3 pr-10">
                <div className="flex py-2 px-1">
                  <FiTv className="text-2xl text-slate-300" />{" "}
                  <p
                    className="px-4 text-sm"
                    onClick={() => navigate("/browse")}
                  >
                    Home
                  </p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex py-2 px-1">
                  <GiTv className="text-2xl text-slate-300" />{" "}
                  <p
                    className="px-4 text-sm"
                    onClick={() => navigate("/tvShows")}
                  >
                    TV Shows
                  </p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div className="flex py-2 px-1">
                  <MdLocalMovies className="text-2xl text-slate-300" />{" "}
                  <p
                    className="px-4 text-sm"
                    onClick={() => navigate("/movies")}
                  >
                    Movies
                  </p>
                </div>
              </li>
              <li className="pl-3 pr-10">
                <div
                  className="text-slate-300 flex py-2 px-1 font-semibold"
                  onClick={() => navigate("/gptSearch")}
                >
                  <FaSearchengin
                    className={`text-2xl ${location === 4 ? "text-white" : ""}`}
                  />{" "}
                  <span
                    className={`${location === 4 ? "text-white" : ""} px-4`}
                  >
                    Search In GPT
                  </span>
                </div>
              </li>
              {location === 4 ? (
                <li className="pl-4 pr-10">
                  <div className="pt-2 pb-4">
                    <select
                      className="rounded-md bg-slate-400 hover:bg-slate-300 hover:text-slate-500 text-white p-1 text-sm cursor-pointer"
                      name="setLanguage"
                      onChange={(e) => handleChange(e)}
                      value={setLang}
                    >
                      {suported_lang?.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              ) : (
                ""
              )}

              <hr className="py-1" />
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
        <img className="w-32" src={NETFLIX_LOGO} alt="logo" />
      </div>
      <div className="lg:flex hidden">
        <div className="px-6">
          <img className="w-[120px]" src={NETFLIX_LOGO} alt="logo" />
        </div>
        <div
          className="py-3 px-2 cursor-pointer text-slate-300 font-semibold hover:text-slate-400"
          onClick={() => navigate("/browse")}
        >
          <p className={`${location === 1 ? "text-white" : ""}`}>Home</p>
        </div>
        <div
          className="py-3 px-4 cursor-pointer text-slate-300 font-semibold hover:text-slate-400"
          onClick={() => navigate("/tvShows")}
        >
          <p className={`${location === 2 ? "text-white" : ""}`}>TV Shows</p>
        </div>
        <div
          className="py-3 px-4 cursor-pointer text-slate-300 font-semibold hover:text-slate-400"
          onClick={() => navigate("/movies")}
        >
          <p className={`${location === 3 ? "text-white" : ""}`}>Movies</p>
        </div>
        <div
          className="py-3 px-4 cursor-pointer text-slate-300 font-semibold hover:text-slate-400"
          onClick={() => navigate("/myList")}
        >
          <p className={`${location === 5 ? "text-white" : ""}`}>My List</p>
        </div>
      </div>

      <div className="lg:flex justify-end pl-20 pr-7 hidden">
        <div className="flex py-1">
          {location === 4 ? (
            <div className="py-1 cursor-pointer">
              <select
                className="rounded-md bg-slate-400 hover:bg-slate-300 hover:text-slate-500 text-white p-1 text-sm cursor-pointer"
                name="setLanguage"
                onChange={(e) => handleChange(e)}
                value={setLang}
              >
                {suported_lang?.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
          <div
            className="text-slate-300 flex font-semibold cursor-pointer py-1 px-5 hover:text-slate-400"
            onClick={() => navigate("/gptSearch")}
          >
            <FaSearchengin
              className={`text-2xl ${location === 4 ? "text-white" : ""}`}
            />{" "}
            <span className={`${location === 4 ? "text-white" : ""}`}>
              Search In GPT
            </span>
          </div>
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
            } py-4 bg-slate-800 absolute top-12 right-5 mx-7 my-2 min-w-[140px] rounded-sm sidebar `}
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
