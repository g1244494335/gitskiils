import * as actionTypes from './constant'

import {
    getTopBanners,
    getHotRecommend,
} from "@/services/recommend"

const changeTopBannersAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDED,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => dispatch(changeTopBannersAction(res)));
    }
}

export const getHotRecommendAction = () => {
    return dispatch => {
        getHotRecommend().then(res => console.log(2));
    }
}