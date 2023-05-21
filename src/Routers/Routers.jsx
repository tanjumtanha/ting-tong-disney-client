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
                loader: ()=>fetch('http://localhost:5000/allToys')
            },
            {
                path: 'mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: 'addtoys',
                element: <AddToys></AddToys>
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