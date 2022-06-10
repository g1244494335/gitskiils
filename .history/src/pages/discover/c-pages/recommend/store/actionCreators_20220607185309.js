import * as actionTypes from './constant'

import {
    getTopBanners,
    getHotRecommend,
    getNewAlbums,
    getTopList,
    getRankingSongs
} from "@/services/recommend"

const changeTopBannersAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDED,
    hotRecommends: res.result
})

const changeNewAlbumAction = res => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => dispatch(changeTopBannersAction(res)));
    }
}

export const getHotRecommendAction = () => {
    return dispatch => {
        getHotRecommend().then(res => dispatch(changeHotRecommendAction(res)));
    }
}

export const getNewAlbumAction = () => {
    return dispatch => {
        getNewAlbums().then(res => dispatch(changeNewAlbumAction(res)));
    }
}

export const getT