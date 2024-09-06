import { createBrowserRouter} from "react-router-dom";
import { Dashboard } from "../layouts/dashboard";
import {Home , Products , Users} from "../pages";

const router=[
    {
        path: "/",
        element: <Dashboard/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/users",
                element: <Users/>
            }
        ]
    }

]

export const appRouter = createBrowserRouter(router);