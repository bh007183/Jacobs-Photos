import React, { useEffect, useState } from "react";
import "./style.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios"


export default function AdminPhotoManage() {
  const [photo, setPhoto] = useState({
    image: "",
    colorScheme: "",
    title: "",
    category: "",
    about: ""
  });

  const [status, setStatus] = useState({
   success: "",
   error: ""
  })

  //   const [age, setAge] =useState('');
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
      axios.post("http://localhost:8080/addPhoto", {
            data: photo,
        }).then(res => {


            
        }).catch(err => {
            alert(err.response.data)
        })
  }

  return (
    <div id="managePhotoContain">
      <form onSubmit={handleSubmit} id="managePhotoForm">
        <div className="row11">
          <div id="PhotoTitle">
            <input
            style={{width: "100%"}}
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
                Image Color
              </InputLabel>
              <Select
                value={photo.colorScheme}
                onChange={handleChange}
                name="colorScheme"
              >
                <MenuItem value="">
                  <em>Color Class</em>
                </MenuItem>
                <MenuItem value={"Dark"}>Dark</MenuItem>
                <MenuItem value={"Light"}>Light</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row11">
          <div id="UploadedImage"  >

              <img id="img"src={photo.image}></img>
          </div>



          <div id="widgetOpen">
            <button type="click" onClick={handleImageUpload}>
              Upload Image
            </button>
          </div>
        </div>
        <div className="row11">
            <div id="textAr">
            <textarea style={{width: "100%"}} placeholder="Whats going on in this photo? " onChange={handleChange} name="about" value={photo.about}>


            </textarea>
            </div>
        </div>
        <div className="row11">
            <div id="submitButton">
                <button style={{width: "100%"}} type="submit"> Submit</button>
            
            </div>
        </div>
      </form>
    </div>
  );
}
