import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Photo",
    initialState: {
        All: [],
        Category: [],
        Error: "",
        Success: ""
    },
    reducers:{
       
        setAllPhotos: (Photo, action) => {
            Photo.All = action.payload
        },
        setCategoryPhotos: (Photo, action) => {
            Photo.Category = action.payload
        },

        setError: (Photo, action) => {
            
            Photo.Error = action.payload.data
        },
        setSuccess: (Photo, action) => {
            Photo.Success = action.payload
        },
        resetSuccessFail: (Photo, action) => {
            Photo.Success = '';
            Photo.Error = ''
        }

    }
})

export const {addPhoto, setAllPhotos, setError, setSuccess, resetSuccessFail, setCategoryPhotos} = slice.actions

export default slice.reducer
// api calls go below


export const getAllPhotos = () => apiCallBegan({
url: "http://localhost:8080/getImages",
onSuccess: setAllPhotos.type,
onError: setError.type
})

export const uploadPhoto = (data) => apiCallBegan({
    url: "http://localhost:8080/addPhoto",
    method: "POST",
    data: data,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setSuccess.type,
    onError: setError.type,
})

export const getPhotoByCategory = (category) => apiCallBegan({
    url: `http://localhost:8080/apiByCategory/${category}`,
    onSuccess: setCategoryPhotos.type,
    onError: setError.type,
})