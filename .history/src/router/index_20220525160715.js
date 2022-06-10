import React from 'react';

import YKDiscover from "@/pages/discover";
import YKRanking from "@/pages/discover/c-pages/ranking";
import YKRecommend from "@/pages/discover/c-pages/recommend"
import YKPlaylist from "@/pages/discover/c-pages/playlist"
import YKDjradio from "@/pages/discover/c-pages/djradio"
import YKArtist from "@/pages/discover/c-pages/artist"
import YKAlbum from "@/pages/discover/c-pages/album"
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
        // routes: [
        //     // {
        //     //     path: "/discover",
        //     //     exact: true,
        //     //     render: () => (
        //     //         <Redirect to="/discover/recommend"/>
        //     //     )
        //     // },
        //     {
        //         path: "/discover/recommend",
        //         // exact: true,
        //         component: YKRecommend
        //     },
        //     {
        //         path: "/discover/toplist",
        //         component: YKRanking
        //     },
        //     {
        //         path: "/discover/playlist",
        //         component: YKPlaylist
        //     },
        //     {
        //         path: "/discover/djradio",
        //         component: YKDjradio
        //     },
        //     {
        //         path: "/discover/artist",
        //         component: YKArtist
        //     },
        //     {
        //         path: "/discover/album",
        //         component: YKAlbum
        //     },
        // ]
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