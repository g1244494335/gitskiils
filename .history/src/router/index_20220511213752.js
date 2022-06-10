import YKDiscover from "../pages/discover";
import YKMine from "../pages/mine";

const routers = [
    {
        path: "/",
        exact: true,
        component:YKDiscover
    },
    {
        path: "/mine",
        exact: true,
        component:YKMine
    },
    {
        path: "/friend",
        exact: true,
        component:YKF
    },
];

export default routers