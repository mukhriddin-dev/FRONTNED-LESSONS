import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerLinks } from "./mocks/router";
import { filterRouting } from "./utils";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...filterRouting(routerLinks)]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
