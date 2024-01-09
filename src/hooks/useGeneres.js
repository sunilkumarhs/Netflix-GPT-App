import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieGeneres } from "../utils/redux/moviesSlice";
import { addTvGeneres } from "../utils/redux/tvShowsSlice";
import { useEffect } from "react";

const useGeneres = () => {
  const dispatch = useDispatch();
  const movieGenere = useSelector((store) => store?.movies?.movieGeneres);
  const tvGenere = useSelector((store) => store?.tvShows?.tvGeneres);
  const getMovieGeneres = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addMovieGeneres(jsonData));
  };
  const getTvGeneres = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list?language=en",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTvGeneres(jsonData));
  };

  useEffect(() => {
    !movieGenere && getMovieGeneres();
    !tvGenere && getTvGeneres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGeneres;
