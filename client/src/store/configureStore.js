import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"

import reducer from "./reducer"
import api from "./apiMiddleware/api"

export default function(){
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware({serializeableCheck: false}), api]
    })
}