import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {
    message: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});
export const { addmessage } = counterSlice.actions;

export default messageSlice.reducer;
