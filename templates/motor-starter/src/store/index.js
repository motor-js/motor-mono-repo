import React, { createContext, useReducer } from "react";
import SidebarReducer from "../reducers/sidebar";

const initialSidebarState = {
  sidebar: 'open',
};

const Store = ({ children }) => {
  const [sidebarState, sidebarDispatch] = useReducer(
    SidebarReducer,
    initialSidebarState
  );

  return (
    <SidebarContext.Provider value={[sidebarState, sidebarDispatch]}>
          {children}
    </SidebarContext.Provider>
  );
};

export const SidebarContext = createContext(initialSidebarState);
export default Store;
