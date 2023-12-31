import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./moviesSlice";
import tvShowsReducer from "./tvShowsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
  },
});

export default appStore;
