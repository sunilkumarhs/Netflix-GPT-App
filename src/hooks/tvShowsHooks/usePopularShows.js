import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularShows } from "../../utils/redux/tvShowsSlice";

const usePopularShows = () => {
  const dispatch = useDispatch();
  const popularShows = useSelector((store) => store?.tvShows?.popularShows);

  const getPopularShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addPopularShows(jsonData.results));
  };

  useEffect(() => {
    !popularShows && getPopularShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularShows;
