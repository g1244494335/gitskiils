import { legacy_createStore as createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"

const

const store = createStore(reducer,applyMiddleware(thunk))