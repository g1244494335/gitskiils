import YKDiscover from "@/pages/discover";
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";

const routers = [
    {
        path: "/",
        exact: true,
        render:()=>
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