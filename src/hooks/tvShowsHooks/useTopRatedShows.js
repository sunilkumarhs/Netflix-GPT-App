import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addTopRatedShows } from "../../utils/tvShowsSlice";

const useTopRatedShows = () => {
  const dispatch = useDispatch();

  const getTopRatedShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addTopRatedShows(jsonData.results));
  };

  useEffect(() => {
    getTopRatedShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedShows;
