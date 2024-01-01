import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addOnTheAir } from "../../utils/tvShowsSlice";

const useOnTheAir = () => {
  const dispatch = useDispatch();

  const getOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addOnTheAir(jsonData.results));
  };

  useEffect(() => {
    getOnTheAir();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnTheAir;
