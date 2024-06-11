import { createSlice } from "@reduxjs/toolkit";

export const bagslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addBagItem: (store, action) => {
      store.push(action.payload);
    },
    removeItem: (store, action) => {
      return store.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagAction = bagslice.actions;
