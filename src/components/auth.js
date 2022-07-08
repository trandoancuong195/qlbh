import {createContext, useContext, useEffect, useState} from 'react'
import * as href from "../api/url";
import {getData} from "../api/api";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const url = href.getUrlUserInfo()
        getData(url)
            .then(res => {
                if (res && res.data && res.data.user_id) {
                    setUser(res.data);
                    // dispatch({type: 'SET_USER', payload: res.data})
                    // dispatch({type: 'SET_LOGIN'})
                    // UposLogFunc("Login Success" + JSON.stringify(res.data));
                }
                // changeIsLoading(false)
                // cns;
            })
            .catch(err => {
                // UposLogFunc(
                //     `${'LOGIN ERROR: check AuthenticationRouter in NavBar, error: '}${
                //         err.message
                //     }`,
                // )
                // dispatch({type: 'SET_USER', payload: {}})
                // dispatch({type: 'SET_LOGOUT'})
                // changeIsLoading(false)
            })
    }, [])
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}