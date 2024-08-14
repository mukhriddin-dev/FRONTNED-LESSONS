import {Home, About, Service, Contact, Error , Team} from "../views";

export const routerLinks = [
    {
        id: 1,
        path: "/",
        element: <Home/>,
        title:"Home"
    },
    {
        id: 2,
        path: "/about",
        element: <About/>,
        title:"About"
    },
    {
        id: 3,
        path: "/contact",
        element: <Contact/>,
        title: "Contact"
    },
    {
        id: 4,
        path: "/Service",
        element: <Service/>,
        title:"Service"
    },
    {
        id: 5,
        path: "/team",
        element: <Team/>,
        title:"Team"
    },
    {
        id: 5,
        path: "*",
        element: <Error />,
    },

];
