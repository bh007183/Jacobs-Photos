import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Admin",
    initialState: {
        Featured: []
    },
    reducers:{
        addAdmin: (Admin, action) => {
            Admin.Featured.push(action.payload)
        }
    }
})

export const {addAdmin} = slice.actions

export default slice.reducer
// api calls go below