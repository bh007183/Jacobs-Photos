import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAdmin} from "../../store/adminActions"

export default function AdminEdit() {
    const dispatch = useDispatch()

    const Admin = useSelector(state => state.Store.Admin.AdminUser)
    const Error = useSelector(state => state.Store.Admin.Error)
// const [admin, setAdmin] = useState({
//     username: "",
//     email: "",
//     oldPassword: "",
//     newPassword: "",
//     verifyPassword: ""
// })

// const handleChange = (event) => {
//  let name = event.target.name;
//  let value = event.target.value;
//  setAdmin({
//      ...admin, [name]: value
//  })
// }

// if(Admin !== {}){
//     setAdmin({
//         ...admin, username: Admin.username, email: Admin.email
//     })
// }

    useEffect(() => {
        dispatch(getAdmin())
        
    }, [])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input onChange={handleChange} name="username" value={Admin.username} id="editUsername"></input>
            <input onChange={handleChange} name="email" value={Admin.email} id="editEmail"></input>
            <input onChange={handleChange} name="oldPassword" value={Admin.oldPassword} id="oldPassword"></input>
            <input onChange={handleChange} name="newPassword" value={Admin.newPassword} id="newPassword"></input>
            <input onChange={handleChange} name="verifyPassword" value={Admin.verifyPassword} id="verifyPassword"></input>
        </div>
    )
}
