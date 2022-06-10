// import * as actionTypes from './constant'

import { getTopBanners } from "@/services/recommend"

const changeTopBannersAction = res => {
    
}

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => console.log(res))
    }
}