import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrending } from "../../utils/redux/moviesSlice";
import { useEffect } from "react";

const useTrending = () => {
  const dispatch = useDispatch();
  const trendingList = useSelector((store) => store.movies?.trending);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addTrending(jsonData.results));
  };

  useEffect(() => {
    !trendingList && getTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrending;
