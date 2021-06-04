import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Photo",
    initialState: {
        All: [],
        EditPhotos: [],
        Category: [],
        Error: "",
        Success: ""
    },
    reducers:{
       
        setAllPhotos: (Photo, action) => {
            Photo.All = action.payload
        },
        setEditPhotos: (Photo, action) => {
            Photo.EditPhotos = action.payload
        },
        // setCategoryPhotos: (Photo, action) => {
        //     Photo.Category = action.payload
        // },

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

        // resetSuccessFail: (Photo, action) => {
        //     Photo.Success = '';
        //     Photo.Error = ''
        // }

    }
})

export const {addPhoto, setAllPhotos, setError, setSuccess, resetSuccessFail, setCategoryPhotos, setEditPhotos} = slice.actions

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
    onSuccess: setAllPhotos.type,
    onError: setError.type,
})

export const getEditPhotosAdmin = (title) => apiCallBegan({
    url: `http://localhost:8080/apiEditPhoto/${title}`,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setEditPhotos.type,
    onError: setError.type,
})