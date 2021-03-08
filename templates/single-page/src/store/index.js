import React, {createContext, useReducer} from "react";
import ThemeReducer from 'reducers/theme'
import { appSettings } from 'settings'

const { theme } = appSettings

const initialThemeState = {
    theme,
};

const Store = ({children}) => {
    const [themeState, themeDispatch] = useReducer(ThemeReducer, initialThemeState);

    return (
        <ThemeContext.Provider value={[themeState, themeDispatch]}>
            {children}
        </ThemeContext.Provider>
    )
};

export const ThemeContext = createContext(initialThemeState);
export default Store;