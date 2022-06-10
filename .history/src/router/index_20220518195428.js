import React from 'react';

import YKDiscover from "@/pages/discover";
import {YKRanking} from "@/pages/discover/c-pages/recommend";
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";
import { Redirect } from "react-router-dom";

const routers = [
    {
        path: "/",
        exact: true,
        // component:YKDiscover
        render: () => (
            <Redirect to="/discover"/>
        )
    },
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
    {
        path: "/discover/toplist",
        component:YKRanking
    },
];

export default routers