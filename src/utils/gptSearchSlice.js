import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: "en",
  reducers: {
    addLang: (state, action) => {
      return action.payload;
    },
  },
});
export const { addLang } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
