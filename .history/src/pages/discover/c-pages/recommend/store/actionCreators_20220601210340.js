import * as actionTypes from './constant'

import {
    getTopBanners,
    getHotRecommend,
} from "@/services/recommend"

const changeTopBannersAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => dispatch(changeTopBannersAction(res)));
    }
}

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then()
    }
}