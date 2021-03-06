import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {getPhotoByCategory, getAllPhotos} from "../../store/photoActions"
import {useDispatch} from "react-redux"

import "./style.css";

export default function PhotoDrawer(props) {
    const dispatch = useDispatch()

const handleCategory = (event) => {
    dispatch(getPhotoByCategory(event.target.outerText))
}


  return (
    <>
      <Drawer anchor={"left"} open={props.open} onClose={props.handleClose}>
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem onClick={handleCategory} button>
              <ListItemText primary={"Featured"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleCategory} button>
              <ListItemText primary={"Adventure"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleCategory} button>
              <ListItemText primary={"Night"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleCategory} button>
              <ListItemText primary={"Nature"} />
            </ListItem>
            <Divider />
            <ListItem onClick={handleCategory} button>
              <ListItemText primary={"Travel"} />
            </ListItem>
            <Divider />
            <ListItem onClick={() => dispatch(getAllPhotos())} button>
              <ListItemText primary={"All"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
