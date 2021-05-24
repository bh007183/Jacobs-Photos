import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Video",
    initialState: {
        Featured: []
    },
    reducers:{
        addVideo: (Video, action) => {
            Video.Featured.push(action.payload)
        }
    }
})

export const {addVideo} = slice.actions

export default slice.reducer
// api calls go below