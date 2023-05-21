import {
    createBrowserRouter,
} from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blog from "../Pages/Blog/Blog";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>,
                loader: ()=>fetch('https://ting-tong-disneyland-server.vercel.app/allToys')
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'addtoys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://ting-tong-disneyland-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;