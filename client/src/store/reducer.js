import {combineReducer, combineReducers} from "redux"

import storeReducer from "./store"

export default combineReducers({
    Store: storeReducer
})