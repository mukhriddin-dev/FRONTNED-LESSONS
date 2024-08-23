import { createBrowserRouter } from "react-router-dom";
import { Dashboard, AuthLayout } from "@layout";
import { Home, Leads, Orders, Users , Posts, PostItem, Error } from "@pages";

const children=[
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/posts", element:<Posts/>},
      {path:"/posts/:id", element:<PostItem/>},
      { path: "/leads", element: <Leads /> },
      { path: "/orders", element: <Orders /> },
      { path: "/users", element: <Users /> }
    ]
  },
  {
    path: "/login",
    element: <AuthLayout />
  },
  {
    path: "*",
    element: <Error />
  }
]

export const router = createBrowserRouter([
  ...children
]);
