import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./style.css"



export default function AdminHome() {

    // useEffect(() => {
    //     axios.get("http://localhost:8080/adminAccessAuthorized", {
    //         headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
    //     }).then(res => {

    //     }).catch(err => {
    //         window.location.href = "/error"
            
    //     })

    // }, [])


  return (
    <div id="AdminDashContain">
      <div className="firstCardContain">
        <div id="AdminPhotoCard">
          <Link className="ImgLink" to="/UploadMedia">
            <br></br>
            <div className="imgContain">
              <div id="AdminManagePhotoImg" alt="Photo Link">
                <h1 className="cardText">Upload Media</h1>
              </div>
            </div>
            <br></br>
          </Link>
        </div>

        <div type="button" id="AdminVideoCard">
          <Link className="ImgLink" to="/manageVideos">
            <br></br>
            <div className="imgContain">
              <div id="AdminVideoImg" alt="Video Link">
                <h1 className="cardText">Manage Video</h1>
              </div>
            </div>

            <br></br>
          </Link>
        </div>
      </div>
      <div className="secCardContain">
        <div id="AdminManageCard">
          <Link className="ImgLink" to="/manageProfile">
            <br></br>
            <div className="imgContain">
              <div id="AdminProfilePhotoImg" alt="Photo Link">
                <h1 className="cardText">Manage Profile</h1>
              </div>
            </div>
            <br></br>
          </Link>
        </div>
      </div>
    </div>
  );
}
