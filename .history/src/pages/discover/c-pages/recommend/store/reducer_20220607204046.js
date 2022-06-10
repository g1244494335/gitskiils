import {Map} from "immutable"
import * as actionTypes from './constant'

const defaultState = Map({
    topBanners: [],
    hotRecommends:[],
    newAlbums: [],
    topLists:[],
    uprankings: [],
    newrankings: [],
    orirankings:[],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDED:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbums)
        case actionTypes.CHANGE_TOP_LIST:
            return state.set("topLists", action.topList)
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("uprangkings",action.rankings)
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newrangkings",action.rankings)
        case actionTypes.CHANGE_ORI_RANKING:
            return state.set("orirangkings",action.rankings)
        default:
            return state;
    }
}

export default reducer