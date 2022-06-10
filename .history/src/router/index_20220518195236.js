import React from 'react';

import YKDiscover from "@/pages/discover";
import {YKRanking} from "@/pages/discover/c-pages/recomend";
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
        path: "/discover/",
        component:YKDiscover
    },
];

export default routers