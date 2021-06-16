import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Fab from '@material-ui/core/Fab';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from "react-redux";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from "@material-ui/core/IconButton"
 
export default function Home() {
  const dispatch = useDispatch();
  let images = useSelector((state) => state.Store.Photo.All);
  useEffect(() => {
    // dispatch(getFeatured())
  }, []);

  return (
    <div className="headerPhoto">
      <div id="CardContain">
        <img id="img1"></img>
        <img id="img2"></img>

        <div className="background">
          <img className="water"></img>
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

        <img id="img4"></img>
        <img id="img5"></img>

        <div id="introCard">
 
        <p id="introName">Jacob Hopkins </p>
        <div id="linkContain">
          <div className="buttonContain">
           
            <IconButton href="https://www.facebook.com/jacob.hopkins.79" target="_Blank">
            <FacebookIcon style={{color: "white"}} />
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
