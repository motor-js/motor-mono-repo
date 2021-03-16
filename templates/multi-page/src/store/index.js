import React, { createContext, useReducer } from "react";
import ThemeReducer from "reducers/theme";
import LayoutReducer from "reducers/layout";
import NavReducer from "reducers/nav";
import { appSettings } from "settings";

const { theme, layout, nav } = appSettings;

const initialThemeState = {
  theme,
};

const initialLayoutState = {
  layout,
};

const initialNavState = {
  nav,
};

const Store = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    ThemeReducer,
    initialThemeState
  );

  const [layoutState, layoutDispatch] = useReducer(
    LayoutReducer,
    initialLayoutState
  );

  const [navState, navDispatch] = useReducer(
    NavReducer,
    initialNavState
  );

  return (
    <ThemeContext.Provider value={[themeState, themeDispatch]}>
      <LayoutContext.Provider value={[layoutState, layoutDispatch]}>
        <NavContext.Provider value={[navState, navDispatch]}>
          {children}
        </NavContext.Provider>
      </LayoutContext.Provider>
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext(initialThemeState);
export const LayoutContext = createContext(initialLayoutState);
export const NavContext = createContext(initialNavState);
export default Store;
