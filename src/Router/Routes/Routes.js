import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Service from "../../pages/Service/Service";
import Services from "../../pages/Services/Services";
import Login from "../../pages/shared/Login/Login";
import SignUp from "../../pages/shared/SignUp/SignUp";
import PrivateRoutes from "../../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <SignUp />
            },
            {
                path:'/services',
                loader:()=> fetch('http://localhost:5000/services'),
                element: <Services />
            },
            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`),
                element: <Service />
            },
            {
                path:'/blog',
                element: <Blog />
            },
            {
                path:'/reviews',
                element: <PrivateRoutes><MyReviews /></PrivateRoutes>
            },

        ]
    }
]) 