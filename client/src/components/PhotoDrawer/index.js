import React from "react";

import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./style.css";
import InfoIcon from "@material-ui/icons/Info";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export default function PhotoDrawer(props) {
  return (
    <>
      <Drawer anchor={"left"} open={props.open} onClose={props.handleClose}>
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className="DrawerIcons" />
              </ListItemIcon>
              <ListItemText primary={"Home Page"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PhotoLibraryIcon className="DrawerIcons" />
              </ListItemIcon>
              <ListItemText primary={"Photos"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <VideoLibraryIcon className="DrawerIcons" />
              </ListItemIcon>
              <ListItemText primary={"Videos"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <InfoIcon className="DrawerIcons" />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <ContactSupportIcon className="DrawerIcons" />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
