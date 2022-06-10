import * as actionTypes from './constant'

const defaultState = {
    topBanners: [],
    newAlbums: [],
    rang
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