import React, {createContext, useReducer} from "react";
import ThemeReducer from 'reducers/theme'
import { appSettings } from 'settings'

const { theme } = appSettings

const initialState = {
    theme,
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);
    
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
};

export const ThemeContext = createContext(initialState);
export default Store;