import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      // console.log("reducer", store, action);
      return action.payload;
      // return action.payload;
    },
  },
});

export const itemAction = itemSlice.actions;
