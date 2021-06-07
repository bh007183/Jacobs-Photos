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
        Error: ""
    },
    reducers:{
        setAdmin: (Admin, action) => {
            Admin.AdminUser.username = action.payload.username;
            Admin.AdminUser.email = action.payload.email
        },

        setError: (Admin, action) => {
            Admin.Error = action.payload
        },
        onAdminChange: (Admin, action) => {

            

        }
    }
})

export const {setAdmin, setError} = slice.actions

export default slice.reducer

export const  getAdmin = () => apiCallBegan({
    url: "http://localhost:8080/getAdminAPi", 
    headers: {authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setAdmin.type,
    onError: setError.type
})