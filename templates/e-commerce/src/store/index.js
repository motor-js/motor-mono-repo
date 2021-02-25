import React, {createContext, useReducer} from "react";
import Reducer from '../reducer'

const initialState = {
    selections: [],
    error: null
};

const SelectionsStore = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <SelectionsContext.Provider value={[state, dispatch]}>
            {children}
        </SelectionsContext.Provider>
    )
};

export const SelectionsContext = createContext(initialState);
export default SelectionsStore;