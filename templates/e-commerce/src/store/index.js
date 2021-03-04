import React, {createContext, useReducer} from "react";
import ThemeReducer from 'reducers/theme'
import LayoutReducer from 'reducers/layout'
import { appSettings } from 'settings'

const { theme, layout } = appSettings

const initialThemeState = {
    theme,
};

const initialLayoutState = {
    layout,
};

const Store = ({children}) => {
    const [themeState, themeDispatch] = useReducer(ThemeReducer, initialThemeState);
    const [layoutState, layoutDispatch] = useReducer(LayoutReducer, initialLayoutState);

    return (
        <ThemeContext.Provider value={[themeState, themeDispatch]}>
            <LayoutContext.Provider value={[layoutState, layoutDispatch]}>
            {children}
            </LayoutContext.Provider>
        </ThemeContext.Provider>
    )
};

export const ThemeContext = createContext(initialThemeState);
export const LayoutContext = createContext(initialLayoutState);
export default Store;