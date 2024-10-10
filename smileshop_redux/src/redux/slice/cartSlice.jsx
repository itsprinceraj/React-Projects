// create a slice using createSlice method
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.value.push(action.payload);
    }, // reducer function take two input parameters : state and action . and the  input argument of the function where they have been used can be accesse using action.payload
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

// export all reducer function from action creater of createSlice;
export const { addTocart, removeFromCart } = cartSlice.actions;

// now export reducer
export default cartSlice.reducer;
