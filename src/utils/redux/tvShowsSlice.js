import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    airingToday: null,
    onTheAir: null,
    popularShows: null,
    topRatedShows: null,
    tvGeneres: null,
  },
  reducers: {
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
    addTvGeneres: (state, action) => {
      state.tvGeneres = action.payload;
    },
  },
});

export const {
  addAiringToday,
  addOnTheAir,
  addPopularShows,
  addTopRatedShows,
  addTvGeneres,
} = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
