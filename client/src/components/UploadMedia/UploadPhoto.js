import React, { useEffect, useState } from "react";
import "./style.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { Alert} from '@material-ui/lab';
export default function UploadPhoto() {
  const [photo, setPhoto] = useState({
    image: "",
    layout: "",
    title: "",
    category: "",
    about: "",
  });
  // setting status of photo upload
  const [status, setStatus] = useState({
    success: "",
    error: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setPhoto({
      ...photo,
      [name]: value,
    });
  };

  var widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDNAME,
      uploadPreset: process.env.REACT_APP_CLOUDPRESET,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setPhoto({ ...photo, image: result.info.url });
      }
    }
  );

  const handleImageUpload = (event) => {
    event.preventDefault();
    widget.open();
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  
      axios
      .post("http://localhost:8080/addPhoto", photo, {
        headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
        
      
        
      })
      .then((res) => {
        console.log(res)
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
        console.log(err)
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

   
  }
  

  return (
    <form onSubmit={handleSubmit} className="managePhotoForm">
      <div className="row11">
        <div id="PhotoTitle">
          <input
            style={{ width: "100%" }}
            onChange={handleChange}
            name="title"
            value={photo.title}
            placeholder="Image Title"
          ></input>
        </div>
      </div>
      <div className="row11">
        <div id="Category">
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              value={photo.category}
              onChange={handleChange}
              name="category"
            >
              <MenuItem value="">
                <em>Category</em>
              </MenuItem>
              <MenuItem value={"Adventure"}>Adventure</MenuItem>
              <MenuItem value={"Scenery"}>Scenery</MenuItem>
              <MenuItem value={"Wedding"}>Wedding</MenuItem>
              <MenuItem value={"Plants"}>Plants</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div id="ColorScheme">
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
            Layout
            </InputLabel>
            <Select
              value={photo.layout}
              onChange={handleChange}
              name="layout"
            >
              <MenuItem value="">
                <em>Layout</em>
              </MenuItem>
              <MenuItem value={"Portrait"}>Portrait</MenuItem>
              <MenuItem value={"Landscape"}>Landscape</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="row11">
        <div id="UploadedImage">
          <img id="img" src={photo.image}></img>
        </div>

        <div id="widgetOpen">
          <button type="click" onClick={handleImageUpload}>
            Upload Image
          </button>
        </div>
      </div>
      <div className="row11">
        <div id="textAr">
          <textarea
            style={{ width: "100%" }}
            placeholder="Whats going on in this photo? "
            onChange={handleChange}
            name="about"
            value={photo.about}
          ></textarea>
        </div>
      </div>
      <div className="row11">
        <div id="submitButton">
          <button  style={{ width: "100%" }} type="submit">
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
