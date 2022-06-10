import { legacy_createStore as createStore, applyMiddleware,comop } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer"

const store = createStore(reducer,applyMiddleware(thunk))