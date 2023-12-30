import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTarilerVedio } from "../utils/moviesSlice";

const VedioBackground = ({ id }) => {
  const dispatch = useDispatch();

  const trailerVedio = useSelector(
    (store) => store.movies?.trailerVedio?.trailer?.key
  );

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
    dispatch(addTarilerVedio({ trailer }));
  };

  useEffect(() => {
    getMovieVedio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVedio}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
