import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = { token: "" };
const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});
export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
export const selectCurrentToken = (state: RootState) => state.token.token;
