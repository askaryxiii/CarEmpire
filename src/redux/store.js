import { configureStore } from "@reduxjs/toolkit";
import { cars } from "./slices/carsSlice";

const store = configureStore({
  reducer: { cars },
});

export default store;
