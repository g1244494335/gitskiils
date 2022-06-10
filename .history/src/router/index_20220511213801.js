import YKDiscover from "../pages/discover";
import YKMine from "../pages/mine";
import YKFriend from "../pages/friend";

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
        component:YKFriend
    },
];

export default routers