import {Navigate, useLocation} from "react-router-dom";
import {useContext} from "react";
import {GlobalContext} from "../auth"

export const PrivateRoute = ({ children }) => {
    const [state, dispatch] = useContext(GlobalContext)
    const location = useLocation()
    if(state.isLogin){
        return <Navigate to={'/login'} state={{path: location.pathname}}/>
    }
    return children
}