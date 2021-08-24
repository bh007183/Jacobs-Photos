import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
 
export default function Home() {
  
  return (
    <div className="headerPhoto">
      <div id="CardContain">
        <img id="img1" alt="Rock Climbing"></img>
        <img id="img2" alt="Night Lantern"></img>

        <div className="background">
          <img className="water" alt="White Water Rafting"></img>
        </div>

        <svg id="svg">
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              id="sea-filter"
              numOctaves="3"
              seed="2"
              baseFrequency="0.02 0.05"
            ></feTurbulence>
            <feDisplacementMap
              scale="20"
              in="SourceGraphic"
            ></feDisplacementMap>
          </filter>

          <animate
            xlinkHref="#sea-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          />
        </svg>

        <img id="img4" alt="Alpine Sunset"></img>
        <img id="img5" alt="Moab Bike"></img>
        
        <div id="introCard">
 
        <p id="introName">Jacob Hopkins</p>
        <p id="jobTitle">Photographer</p>
          <div id="linkContain">
            <div className="buttonContain">
            
              <IconButton className='icon' href="https://www.facebook.com/jacob.hopkins.79" target="_Blank">
              <FacebookIcon style={{color: "white"}} />
              </IconButton>
              <IconButton className='icon' href="https://www.instagram.com/_jacob.hopkins/?hl=en" target="_Blank">
              <InstagramIcon style={{color: "white"}} />
              </IconButton>
                
                
            
            </div>
          

          </div>

        </div>

        <div id="ownerLinkContain">
          <Link id="ownerAccess" to="/AdminLogin">
            <p>Owner</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
