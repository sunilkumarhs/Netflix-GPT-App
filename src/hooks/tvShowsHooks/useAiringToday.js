import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addAiringToday } from "../../utils/tvShowsSlice";

const useAiringToday = () => {
  const dispatch = useDispatch();

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addAiringToday(jsonData.results));
  };

  useEffect(() => {
    getAiringToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAiringToday;
