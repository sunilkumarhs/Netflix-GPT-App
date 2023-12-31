import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=2",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
