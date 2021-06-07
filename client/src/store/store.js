import {combineReducers} from "redux"
import adminReducer from "./adminActions"
import videoReducer from "./videoActions"
import photoReducer from "./photoActions"

export default combineReducers({
    Admin: adminReducer,
    Photo: photoReducer,
    Video: videoReducer
})