import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="headerPhoto">
        <div id="NavBar">
          <div id="NameLogo" className="centerItem">
            <Link id="LogoRouterLink" to="/">
              
              NAMELOGO HERE
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
            
            bro
          </div>
        </div>
      </div>
    </>
  );
}
