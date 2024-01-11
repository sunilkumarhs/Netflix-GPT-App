import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "list",
  initialState: {
    myList: [],
  },
  reducers: {
    addToList: (state, action) => {
      state.myList.push(action.payload);
    },
  },
});

export const { addToList } = myListSlice.actions;

export default myListSlice.reducer;
