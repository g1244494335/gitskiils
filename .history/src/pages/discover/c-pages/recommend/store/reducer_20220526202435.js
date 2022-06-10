import {Map} 
import * as actionTypes from './constant'

const defaultState = {
    topBanners: [],
    newAlbums: [],
    rankings: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state,topBanners:action.topBanners}
        default:
            return state;
    }
}

export default reducer