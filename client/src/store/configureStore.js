import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"

import reducer from "./reducer"
import {api} from "./apiMiddleware/api"

export default function StorConfigure(){
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware({serializeableCheck: false}), api]
    })
}