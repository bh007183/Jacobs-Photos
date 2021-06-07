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

export default function Drawers(props) {
  return (
    <>
      <Drawer anchor={"right"} open={props.open} onClose={props.handleClose}>
        <div role="presentation" onClick={props.handleClose}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/">
                  <HomeIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/">
                <ListItemText primary={"Home Page"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/photos">
                  <PhotoLibraryIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/photos">
                <ListItemText primary={"Photos"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/videos">
                  <VideoLibraryIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/videos">
                <ListItemText primary={"Videos"} />
              </Link>
            </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/about">
                  <InfoIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/about">
                <ListItemText primary={"About"} />
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Link className="DrawerRouterLink" to="/contact">
                  <ContactSupportIcon className="DrawerIcons" />
                </Link>
              </ListItemIcon>
              <Link className="DrawerRouterLink" to="/contact">
                <ListItemText primary={"Contact"} />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
