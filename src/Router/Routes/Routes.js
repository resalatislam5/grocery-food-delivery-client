import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
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
                loader:()=> fetch('https://gorcery-food-delivery-server.vercel.app/services'),
                element: <Services />
            },
            {
                path:'/service/:id',
                loader:({params})=> fetch(`https://gorcery-food-delivery-server.vercel.app/service/${params.id}`),
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
            {
                path:'/addservice',
                element: <PrivateRoutes><AddService /></PrivateRoutes>
            },

        ]
    }
]) 