import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
export default function index() {
    return (
        <div className="headerPhoto">

        <div id="CardContain">
        <div id="photoCard">
        <Link className="RouterLink" to="/photos">
        <br></br>
            <div className="imgContain" >
                <div id="photoImg" alt="Photo Link" >
                <h1 className="cardText" >Photos</h1>
                </div>
           
              
            </div>
            <br></br>
            </Link>
        </div>
       
            <div type="button" id="videoCard">
            <Link className="RouterLink" to="/videos">
            <br></br>
            <div className="imgContain">
                 <div id="videoImg" alt="Video Link">
                     <h1 className="cardText" >Video</h1>
                 </div>
                

            </div>

            <br></br>
            </Link>
            </div>
            

        </div>
        



        </div>
            
       
    )
}