import { createSlice } from "@reduxjs/toolkit";

const gptSearchMovieSlice = createSlice({
  name: "searchMovies",
  initialState: {
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    addSearchMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addSearchMovies } = gptSearchMovieSlice.actions;

export default gptSearchMovieSlice.reducer;
