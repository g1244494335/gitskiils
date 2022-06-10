import { legacy_createStore as createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"

const composeEnhancers = window.__REDUX_

const store = createStore(reducer,applyMiddleware(thunk))