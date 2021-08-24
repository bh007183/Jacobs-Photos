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
        Success: "",
        NodeMailerError: "",
        NodeMailerSuccess: ""
    },
    reducers:{
        setAdmin: (Admin, action) => {
            Admin.AdminUser.username = action.payload.username;
            Admin.AdminUser.email = action.payload.email
            
        },

        setError: (Admin, action) => {
            Admin.Error = action.payload.data
        },
        setSuccess: (Admin, action) => {
            Admin.Success = action.payload
        },
        setNodeError: (Admin, action) => {
            Admin.NodeMailerError = action.payload.data
        },
        setNodeSuccess: (Admin, action) => {
            Admin.NodeMailerSuccess = action.payload
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

export const {setAdmin, setError, setSuccess, onAdminChange, Reset, setNodeError, setNodeSuccess} = slice.actions

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

// NodeMailer Route
export const emailAdmin = (data) => apiCallBegan({
    url: "https://jacobsportfolio1234.herokuapp.com/emailAdmin", 
    method: "POST",
    data: data,
    onSuccess: setNodeSuccess.type,
    onError: setNodeError.type
})