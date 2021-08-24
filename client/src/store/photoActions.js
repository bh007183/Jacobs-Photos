import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Photo",
    initialState: {
        All: [],
        EditPhotos: [],
        
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
       

        setError: (Photo, action) => {
            
            Photo.Error = action.payload.data
        },
        setSuccess: (Photo, action) => {
            Photo.Success = action.payload
        },

        setDeleteSuccess: (Photo, action) => {
            let newArr = Photo.EditPhotos.filter(obj => obj._id !== action.payload._id)
            Photo.EditPhotos = newArr
        },
        resetSuccessFail: (Photo, action) => {
            Photo.Success = '';
            Photo.Error = ''
        },

    }
})

export const {addPhoto, setAllPhotos, setError, setSuccess, resetSuccessFail, setCategoryPhotos, setEditPhotos, setDeleteSuccess} = slice.actions

export default slice.reducer
// api calls go below


export const getAllPhotos = () => apiCallBegan({
url: "https://jacobsportfolio1234.herokuapp.com/getImages",
onSuccess: setAllPhotos.type,
onError: setError.type
})

export const uploadPhoto = (data) => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/addPhoto",
    method: "POST",
    data: data,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setSuccess.type,
    onError: setError.type,
})

export const getPhotoByCategory = (category) => apiCallBegan({
    url: `https://jacobsportfolio1234.herokuapp.com/apiByCategory/${category}`,
    onSuccess: setAllPhotos.type,
    onError: setError.type,
})

export const getEditPhotosAdmin = (title) => apiCallBegan({
    url: `https://jacobsportfolio1234.herokuapp.com/apiEditPhoto/${title}`,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setEditPhotos.type,
    onError: setError.type,
})

export const submitEdit = (obj) => apiCallBegan({
    url: `https://jacobsportfolio1234.herokuapp.com/apiSubmitPhotoEdit`,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    method: "PUT",
    data: obj,
    onSuccess: setSuccess.type,
    onError: setError.type,
})

export const deletePhoto = (obj) => apiCallBegan({
    url: `https://jacobsportfolio1234.herokuapp.com/apiPhotoDelete/${obj._id}/${obj.publicId}`,
    headers: { authorization: "Bearer: " + localStorage.getItem("Token")},
    method: "DELETE",
    onSuccess: setDeleteSuccess.type,
    onError: setError.type,
})
export const getFeatured = () => apiCallBegan({
    url: `https://jacobsportfolio1234.herokuapp.com/getFeatured`,
    onSuccess: setAllPhotos.type,
    onError: setError.type,
})