import React, {createContext, useReducer} from "react";
import Reducer from '../reducer'
import useSelectionObject from '../hooks/useSelectionObject'

/*const initialState = {
    selections: [],
    error: null
};*/

const SelectionsStore = ({children}) => {
    //const [state, dispatch] = useReducer(Reducer, initialState);

    const { qLayout } = useSelectionObject()

    const selections = qLayout

    return (
        <SelectionsContext.Provider value={qLayout}>
            {children}
        </SelectionsContext.Provider>
    )
};

export const SelectionsContext = createContext();
export default SelectionsStore;