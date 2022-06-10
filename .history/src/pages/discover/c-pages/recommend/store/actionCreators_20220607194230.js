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

const changeTopListAction = res => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList: res.list
})

const changeupRankingsAction = res => ({
    type: actionTypes.CHANGE_UP_RANKING,
    rangkings:res.songs
})
const changenewRankingsAction = res => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    rangkings:res.songs
})
const changeoriRankingsAction = res => ({
    type: actionTypes.CHANGE_ORI_RANKING,
    rangkings:res.songs
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

export const getTopListAction = () => {
    return dispatch => {
        getTopList().then(res => dispatch(changeTopListAction(res)))
    }
}

export const getRankingSongsAction = () => {
    return dispatch => {
        getRankingSongs().then(res => dispatch(changeRankingsAction(res)))
    }
}