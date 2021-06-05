import React from "react";

import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SimpleModal(props) {
    
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <Modal
      style={{width: "50vw"}}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="EditMediaFlex" style={{background: "purple", width: "50vw"}}>
        <form onSubmit={handleSubmit} className="editForm">
          <div className="editRowGrid">
            <div id="PhotoTitle">
              <input
                style={{ width: "100%" }}
                onChange={handleChange}
                name="title"
                //   value={photo.title}
                placeholder="Image Title"
              ></input>
            </div>
          </div>
          <div className="editRowGrid">
            <div id="Category">
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Category
                </InputLabel>
                <Select
                  // value={photo.category}
                  // onChange={props.handleChange}
                  name="category"
                >
                  <MenuItem value="">
                    <em>Category</em>
                  </MenuItem>
                  <MenuItem value={"Adventure"}>Adventure</MenuItem>
                  <MenuItem value={"Scenery"}>Scenery</MenuItem>
                  <MenuItem value={"Featured"}>Featured</MenuItem>
                  <MenuItem value={"Night"}>Night</MenuItem>
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
                  // value={photo.layout}
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
          <div className="editRowGrid">
            <div id="UploadedImage">
              {/* <img id="img" src={photo.image}></img> */}
            </div>

            <div id="widgetOpen">
              <button type="click">Upload Image</button>
            </div>
          </div>
          <div className="editRowGrid">
            <div id="textAr">
              <textarea
                style={{ width: "100%" }}
                placeholder="Whats going on in this photo? "
                onChange={handleChange}
                name="about"
                //   value={photo.about}
              ></textarea>
            </div>
          </div>
          <div className="editRowGrid">
            <div id="submitButton">
              <button style={{ width: "100%" }} type="submit">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
