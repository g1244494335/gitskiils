import { combineReducers } from "redux";
import {reducer as recommendReducer } from "../pages/discover/c-pages/recommend"

const cReducer = combineReducers({
    recommend:r
});

export default cReducer;