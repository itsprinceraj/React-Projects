// this is the main store where all the data will be available by using the slices

import { configureStore } from "@reduxjs/toolkit";

// must import the CounterSlice reducer as defualt export
import CounterSlice from "./slices/CounterSlice";

// create a redux Store by taking instance of configureStore
export const store = configureStore({
  // it takes an object as argument and take reducer object
  reducer: {
    counter: CounterSlice,
  },
});
