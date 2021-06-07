import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Alert} from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux"
import {uploadVideo, resetSuccessFail} from "../../store/videoActions"


export default function UploadVideo() {

  const dispatch = useDispatch()

  const Success = useSelector(state => state.Store.Video.Success)
  const Error = useSelector(state => state.Store.Video.Error)



  const [media, setMedia] = useState({
    title: "",
    video: "",
  });
  // setting status of photo upload
  

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMedia({
      ...media,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(uploadVideo(media))
   
        setTimeout(() => {
          dispatch(resetSuccessFail())
        }, 4000);
     
       
       
      
  };

  return (
    <form onSubmit={handleSubmit} className="manageVideoForm">
      <br></br>
      <div className="row11">
        <div id="PhotoTitle">
          <input
            style={{ width: "100%" }}
            onChange={handleChange}
            name="title"
            value={media.title}
            placeholder="Image Title"
          ></input>
        </div>
      </div>
      <br></br>

      <div className="row11">
        <div id="PhotoTitle">
          <input
            style={{ width: "100%" }}
            onChange={handleChange}
            name="video"
            value={media.video}
            placeholder="Youtube URL"
          ></input>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="row11">
        <div id="submitButton">
          <button style={{ width: "100%" }} type="submit">
            {" "}
            Submit
          </button>
        </div>
      </div>
      <div className="row11">
        <div className="alert">
        {Success ? (
              <Alert style={{width: "100%"}} severity="success">{Success}</Alert>
            ) : (
              <></>
            )}
            {Error ? (
              <Alert  style={{width: "100%"}} severity="error">{Error}</Alert>
            ) : (
              <></>
            )}
        </div>
      </div>
    </form>
  );
}
