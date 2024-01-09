import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addAiringToday } from "../../utils/redux/tvShowsSlice";

const useAiringToday = () => {
  const dispatch = useDispatch();
  const airingToday = useSelector((store) => store?.tvShows?.airingToday);

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addAiringToday(jsonData.results));
  };

  useEffect(() => {
    !airingToday && getAiringToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAiringToday;
