import React, {useState} from 'react'
import axios from "axios"
import "./style.css"


export default function AdminLogin() {
    const [userState, setUserState] = useState({
        username: "",
        password: ""
        
    })



    const handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        setUserState({
            ...userState, [name]: value
        })

    }

    const handleSubmit = (event) => {
        console.log(userState)
        event.preventDefault()
        axios.post("https://jacobsportfolio1234.herokuapp.com/adminLoginApi", {
            data: userState,
            headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
        }).then(res => {
            localStorage.setItem("Token", res.data.token)
            window.location.href = "/adminAccess"
        }).catch(err => {
            alert(err)
            // .response.data
        })
    }



    return (
        
    
        <div id="LoginContain">
           
            <div id="LoginFormContainer" >
                <form onSubmit={handleSubmit}>
                    <div id="inputRow">
                        <div className="inputColumn" >
                        <input onChange={handleChange} name="username" value={userState.username} placeholder="UserName"></input>
                        </div>
                        <div className="inputColumn" >
                    <input onChange={handleChange} name="password" value={userState.password} placeholder="Password" type="password"></input>
                    </div>
                        <div className="inputColumn" >
                        <button type="submit">Enter</button>
                    </div>
                   
                    </div>
                </form>

            </div>
           
        </div>
    )
}
