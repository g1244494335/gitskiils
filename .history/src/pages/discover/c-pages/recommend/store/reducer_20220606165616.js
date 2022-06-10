import {Map} from "immutable"
import * as actionTypes from './constant'

const defaultState = Map({
    topBanners: [],
    hotRecommends:[],
    newAlbums: [],
    rankings: [],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDED:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes
        default:
            return state;
    }
}

export default reducer