import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Alert} from '@material-ui/lab';


export default function UploadVideo() {
  const [media, setMedia] = useState({
    title: "",
    video: "",
  });
  // setting status of photo upload
  const [status, setStatus] = useState({
    success: "",
    error: "",
  });

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
    axios
      .post("http://localhost:8080/addVideo", {"body": media}, {
        headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
      })
      .then((res) => {
        setStatus({
          success: res.data,
        });
        setTimeout(() => {
          setStatus({
            error: "",
            success: "",
          });
        }, 2000);
      })
      .catch((err) => {
        setStatus({
          error: err.response.data,
        });
        setTimeout(() => {
          setStatus({
            error: "",
            success: "",
          });
        }, 5000);
      });
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
        {status.success ? (
              <Alert style={{width: "100%"}} severity="success">{status.success}</Alert>
            ) : (
              <></>
            )}
            {status.error ? (
              <Alert  style={{width: "100%"}} severity="error">{status.error}</Alert>
            ) : (
              <></>
            )}
        </div>
      </div>
    </form>
  );
}
