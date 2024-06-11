import { configureStore } from "@reduxjs/toolkit";

import { itemSlice } from "./itemSlice";
import { fetchStatusSlice } from "./fetchStatusSlice";
import { bagslice } from "./bagSlice";

export const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    cart: bagslice.reducer,
  },
});
