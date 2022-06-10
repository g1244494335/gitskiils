import { legacy_createStore as createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"

const composeEnhancers = win

const store = createStore(reducer,applyMiddleware(thunk))