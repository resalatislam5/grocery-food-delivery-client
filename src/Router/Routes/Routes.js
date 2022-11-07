import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import Login from "../../pages/shared/Login/Login";
import SignUp from "../../pages/shared/SignUp/SignUp";

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
                element: <Services />
            },

        ]
    }
]) 