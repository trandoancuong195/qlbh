import { Navigate, useRoutes } from 'react-router-dom';
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

// ----------------------------------------------------------------------
// useEffect(() => {
//   // fakeDataUser()
//   const url = href.getUrlUserInfo()
//   getData(url)
//       .then(res => {
//         console.log(res)
//         if (res && res.data && res.data.user_id) {
//           dispatch({type: 'SET_USER', payload: res.data})
//           dispatch({type: 'SET_LOGIN'})
//           // UposLogFunc("Login Success" + JSON.stringify(res.data));
//         }
//         changeIsLoading(false)
//         // cns;
//       })
//       .catch(err => {
//         UposLogFunc(
//             `${'LOGIN ERROR: check AuthenticationRouter in NavBar, error: '}${
//                 err.message
//             }`,
//         )
//         dispatch({type: 'SET_USER', payload: {}})
//         dispatch({type: 'SET_LOGOUT'})
//         changeIsLoading(false)
//       })
// }, [])


export default function   Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
