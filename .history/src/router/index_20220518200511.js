import React from 'react';

import YKDiscover from "@/pages/discover";
import YKRanking from "@/pages/discover/c-pages/ranking";
import YKRecommend from "@/pages/discover/c-pages/recommend"
import YKPlaylist from "@/pages/discover/c-pages/playlist"
import YKDjradio from "@/pages/discover/c-pages/djradio"
import YKArtist from "@/pages/discover/c-pages/artist"
import YKAibum from "@/pages/discover/c-pages/aibum"
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";
import { Redirect } from "react-router-dom";

const routers = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: "/discover",
        component: YKDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: "/discover/recommend",
                component: YKRecommend
            },
            {
                path: "/discover/toplist",
                component: YKRanking
            },
            {
                path: "/discover/playlist",
                component: YKRanking
            },
            {
                path: "/discover/djradio",
                component: YKRanking
            },
            {
                path: "/discover/artist",
                component: YKRanking
            },
            {
                path: "/discover/album",
                component: YKRanking
            },
        ]
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