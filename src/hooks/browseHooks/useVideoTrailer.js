import { addTarilerVideo } from "../../utils/moviesSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVedio = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?`,
      API_OPTIONS
    );

    const jsonData = await data.json();
    const filterData = jsonData?.results?.filter(
      (vedio) => vedio?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTarilerVideo({ trailer }));
  };

  useEffect(() => {
    getMovieVedio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useVideoTrailer;
