import * as actionTypes from './constant'

const defaultState = {
    topBanners:[]
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state,topBanners: []}
        default:
            
    }
}