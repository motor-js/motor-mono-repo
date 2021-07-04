/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  isBody: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      const {
        payload: { isOpen },
      } = action;
      if (isOpen) {
        state.sidebar = false;
      } else {
        state.sidebar = !state.sidebar;
      }
    },
    toggleBody(state) {
      state.isBody = !state.isBody;
    },
  },
});

export const { toggleSidebar, toggleBody } = uiSlice.actions;
export default uiSlice.reducer;
