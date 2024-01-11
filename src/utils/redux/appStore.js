import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./moviesSlice";
import tvShowsReducer from "./tvShowsSlice";
import gptSearchReducer from "./gptSearchSlice";
import gptMovieReducer from "./gptSearchMoviesSllice";
import myListReducer from "./myListSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    gptSearch: gptSearchReducer,
    gptMovies: gptMovieReducer,
    list: myListReducer,
  },
});

export default appStore;
