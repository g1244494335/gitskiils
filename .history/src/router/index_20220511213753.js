import YKDiscover from "../pages/discover";
import YKFriend from "../pages/friend";
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
        component:YKFriend
    },
];

export default routers