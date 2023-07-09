import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";
export default store = configureStore({
  reducer: {
    messageSlice,
  },
});
