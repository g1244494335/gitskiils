import * as actionTypes from './constant'

import {getTopBanners} from "@/services/recommend"

dispatch(getTopBannerAction())

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => console.log();)
    }
}