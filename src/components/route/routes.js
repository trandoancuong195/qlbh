import {
    Routes,
    Route,
} from "react-router-dom";

import {useContext, useEffect, useState} from "react";
// layouts
import DashboardLayout from '../../layouts/dashboard';
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
//
import Blog from '../../pages/Blog';
import User from '../../pages/User';
import Login from '../../pages/Login';
import NotFound from '../../pages/Page404';
import Register from '../../pages/Register';
import Products from '../../pages/Products';
import DashboardApp from '../../pages/DashboardApp';
import {PrivateRoute} from "./PrivateRoute";
import * as href from "../../api/url";
import {getData} from "../../api/api";
import * as auth from "../auth";


export default function Content() {
    // ----------------------------------------------------------------------
    const [state, dispatch] = useContext(auth.GlobalContext)
    const [isLoading, changeIsLoading] = useState(true)
    const fakeDataUser = () => {
        dispatch({type: 'SET_USER', payload: {}})
        dispatch({type: 'SET_LOGIN'})
        changeIsLoading(false)
    }
    useEffect(() => {
        // fakeDataUser()
        const url = href.getUrlUserInfo()
        getData(url)
            .then(res => {
                console.log(res)
                if (res && res.data && res.data.user_id) {
                    dispatch({type: 'SET_USER', payload: res.data})
                    dispatch({type: 'SET_LOGIN'})
                    // UposLogFunc("Login Success" + JSON.stringify(res.data));
                }
                changeIsLoading(false)
                // cns;
            })
            .catch(err => {
                dispatch({type: 'SET_USER', payload: {}})
                dispatch({type: 'SET_LOGOUT'})
                changeIsLoading(false)
            })
    }, [])
    // return useRoutes([
    //   {
    //     path: '/dashboard',
    //     element: <DashboardLayout />,
    //     children: [
    //       { path: 'app', element: <DashboardApp /> },
    //       { path: 'user', element: <User /> },
    //       { path: 'products', element: <Products /> },
    //       { path: 'blog', element: <Blog /> },
    //     ],
    //   },
    //   {
    //     path: '/',
    //     element: <LogoOnlyLayout />,
    //     children: [
    //       { path: '/', element: <Navigate to="/dashboard/app" /> },
    //       { path: 'login', element: <Login /> },
    //       { path: 'register', element: <Register /> },
    //       { path: '404', element: <NotFound /> },
    //       { path: '*', element: <Navigate to="/404" /> },
    //     ],
    //   },
    //   { path: '*', element: <Navigate to="/404" replace /> },
    // ]);
    return (
        <AuthProvider>
            <Routes>
                <Route path={'/'} element={<LogoOnlyLayout/>}>
                    <Route path="/dashboard" element={<PrivateRoute><DashboardLayout/></PrivateRoute>}>
                        <Route path={"app"} element={<DashboardApp/>}/>
                        <Route path={"user"} element={<User/>}/>
                        <Route path={"products"} element={<Products/>}/>
                        <Route path={"blog"} element={<Blog/>}/>
                    </Route>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/404"} element={<NotFound/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                    <Route path={"/"} element={<PrivateRoute><DashboardLayout/></PrivateRoute>}/>
                </Route>
            </Routes>
        </AuthProvider>
)
}
