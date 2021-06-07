import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import axios from "axios"

export default function Temp() {


const handleClick= (event) => {

    axios.post("http://localhost:8080/createaccount", {username: "bob", email: "bob@bob.com", password: "bob"})

}

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <button onClick={handleClick}>now</button>
            
        </div>
    )
}

