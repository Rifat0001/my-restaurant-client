import {
    createBrowserRouter
} from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/pages/Home/Home";
import Menu from "./components/pages/Menu/Menu";
import Order from "./components/pages/Order/Order";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import PrivateRoute from "./components/compo/PrivateRoute";
import Secret from "./components/Secret/Secret";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
]);



