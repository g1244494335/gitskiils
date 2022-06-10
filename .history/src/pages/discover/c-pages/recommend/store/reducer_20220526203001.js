import {Map} from "immutable"
import * as actionTypes from './constant'

const defaultState = Map({
    topBanners: [],
    newAlbums: [],
    rankings: [],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set(:)
        default:
            return state;
    }
}

export default reducer