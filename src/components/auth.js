import {createContext, useContext, useEffect, useReducer, useState} from 'react'
import GlobalState from "../GlobalState";
import GlobalReducer from "../GlobalReducer";

export const GlobalContext = createContext(GlobalState);
export default function AuthProvider({children}) {
    const [state,dispatch] = useReducer(GlobalReducer,GlobalState);
    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}