import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Authentication from "../../Functions/Authentication"



export default function AdminHome() {

    useEffect(() => {
   Authentication()

    }, [])


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
          <Link className="ImgLink" to="/EditMedia">
            <br></br>
            <div className="imgContain">
              <div id="AdminVideoImg" alt="Video Link">
                <h1 className="cardText">Edit Media</h1>
              </div>
            </div>

            <br></br>
          </Link>
        </div>
      </div>
      <div className="secCardContain">
        <div id="AdminManageCard">
          <Link className="ImgLink" to="/AdminEdit">
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
