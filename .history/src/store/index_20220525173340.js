import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk
import reducer from "./reducer"

const store = createStore(reducer,)