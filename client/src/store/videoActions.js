import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Video",
    initialState: {
        Featured: [],
        Error: "",
        Success: ""
    },
    reducers:{
        
        setError: (Video, action) => {
            Video.Error = action.payload.data
        },
        setSuccess: (Video, action) => {
            Video.Success = action.payload
        },
        resetSuccessFail: (Video, action) => {
            Video.Success = "";
            Video.Error = ""
        },
        setVideos: (Video, action) => {
            Video.Featured = action.payload
        }
    }
})

export const {addVideo, setError, setSuccess, resetSuccessFail, setVideos} = slice.actions

export default slice.reducer
// api calls go below

export const uploadVideo = (data) => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/addVideo",
    method: "POST",
    data: data,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setSuccess.type,
    onError: setError.type,
})
export const getVideo = (data) => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/getVideo",
    onSuccess: setVideos.type,
    onError: setError.type,
})