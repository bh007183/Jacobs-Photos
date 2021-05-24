import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Photo",
    initialState: {
        Featured: []
    },
    reducers:{
        addPhoto: (Photo, action) => {
            Photo.Featured.push(action.payload)
        }
    }
})

export const {addPhoto} = slice.actions

export default slice.reducer
// api calls go below