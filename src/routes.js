import {
    Routes,
    Route,
} from "react-router-dom";
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import {PrivateRoute} from "./components/route/PrivateRoute";


export default function Content() {
    // ----------------------------------------------------------------------

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
)
}
