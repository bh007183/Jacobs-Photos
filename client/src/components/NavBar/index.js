import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawers from "../Drawer"
export default function NavBar() {




    const [state, setState] = React.useState(false);

    const handleOpen = () => {
      setState(true);
    };
    const handleDrawerClose = () => {
      setState(false);
    };
  return (
    <>
      
       
        <div id="NavBar" >
          <div id="NameLogo" className="centerItem">
            <Link id="LogoRouterLink" to="/">
            <img src={logo} style={{height: "30px"}} alt="Logo" />
              {/* NAMELOGO HERE {logo} */}
            </Link>
          </div>

          <div id="Photos" className="centerItem">
            <Link className="RouterLink" to="/photos">
             
              Photos
            </Link>
          </div>
          <div id="Video" className="centerItem">
            <Link className="RouterLink" to="/videos">
            
              Videos
            </Link>
          </div>
          <div id="About" className="centerItem">
            <Link className="RouterLink" to="/about">
            
              About
            </Link>
          </div>
          <div id="Contact" className="centerItem">
            <Link className="RouterLink" to="/contact">
              
              Contact
            </Link>
          </div>
          <div id="Slider" className="centerItem">
            
          <Drawers open={state} handleClose={handleDrawerClose} />
          <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleOpen}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
        

        

      
    </>
  );
}
