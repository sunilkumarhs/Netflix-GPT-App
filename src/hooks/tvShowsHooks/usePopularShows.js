import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularShows } from "../../utils/tvShowsSlice";

const usePopularShows = () => {
  const dispatch = useDispatch();

  const getPopularShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addPopularShows(jsonData.results));
  };

  useEffect(() => {
    getPopularShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularShows;
