import { configureStore, combineReducers } from "@reduxjs/toolkit";
import eventReducer from "./slices/event";
import uiReducer from "./slices/ui";
import chatUISlice from "./slices/chat-ui";

const rootReducer = combineReducers({
  events: eventReducer,
  ui: uiReducer,
  chatUI: chatUISlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
