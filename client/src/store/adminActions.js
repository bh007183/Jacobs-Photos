import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

const slice = createSlice({
    name: "Admin",
    initialState: {
        
        AdminUser: {
            username: "",
            email: "",
            oldPassword: "",
            newPassword: "",
            verifyPassword: ""
        },
        Error: "",
        Success: ""
    },
    reducers:{
        setAdmin: (Admin, action) => {
            Admin.AdminUser.username = action.payload.username;
            Admin.AdminUser.email = action.payload.email
            console.log(action.payload)
        },

        setError: (Admin, action) => {
            Admin.Error = action.payload.data
        },
        setSuccess: (Admin, action) => {
            Admin.Success = action.payload
        },
        onAdminChange: (Admin, action) => {
            Admin.AdminUser[action.payload.name] = action.payload.value
        },
        Reset: (Admin, action ) => {
            Admin.Error = ""
            Admin.Success = ""
        }

    }
})

export const {setAdmin, setError, setSuccess, onAdminChange, Reset} = slice.actions

export default slice.reducer

export const  getAdmin = () => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/getAdminAPi", 
    headers: {authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setAdmin.type,
    onError: setError.type
})
export const  UpdateAdmin = (Admin) => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/UpdateAdminAPi", 
    headers: {authorization: "Bearer: " + localStorage.getItem("Token")},
    method: "PUT",
    data: Admin,
    onSuccess: setSuccess.type,
    onError: setError.type
})