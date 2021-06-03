import React from "react";

import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./style.css";

export default function PhotoDrawer(props) {
  return (
    <>
      <Drawer anchor={"left"} open={props.open} onClose={props.handleClose}>
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem button>
              <ListItemText primary={"Featured"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Adventure"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Night"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Scenery"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={"Plants"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
