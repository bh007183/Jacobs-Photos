import React from "react";

import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useSelector} from "react-redux"
import { Alert} from '@material-ui/lab';
import "./style.css"

export default function SimpleModal(props) {
    
  const Success = useSelector(state => state.Store.Photo.Success)
  const Error = useSelector(state => state.Store.Photo.Error)

  return (
    <Modal
   
      
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      
      <div  id="modal"  className="EditMediaFlex" style={{background: "purple" }}>
        
        <form onSubmit={props.handleSubmit} className="editForm">
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
        <button onClick={props.handleDelete } type="click" id="deleteBtn">Delete Img</button>
          <div className="editRowGrid">
            <div id="PhotoTitle">
              <input
                style={{ width: "100%" }}
                onChange={props.handleChange}
                name="title"
                  value={props.obj.title}
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
                  value={props.obj.category}
                  onChange={props.handleChange}
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
                  value={props.obj.layout}
                  onChange={props.handleChange}
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
            <div id="textAr">
              <textarea
                style={{ width: "100%" }}
                placeholder="Whats going on in this photo? "
                onChange={props.handleChange}
                name="about"
                  value={props.obj.about}
              ></textarea>
            </div>
          </div>
          <div className="editRowGrid">
            <div id="submitButton">
              <button style={{ width: "100%" }} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
