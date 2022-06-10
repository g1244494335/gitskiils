import YKDiscover from "@/pages/discover";
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";

const routers = [
    {
        path: "/discover",
        component:YKDiscover
    },
    {
        path: "/mine",
        component:YKMine
    },
    {
        path: "/friend",
        component:YKFriend
    },
];

export default routers